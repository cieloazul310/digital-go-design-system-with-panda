/**
 * reference;
 * https://github.com/cschroeter/park-ui/blob/main/website/src/components/ui/styled/utils/create-style-context.tsx
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/react/src/styled-system/create-slot-recipe-context.tsx
 */
import {
  ElementType,
  ForwardRefExoticComponent,
  PropsWithoutRef,
  RefAttributes,
  createContext,
  forwardRef,
  useContext,
} from "react";
import { cx } from "styled-system/css";
import { styled, isCssProperty, type StyledComponent } from "styled-system/jsx";

type Props = Record<string, unknown>;

type Recipe = {
  (props?: Props): Props;
  splitVariantProps: (props: Props) => [Props, Props];
};

type Slot<R extends Recipe> = keyof ReturnType<R>;

type Options = {
  forwardProps?: string[];
  defaultClassName?: string;
  defaultProps?: Record<string, unknown>;
};

const shouldForwardProp = (
  prop: string,
  variantKeys: string[],
  options: Options = {},
) =>
  options.forwardProps?.includes(prop) ||
  (!variantKeys.includes(prop) && !isCssProperty(prop));

export const createStyleContext = <R extends Recipe>(recipe: R) => {
  const StyleContext = createContext<Record<Slot<R>, string> | null>(null);

  const withRootProvider = <P extends Record<string, unknown>>(
    Component: ElementType,
  ) => {
    const StyledComponent = (props: P) => {
      const [variantProps, otherProps] = recipe.splitVariantProps(props);
      const slotStyles = recipe(variantProps) as Record<Slot<R>, string>;

      return (
        <StyleContext.Provider value={slotStyles}>
          <Component {...otherProps} />
        </StyleContext.Provider>
      );
    };
    return StyledComponent;
  };

  const withProvider = <T, P extends { className?: string }>(
    Component: ElementType,
    slot: Slot<R>,
    options: Options = {},
  ): ForwardRefExoticComponent<PropsWithoutRef<P> & RefAttributes<T>> => {
    const StyledComponent = styled(
      Component,
      {},
      {
        shouldForwardProp: (prop, variantKeys) =>
          shouldForwardProp(prop, variantKeys, options),
      },
    ) as StyledComponent<ElementType>;

    const StyledSlotProvider = forwardRef<T, P>((props, ref) => {
      const [variantProps, otherProps] = recipe.splitVariantProps(props);
      const slotStyles = recipe(variantProps) as Record<Slot<R>, string>;
      const mergedClassName = cx(
        options.defaultClassName,
        slotStyles?.[slot],
        props.className,
      );

      return (
        <StyleContext.Provider value={slotStyles}>
          <StyledComponent
            ref={ref}
            {...options.defaultProps}
            {...(otherProps as P)}
            className={mergedClassName}
          />
        </StyleContext.Provider>
      );
    });

    // @ts-expect-error ts 2339
    StyledSlotProvider.displayName = Component.displayName || Component.name;

    return StyledSlotProvider;
  };

  const withContext = <T, P extends { className?: string }>(
    Component: ElementType,
    slot: Slot<R>,
    options: Options = {},
  ): ForwardRefExoticComponent<PropsWithoutRef<P> & RefAttributes<T>> => {
    const StyledComponent = styled(Component);

    const StyledSlotComponent = forwardRef<T, P>((props, ref) => {
      const slotStyles = useContext(StyleContext);
      const mergedClassName = cx(
        options.defaultClassName,
        slotStyles?.[slot],
        props.className,
      );

      return (
        <StyledComponent
          ref={ref}
          {...options.defaultProps}
          {...props}
          className={mergedClassName}
        />
      );
    });

    // @ts-expect-error ts 2339
    StyledSlotComponent.displayName = Component.displayName || Component.name;

    return StyledSlotComponent;
  };

  return {
    withRootProvider,
    withProvider,
    withContext,
  };
};

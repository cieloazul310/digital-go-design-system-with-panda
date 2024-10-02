/**
 * source:
 * https://github.com/digital-go-jp/design-system-example-components/blob/main/src/components/Select/Select.tsx
 */
import { defineSlotRecipe } from "@pandacss/dev";
import { anatomy as selectAnatomy } from "@ark-ui/anatomy/select";
import label from "./label";

export default defineSlotRecipe({
  className: "select",
  description:
    "セレクトボックスは、複数の選択肢を提供するフォームコントロールです。",
  slots: selectAnatomy.keys(),
  base: {
    root: {
      display: "flex",
      flexDirection: "column",
      gap: 1.5,
    },
    label: {
      ...label.base,
    },
    control: {
      /**
       * relative min-w-80 max-w-full
       */
      position: "relative",
      minWidth: "80px",
      maxWidth: "full",
    },
    trigger: {
      width: "full",
      height: "full",
      appearance: "none",
      textStyle: "oln-16N-100",
      px: 4,
      py: "calc(11/16 * 1rem)",
      borderWidth: "1px",
      borderColor: {
        base: "solid-gray.900",
        _disabled: "solid-gray.300",
      },
      rounded: "lg",
      color: { base: "solid-gray.800", _disabled: "solid-gray.420" },
      bg: { base: "white", _disabled: "solid-gray.50" },
      _focus: {
        outlineWidth: "4px",
        outlineColor: "black",
        outlineOffset: "calc(2/16*1rem)",
        borderInset: "md",
      },
    },
    indicator: {
      /**
       * pointer-events-none absolute right-4 top-1/2 -translate-y-1/2
        ${props['aria-disabled'] ? 'text-solid-gray-420' : 'text-solid-gray-900'}
       */
      pointerEvents: "none",
      position: "absolute",
      right: 4,
      top: "50%",
      transform: "translateY(-50%)",
      color: { base: "solid-gray.900", _disabled: "solid-gray.420" },
    },
  },
  variants: {
    size: {
      lg: {
        control: {
          height: 14,
        },
        label: { ...label.variants?.size?.lg },
      },
      md: {
        control: {
          height: 12,
        },
        label: { ...label.variants?.size?.md },
      },
      sm: {
        control: {
          height: 10,
        },
        label: { ...label.variants?.size?.sm },
      },
    },
    invalid: {
      true: {
        trigger: {
          borderColor: "error.1",
        },
      },
    },
  },
  defaultVariants: {
    size: "lg",
    invalid: false,
  },
});

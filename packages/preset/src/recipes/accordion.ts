/**
 * source:
 * https://github.com/digital-go-jp/design-system-example-components/blob/main/src/components/Accordion/Accordion.tsx
 */
import { defineSlotRecipe } from "@pandacss/dev";
import { anatomy as accordionAnatomy } from "@ark-ui/anatomy/accordion";

export default defineSlotRecipe({
  className: "accordion",
  slots: accordionAnatomy.keys(),
  base: {
    item: {
      borderBottomWidth: "1px",
      borderBottomColor: "solid-gray.420",
    },
    itemTrigger: {
      width: "full",
      display: "flex",
      bg: {
        base: "transparent",
        _hover: "solid-gray.50",
        _focusVisible: "yellow.300",
      },
      alignItems: "center",
      justifyContent: "space-between",
      gap: { base: 4, md: 10 },
      p: { base: 2, md: 3 },
      textStyle: { base: "std-16M-170", md: "std-20N-150" },
      cursor: { _hover: "pointer" },
      _focusVisible: {
        outlineWidth: "4px",
        outlineColor: "black",
        outlineOffset: "calc(2/16*1rem)",
      },
      /**
        group/summary flex cursor-default list-none items-center justify-between gap-4 p-2 text-std-16N-170
        desktop:p-3 desktop:text-std-20N-150 desktop:gap-10
        hover:bg-solid-gray-50
        focus-visible:rounded focus-visible:outline focus-visible:outline-4 focus-visible:outline-black focus-visible:outline-offset-[calc(2/16*1rem)] focus-visible:bg-yellow-300 focus-visible:ring-[calc(2/16*1rem)] focus-visible:ring-yellow-300
        [&::-webkit-details-marker]:hidden ${className ?? ''}
       */
    },
    itemIndicator: {
      display: "inline-flex",
      bg: "white",
      color: "keyColor.1000",
      outlineStyle: "solid",
      outlineWidth: { base: "1px", _groupHover: "2px" },
      outlineColor: "keyColor.1000",
      transformOrigin: "center",
      transitionDuration: "normal",
      transitionProperty: "transform",
      transitionTimingFunction: "default",
      _open: {
        transform: "rotate(-180deg)",
      },
      /**
       * inline-flex border border-current bg-white text-blue-1000
       */
    },
    itemContent: {
      p: { base: 2, md: 3 },
    },
  },
  variants: {
    shapeStyle: {
      circle: {
        itemIndicator: {
          rounded: "full",
        },
      },
      square: {
        itemIndicator: {
          rounded: "md",
        },
      },
    },
  },
  defaultVariants: {
    shapeStyle: "circle",
  },
});

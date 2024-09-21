import { defineSlotRecipe } from "@pandacss/dev";
import { accordionAnatomy } from "@ark-ui/react/accordion";

const accordion = defineSlotRecipe({
  className: "accordion",
  slots: accordionAnatomy.keys(),
  base: {
    root: {
      borderBottomWidth: "1px",
      borderBottomColor: "solid-grey.420",
    },
    itemIndicator: {
      display: "inline-flex",
      bg: "white",
      color: "keyColor.1000",
      border: "1px",
      borderColor: "keyColor.1000",
      /**
       * inline-flex border border-current bg-white text-blue-1000
       */
    },
    itemContent: {
      display: "flex",
      bg: { base: "transparent", _hover: "solid-grey.50" },
      alignItems: "center",
      justifyContent: "space-between",
      gap: { base: 4, md: 10 },
      p: 2,
      textStyle: { base: "std-16M-7", md: "std-20N-5" },
      /**
        group/summary flex cursor-default list-none items-center justify-between gap-4 p-2 text-std-16M-7
        desktop:p-3 desktop:text-std-20N-5 desktop:gap-10
        hover:bg-solid-grey-50
        focus-visible:rounded focus-visible:outline focus-visible:outline-4 focus-visible:outline-black focus-visible:outline-offset-[calc(2/16*1rem)] focus-visible:bg-yellow-300 focus-visible:ring-[calc(2/16*1rem)] focus-visible:ring-yellow-300
        [&::-webkit-details-marker]:hidden ${className ?? ''}
       */
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
          rounded: "lg",
        },
      },
    },
  },
});

export default accordion;

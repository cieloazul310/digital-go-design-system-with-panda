import { defineSlotRecipe } from "@pandacss/dev";
import { anatomy as tabsAnatomy } from "@zag-js/tabs";

export default defineSlotRecipe({
  className: "tabs",
  slots: tabsAnatomy.keys(),
  base: {
    root: {
      colorPalette: "keyColor",
    },
    list: {
      /**
       * flex w-full min-w-max items-end whitespace-nowrap
       * border-b border-solid-gray-420
       */
      display: "flex",
      width: "full",
      alignItems: "end",
      whiteSpace: "nowrap",
      borderBottomWidth: "1px",
      borderColor: "solid-gray.420",
      overflowX: "auto",
    },
    trigger: {
      /**
       * relative z-0 inline-flex gap-2 justify-center items-center
       * text-oln-14B-100 md:text-oln-16B-100
       */
      position: "relative",
      zIndex: 0,
      display: "inline-flex",
      gap: 2,
      justifyContent: "center",
      alignItems: "center",
      textStyle: { base: "oln-14B-100", md: "oln-16B-100" },
      /**
       * px-4 py-6 group md:px-8 md:py-6
       * hover:bg-solid-gray-50 focus-visible:bg-yellow-300
       * aria-[current=page]:bg-white
       */
      px: { base: 4, md: 8 },
      py: 6,
      cursor: "pointer",
      bg: {
        base: "transparent",
        _hover: "solid-gray.50",
        _focusVisible: { base: "yellow.300", _hover: "yellow.300" },
        _selected: {
          base: "white",
          _hover: "white",
          _focusVisible: "yellow.300",
        },
      },
      /**
       * focus-visible:z-10 focus-visible:rounded-4
       * focus-visible:outline focus-visible:outline-4
       * focus-visible:outline-offset-[calc(2/16*1rem)] focus-visible:outline-black
       * focus-visible:ring-[calc(2/16*1rem)] focus-visible:ring-yellow-300
       */
      _focusVisible: {
        zIndex: 10,
        rounded: 4,
        outlineStyle: "solid",
        outlineWidth: "4px",
        outlineColor: "black",
        outlineOffset: 0.5,
        focusBox: "calc({spacing.1} / 2)",
      },
      _selected: {
        /**
         * relative text-blue-900
         * after:absolute after:bottom-0 after:left-0 after:w-full after:border-b-4
         * after:border-current
         * aria-[current=page]:cursor-default
         */
        color: "colorPalette.primary",
        cursor: "default",
        _after: {
          content: '""',
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "full",
          borderBottomWidth: "4px",
          borderBlockColor: "currentcolor",
        },
      },
    },
  },
});

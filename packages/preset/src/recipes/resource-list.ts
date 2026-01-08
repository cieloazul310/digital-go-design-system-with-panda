import { defineSlotRecipe } from "@pandacss/dev";
import { resourceListAnatomy } from "../anatomy";

export default defineSlotRecipe({
  className: "resource-list",
  slots: resourceListAnatomy.keys(),
  base: {
    root: {
      display: "flex",
      borderColor: "solid-gray.420",
      overflow: "hidden",
      colorPalette: "keyColor",
      bg: {
        "&:has(input:checked)": "colorPalette.bg",
        _selected: "colorPalette.bg",
      },
    },
    main: {
      display: "flex",
      flexGrow: 1,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "start",
      gap: { base: 4, md: 6 },
      color: "solid-gray.800",
      textStyle: "dns-16N-130",
      /**
       * p-4 md:px-6 md:py-4
       */
      py: 4,
      px: { base: 4, md: 6 },
      bg: { base: "transparent", _hover: "solid-gray.50" },
      _focusVisible: {
        outlineStyle: "solid",
        outlineWidth: "4px",
        outlineColor: "black",
        outlineOffset: 0.5,
        focusBox: "calc({spacing.1} / 2)",
      },
    },
    action: {
      p: 4,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    content: {
      height: "full",
      flexGrow: 1,
      display: "flex",
      flexDirection: "column",
    },
    title: {
      /**
       * mb-4 text-std-20B-150 font-bold group-hover:text-blue-1000 group-hover:decoration-[calc(3/16*1rem)] md:mb-4
       */
      textStyle: "std-20B-150",
      width: "fit-content",
    },
  },
  variants: {
    variant: {
      list: {
        root: {
          borderBottomWidth: "1px",
        },
      },
      frame: {
        root: {
          rounded: 16,
          borderWidth: "1px",
        },
      },
    },
    asLink: {
      true: {
        main: {
          position: "relative",
        },
        title: {
          _before: {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            width: "full",
            height: "full",
            zIndex: 0,
            cursor: "inherit",
          },
        },
      },
    },
  },
  defaultVariants: {
    variant: "list",
    asLink: false,
  },
});

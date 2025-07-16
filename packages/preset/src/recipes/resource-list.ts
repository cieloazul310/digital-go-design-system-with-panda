import { defineSlotRecipe } from "@pandacss/dev";
import { resourceListAnatomy } from "../anatomy";

export default defineSlotRecipe({
  className: "resource-list",
  slots: resourceListAnatomy.keys(),
  base: {
    root: {
      display: "flex",
      borderColor: "solid-gray.420",
      bg: {
        "&:has(input:checked)": "keyColor.50",
        _selected: "keyColor.50",
      },
    },
    contentsContainer: {
      display: "flex",
      flexGrow: 1,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "start",
      gap: { base: 4, md: 6 },
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
        outlineOffset: "calc(2 / 16 * 1rem)",
        focusRing: "calc(2 / 16 * 1rem)",
      },
    },
    functionButton: {
      p: 4,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    frontIcon: {
      // px: 2,
    },
    content: {
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
    label: {
      zIndex: 1,
      width: "fit-content",
      textStyle: "oln-17N-100",
      color: "solid-gray.800",
    },
    supportText: {
      color: "solid-gray.800",
    },
    subLabel: {
      zIndex: 1,
      color: "solid-gray.800",
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
        contentsContainer: {
          borderTopLeftRadius: 16,
          borderBottomLeftRadius: 16,
          _only: {
            borderTopRightRadius: 16,
            borderBottomRightRadius: 16,
          },
        },
        functionButton: {
          borderTopRightRadius: 16,
          borderBottomRightRadius: 16,
        },
      },
    },
    asLink: {
      true: {
        contentsContainer: {
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
        supportText: {
          textDecoration: { base: "none", _groupHover: "underline" },
        },
      },
    },
  },
});

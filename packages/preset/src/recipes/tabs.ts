import { defineSlotRecipe } from "@pandacss/dev";
import { anatomy as tabsAnatomy } from "@zag-js/tabs";

export const tabs = defineSlotRecipe({
  className: "tabs",
  slots: tabsAnatomy.keys(),
  base: {
    root: {
      position: "relative",
      zIndex: 0,
      display: "flex",
      colorPalette: "keyColor",
      color: "solid-gray.800",
      textStyle: "std-16N-170",
      overflowWrap: "anywhere",
    },
    list: {
      position: "relative",
      zIndex: 0,
      display: "flex",
      m: -1.5,
      overflow: "hidden",
      pt: "calc(7 / 16 * 1rem)",
      pr: 1.5,
      pb: 1.5,
      pl: "calc(7 / 16 * 1rem)",
      _after: {
        position: "relative",
        flexGrow: 1,
        borderWidth: 0,
        borderStyle: "solid",
        borderColor: "solid-gray.420",
        content: '""',
      },
    },
    trigger: {
      position: "relative",
      isolation: "isolate",
      mt: "-1px",
      ml: "-1px",
      zIndex: 0,
      display: "flex",
      alignItems: "center",
      borderWidth: "1px",
      borderColor: "solid-gray.420",
      bg: { base: "white", _hover: "solid-gray.50", _selected: "white" },
      p: 4,
      textAlign: "left",
      textDecoration: { base: "none", _hover: "underline", _selected: "none" },
      textUnderlineOffset: "calc(3 / 16 * 1rem)",
      textDecorationThickness: "calc(1 / 16 * 1rem)",
      cursor: "pointer",
      _hover: {
        bg: { base: "solid-gray.50", _selected: "white" },
        // textDecoration: { base: "underline", _selected: "none" },
        // textUnderlineOffset: { base: "calc(3 / 16 * 1rem)", _selected: undefined },
        // textDecorationThickness: { base: "calc(1 / 16 * 1rem)", _selected: undefined },
        _before: { bg: { base: "solid-gray.420", _selected: undefined } },
        /*
        _notSelected: {
          bg: "solid-gray.50",
          textDecoration: "underline",
          textUnderlineOffset: "calc(3 / 16 * 1rem)",
          textDecorationThickness: "calc(1 / 16 * 1rem)",
          _before: { bg: "solid-gray.420" },
        },
        */
      },
      _before: {
        content: '""',
        position: "absolute",
      },
      _selected: {
        fontWeight: "bold",
        cursor: "default",
      },
      _focusVisible: {
        zIndex: 1,
        overflow: "hidden",
        outlineStyle: "solid",
        outlineWidth: "4px",
        outlineColor: "black",
        outlineOffset: 0.5,
        rounded: "calc(4 / 16 * 1rem)",
        focusBox: "calc({spacing.1} / 2)",
      },
    },
    indicator: {
      display: "none",
    },
    content: {
      borderWidth: "1px",
      borderColor: "solid-gray.420",
      bg: "white",
      p: 4,
      _focusVisible: {
        zIndex: 1,
        outlineStyle: "solid",
        outlineWidth: "4px",
        outlineColor: "black",
        outlineOffset: 0.5,
        rounded: "calc(4 / 16 * 1rem)",
        focusBox: "calc({spacing.1} / 2)",
      },
    },
  },
  variants: {
    placement: {
      top: {
        root: { flexDirection: "column" },
        list: {
          flexWrap: "wrap",
          _after: {
            ml: "-1px",
            width: "1px",
            borderBottomWidth: "1px",
          },
        },
        trigger: {
          pt: "calc({spacing.4} + 3px)",
          pb: "calc({spacing.4} - 3px)",
          _before: {
            top: "0px",
            left: 0,
            right: 0,
            height: "5px",
            borderBottomWidth: "5px",
            borderBottomColor: "solid-gray.50",
          },
          _hover: {
            _before: {
              borderBottomColor: "solid-gray.420",
            },
          },
          _selected: {
            borderBottomColor: "transparent",
            _before: {
              left: 0,
              right: 0,
              height: "6px",
              borderBottomWidth: "6px",
              borderBottomColor: "keyColor.900",
            },
          },
        },
        content: { borderTopWidth: 0 },
      },
      bottom: {
        root: { flexDirection: "column" },
        list: {
          flexWrap: "wrap-reverse",
          _after: {
            mt: "-1px",
            ml: "-1px",
            width: "1px",
            borderTopWidth: "1px",
          },
        },
        trigger: {
          pt: "calc({spacing.4} - 3px)",
          pb: "calc({spacing.4} + 3px)",
          _before: {
            bottom: "0px",
            left: 0,
            right: 0,
            height: "5px",
            borderBottomWidth: "5px",
            borderBottomColor: "solid-gray.50",
          },
          _hover: {
            _before: {
              borderBottomColor: "solid-gray.420",
            },
          },
          _selected: {
            borderTopColor: "transparent",
            _before: {
              left: 0,
              right: 0,
              height: "6px",
              borderBottomWidth: "6px",
              borderBottomColor: "keyColor.900",
            },
          },
        },
        content: { borderBottomWidth: 0 },
      },
      left: {
        root: { flexDirection: "row" },
        list: {
          flexDirection: "column",
          flexShrink: 0,
          _after: {
            mt: "-1px",
            height: "1px",
            borderRightWidth: "1px",
          },
        },
        trigger: {
          _before: {
            top: 0,
            left: 0,
            bottom: 0,
            width: "6px",
            borderRightWidth: "5px",
            borderRightColor: "solid-gray.50",
          },
          _hover: {
            _before: {
              borderRightColor: "solid-gray.420",
            },
          },
          _selected: {
            borderRightColor: "transparent",
            _before: {
              top: 0,
              bottom: 0,
              width: "6px",
              borderRightWidth: "6px",
              borderRightColor: "keyColor.900",
            },
          },
        },
        content: {
          flexGrow: 1,
          minWidth: 0,
          borderLeftWidth: 0,
        },
      },
      right: {
        root: { flexDirection: "row-reverse" },
        list: {
          flexDirection: "column",
          flexShrink: 0,
          _after: {
            mt: "-1px",
            ml: "-1px",
            height: "1px",
            borderLeftWidth: "1px",
          },
        },
        trigger: {
          _before: {
            top: 0,
            right: 0,
            bottom: 0,
            width: "6px",
            borderLeftWidth: "5px",
            borderLeftColor: "solid-gray.50",
          },
          _hover: {
            _before: {
              borderLeftColor: "solid-gray.420",
            },
          },
          _selected: {
            borderLeftColor: "transparent",
            _before: {
              top: 0,
              bottom: 0,
              width: "6px",
              borderLeftWidth: "6px",
              borderLeftColor: "keyColor.900",
            },
          },
        },
        content: {
          flexGrow: 1,
          minWidth: 0,
          borderRightWidth: 0,
        },
      },
    },
  },
  defaultVariants: {
    placement: "top",
  },
});

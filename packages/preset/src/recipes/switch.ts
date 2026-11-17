import { defineSlotRecipe } from "@pandacss/dev";
import { anatomy as switchAnatomy } from "@zag-js/switch";

export const switchRecipe = defineSlotRecipe({
  className: "switch",
  jsx: ["Switch", /Switch\.+/],
  description:
    "スイッチは、設定のオン・オフや2つの選択肢を切り替えるためのコントロールです。",
  slots: switchAnatomy.keys(),
  base: {
    root: {
      display: "flex",
      alignItems: "center",
      width: "fit-content",
      py: 2,
      colorPalette: "keyColor",
      _focusWithin: {
        "& [data-part=control]": {
          outlineStyle: "solid",
          outlineWidth: "4px",
          outlineColor: "black",
          outlineOffset: 0.5,
          focusBox: "calc({spacing.1} / 2)",
        },
      },
    },
    control: {
      position: "relative",
      display: "flex",
      alignItems: "center",
      flexShrink: 0,
      p: 1,
      rounded: "full",
      borderWidth: 2,
      borderColor: {
        base: "solid-gray.600",
        _checked: "colorPalette.900",
        _disabled: "solid-gray.300",
      },
      bg: {
        base: "white",
        _checked: "colorPalette.50",
        _disabled: "solid-gray.50",
      },
      transition: "all 150ms ease",
      _hover: {
        outlineStyle: "solid",
        outlineWidth: "4px",
        outlineColor: "solid-gray.420",
        borderColor: "black",
      },
      _checked: {
        borderColor: { base: "colorPalette.900", _disabled: "solid-gray.300" },
        bg: { base: "colorPalette.50", _disabled: "solid-gray.50" },
        _hover: {
          borderColor: "colorPalette.1100",
        },
      },
      _active: {
        outlineWidth: "6px",
        outlineColor: "solid-gray.600",
      },
      _disabled: {
        borderColor: "solid-gray.300",
        bg: "solid-gray.50",
        outlineWidth: 0,
      },
      _highContrast: {
        borderColor: "ButtonText",
        _checked: {
          borderColor: "Highlight",
        },
        _disabled: {
          borderColor: "GrayText",
        },
      },
    },
    thumb: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
      rounded: "full",
      bg: "solid-gray.800",
      transition: "margin 150ms ease, background-color 150ms ease",
      "& svg": {
        display: "none",
        width: "full",
        height: "full",
        color: "white",
      },
      _checked: {
        marginInlineStart: "auto",
        bg: { base: "colorPalette.900", _disabled: "solid-gray.300" },
        "& svg": {
          display: "block",
        },
      },
      _hover: {
        bg: { base: "black", _checked: "colorPalette.1100" },
      },
      _disabled: {
        bg: "solid-gray.300",
      },
      _highContrast: {
        bg: "ButtonText",
        _checked: {
          bg: "Highlight",
          "& svg": {
            color: "Canvas",
          },
        },
        _disabled: {
          bg: "GrayText",
        },
      },
    },
    label: {
      color: "solid-gray.800",
    },
  },
  variants: {
    variant: {
      onOff: {
        root: {
          gap: 2,
        },
        control: {
          width: 14,
          height: 9,
        },
        thumb: {
          width: 6,
          height: 6,
        },
      },
      mode: {
        root: {
          gap: 4,
          textStyle: "dns-16N-130",
          "&:hover [data-part=control]": {
            outlineStyle: "solid",
            outlineWidth: "4px",
            outlineColor: "solid-gray.420",
          },
          "&:active [data-part=control]": {
            outlineWidth: "6px",
            outlineColor: "solid-gray.600",
          },
        },
        control: {
          boxSizing: "border-box",
          width: "calc(60 / 16 * 1rem)",
          height: 7,
          p: 1.5,
          border: "none",
          bg: "transparent",
          pointerEvents: "none",
          "&::before": {
            content: '""',
            display: "block",
            width: "full",
            height: 4,
            rounded: "full",
            borderWidth: 2,
            borderColor: "colorPalette.900",
            bg: "colorPalette.100",
            transition: "border-color 150ms ease, background-color 150ms ease",
          },
          "&[data-disabled]::before": {
            borderColor: "solid-gray.300",
            bg: "solid-gray.50",
          },
          _highContrast: {
            "&::before": {
              borderColor: "ButtonText",
            },
            "&[data-disabled]::before": {
              borderColor: "GrayText",
            },
          },
        },
        thumb: {
          position: "absolute",
          top: "50%",
          left: 0,
          width: 6,
          height: 6,
          marginInlineStart: 0,
          boxSizing: "content-box",
          borderWidth: 2,
          borderColor: "white",
          bg: "colorPalette.900",
          transform: "translateY(-50%)",
          transition: "left 150ms ease, background-color 150ms ease",
          _checked: {
            left: 8,
            marginInlineStart: 0,
            bg: "colorPalette.900",
          },
          "&[data-disabled]": {
            bg: "solid-gray.300",
          },
          _highContrast: {
            borderColor: "Canvas",
            bg: "ButtonText",
            "&[data-disabled]": {
              bg: "GrayText",
            },
          },
        },
      },
    },
  },
  defaultVariants: {
    variant: "onOff",
  },
});

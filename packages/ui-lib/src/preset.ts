import { definePreset, defineRecipe } from "@pandacss/dev";
import presetBase from "@import-map-package/preset-base";

const buttonRecipe = defineRecipe({
  className: "button",
  description: "The styles for the Button component",
  base: {},
  variants: {
    variant: {
      "solid-fill": {
        bg: {
          base: "blue.900",
          _hover: "blue.1000",
          _active: "blue.1200",
          _disabled: "solid-grey.300",
        },
        color: { base: "white", _disabled: "solid-grey.50" },
        textDecoration: {
          base: "none",
          _hover: "underline",
          _active: "underline",
        },
      },
      outline: {
        bg: { base: "white", _hover: "blue.200", _active: "blue.300" },
        color: {
          base: "blue.900",
          _hover: "blue.1000",
          _active: "blue.1200",
          _disabled: "solid-grey.300",
        },
        borderWidth: "1px",
        borderColor: "blue.900",
        textDecoration: {
          base: "none",
          _hover: "underline",
          _active: "underline",
        },
      },
      text: {
        bg: {
          base: "transparent",
          _hover: "blue.50",
          active: "blue.100",
          _focusVisible: "yellow.300",
          _disabled: "transparent",
        },
        color: {
          base: "blue.900",
          _hover: "blue.1000",
          _active: "blue.1200",
          _disabled: "solid-grey.300",
        },
        textDecoration: "underline",
      },
    },
    size: {
      lg: {
        minWidth: "136px",
        minHeight: "56px",
        textStyle: "oln-16B-1",
        p: 4,
        rounded: "lg",
      },
      md: {
        minWidth: "96px",
        minHeight: "48px",
        textStyle: "oln-16B-1",
        px: 4,
        py: 3,
        rounded: "lg",
      },
      sm: {
        minWidth: "80px",
        minHeight: "36px",
        textStyle: "oln-16B-1",
        px: 3,
        py: 1.5,
        rounded: "md",
      },
      xs: {
        minWidth: "72px",
        minHeight: "28px",
        textStyle: "oln-14B-1",
        px: 2,
        py: 1.5,
      },
    },
  },
  defaultVariants: {
    variant: "solid-fill",
    size: "md",
  },
});

export const preset = definePreset({
  name: "with-import-map-package",
  presets: [presetBase],
  theme: {
    recipes: {
      button: buttonRecipe,
    },
  },
});

export default preset;

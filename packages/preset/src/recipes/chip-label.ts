import { defineRecipe } from "@pandacss/dev";

export default defineRecipe({
  className: "chip-label",
  base: {
    display: "inline-flex",
    alignItems: "center",
    gap: 1,
    px: 2,
    py: 1,
    minHeight: "32px",
    borderWidth: "1px",
    colorPalette: "keyColor",
    rounded: 8,
    flexShrink: 0,
    whiteSpace: "nowrap",
    textStyle: "oln-16N-100",
  },
  variants: {
    variant: {
      text: {
        color: "colorPalette.primary",
        borderColor: "transparent",
      },
      outlined: {
        color: "colorPalette.primary",
        borderColor: "currentcolor",
      },
      ghost: {
        color: "colorPalette.primary",
        bg: "colorPalette.bg",
        borderColor: "currentColor",
      },
      "solid-fill": {
        bg: "colorPalette.primary",
        color: "white",
        borderColor: "transparent",
      },
    },
  },
  defaultVariants: {
    variant: "text",
  },
});

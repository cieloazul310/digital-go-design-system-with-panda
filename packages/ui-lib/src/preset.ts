import { definePreset, defineRecipe } from "@pandacss/dev";

const buttonRecipe = defineRecipe({
  className: "button",
  description: "The styles for the Button component",
  base: {
    display: "flex",
  },
  variants: {
    visual: {
      funky: { bg: "primary", color: "white" },
      edgy: { border: "3px solid token(colors.purple.500)" },
    },
    size: {
      sm: { padding: "4", fontSize: "12px" },
      lg: { padding: "8", fontSize: "40px" },
    },
    shape: {
      square: { borderRadius: "0" },
      circle: { borderRadius: "full" },
    },
  },
  defaultVariants: {
    visual: "funky",
    size: "sm",
    shape: "circle",
  },
});

export const preset = definePreset({
  name: "with-import-map-package",
  theme: {
    recipes: {
      button: buttonRecipe,
    },
    semanticTokens: {
      colors: {
        primary: {
          value: { base: "{colors.red.600}", _dark: "{colors.red.400}" },
        },
      },
    },
  },
});

export default preset;

import { definePreset } from "@pandacss/dev";
import semanticTokens from "./semanticTokens";
import textStyles from "./textStyles";
import tokens from "./tokens";

const preset = definePreset({
  name: "digital-go",
  theme: {
    extend: {
      textStyles,
      semanticTokens,
      tokens,
    },
  },
});

export default preset;

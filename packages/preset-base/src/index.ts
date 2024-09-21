import { definePreset } from "@pandacss/dev";
import semanticTokens from "./semanticTokens";
import textStyles from "./textStyles";
import tokens from "./tokens";
import utilities from "./utilities";

const preset = definePreset({
  name: "digital-go",
  theme: {
    extend: {
      textStyles,
      semanticTokens,
      tokens,
    },
  },
  utilities,
});

export default preset;

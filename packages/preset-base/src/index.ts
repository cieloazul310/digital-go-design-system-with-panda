import { definePreset } from "@pandacss/dev";
import semanticTokens from "./semanticTokens";
import textStyles from "./textStyles";
import tokens from "./tokens";
import utilities from "./utilities";
import globalCss from "./globalCss";

const preset = definePreset({
  name: "digital-go",
  conditions: {
    extend: {
      disabled:
        "&:is(:disabled, [disabled], [data-disabled], [aria-disabled=true])",
    },
  },
  theme: {
    extend: {
      textStyles,
      semanticTokens,
      tokens,
    },
  },
  utilities,
  globalCss,
});

export default preset;

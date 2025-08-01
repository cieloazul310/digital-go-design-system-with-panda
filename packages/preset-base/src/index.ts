import { definePreset } from "@pandacss/dev";
import { preset as pandaPreset } from "@pandacss/preset-panda";
import semanticTokens from "./semanticTokens";
import textStyles from "./textStyles";
import tokens from "./tokens";
import utilities from "./utilities";
import globalCss from "./globalCss";

const { breakpoints } = pandaPreset.theme;

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
      breakpoints,
      textStyles,
      semanticTokens,
      tokens,
    },
  },
  utilities,
  globalCss,
});

export default preset;

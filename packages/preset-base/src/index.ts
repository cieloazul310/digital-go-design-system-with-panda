import { definePreset } from "@pandacss/dev";
import { preset as pandaPreset } from "@pandacss/preset-panda";
import { semanticTokens } from "./semantic-tokens";
import { textStyles } from "./text-styles";
import { tokens } from "./tokens";
import { utilities } from "./utilities";
import { globalCss } from "./global-css";

const { breakpoints, keyframes } = pandaPreset.theme;

export const preset = definePreset({
  name: "digital-go",
  theme: {
    extend: {
      breakpoints,
      textStyles,
      semanticTokens,
      tokens,
      keyframes,
    },
  },
  utilities,
  globalCss,
});

export default preset;

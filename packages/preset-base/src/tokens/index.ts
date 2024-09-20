import { defineTokens } from "@pandacss/dev";
import tokens from "@digital-go-jp/design-tokens";
import colors from "./colors";
import { fonts, fontSizes, fontWeights, lineHeights } from "./typography";

export default defineTokens({
  colors,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  radii: {
    "8": { value: tokens.BorderRadius[8].value },
    "16": { value: tokens.BorderRadius[16].value },
    "32": { value: tokens.BorderRadius[32].value },
  },
  shadows: {
    "1": { value: tokens.Shadow[1].value },
    "2": { value: tokens.Shadow[2].value },
    "3": { value: tokens.Shadow[3].value },
    "4": { value: tokens.Shadow[4].value },
    "5": { value: tokens.Shadow[5].value },
    "6": { value: tokens.Shadow[6].value },
    "7": { value: tokens.Shadow[7].value },
    "8": { value: tokens.Shadow[8].value },
  },
});

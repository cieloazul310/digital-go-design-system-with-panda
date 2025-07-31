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
    "4": { value: tokens.BorderRadius[4].$value },
    "6": { value: tokens.BorderRadius[6].$value },
    "8": { value: tokens.BorderRadius[8].$value },
    "12": { value: tokens.BorderRadius[12].$value },
    "16": { value: tokens.BorderRadius[16].$value },
    "24": { value: tokens.BorderRadius[24].$value },
    "32": { value: tokens.BorderRadius[32].$value },
    full: { value: tokens.BorderRadius.Full.$value },
  },
  shadows: {
    "1": { value: tokens.Elevation[1].$value },
    "2": { value: tokens.Elevation[2].$value },
    "3": { value: tokens.Elevation[3].$value },
    "4": { value: tokens.Elevation[4].$value },
    "5": { value: tokens.Elevation[5].$value },
    "6": { value: tokens.Elevation[6].$value },
    "7": { value: tokens.Elevation[7].$value },
    "8": { value: tokens.Elevation[8].$value },
  },
});

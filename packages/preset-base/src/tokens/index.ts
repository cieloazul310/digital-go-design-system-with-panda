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
    xs: { value: "0.125rem" },
    sm: { value: "0.25rem" },
    md: { value: "0.375rem" },
    lg: { value: "0.5rem" },
    xl: { value: "0.75rem" },
    "2xl": { value: "1rem" },
    "3xl": { value: "1.5rem" },
    "8": { value: tokens.BorderRadius[8].$value },
    "16": { value: tokens.BorderRadius[16].$value },
    "32": { value: tokens.BorderRadius[32].$value },
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

import { defineTokens } from "@pandacss/dev";
import { preset as pandaPreset } from "@pandacss/preset-panda";
import designTokens from "@digital-go-jp/design-tokens";
import { colors } from "./colors";
import { fonts, fontSizes, fontWeights, lineHeights } from "./typography";

const { spacing, sizes } = pandaPreset.theme.tokens;

export const tokens = defineTokens({
  colors,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  radii: {
    "4": { value: designTokens.BorderRadius[4].$value },
    "6": { value: designTokens.BorderRadius[6].$value },
    "8": { value: designTokens.BorderRadius[8].$value },
    "12": { value: designTokens.BorderRadius[12].$value },
    "16": { value: designTokens.BorderRadius[16].$value },
    "24": { value: designTokens.BorderRadius[24].$value },
    "32": { value: designTokens.BorderRadius[32].$value },
    full: { value: designTokens.BorderRadius.Full.$value },
  },
  shadows: {
    "1": { value: designTokens.Elevation[1].$value },
    "2": { value: designTokens.Elevation[2].$value },
    "3": { value: designTokens.Elevation[3].$value },
    "4": { value: designTokens.Elevation[4].$value },
    "5": { value: designTokens.Elevation[5].$value },
    "6": { value: designTokens.Elevation[6].$value },
    "7": { value: designTokens.Elevation[7].$value },
    "8": { value: designTokens.Elevation[8].$value },
  },
  sizes,
  spacing,
});

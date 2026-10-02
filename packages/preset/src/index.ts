import { definePreset, type Preset } from "@pandacss/dev";
import { preset as pandaPresetBase } from "@pandacss/preset-base";
import { preset as presetBase } from "@cieloazul310/digital-go-pandacss-plugin";
import {
  createKeyColor,
  type Palette,
} from "@cieloazul310/digital-go-pandacss-utils";
import { slotRecipes, recipes } from "./recipes";
import { keyframes } from "./keyframes";

const base = {
  name: "digital-go-pandacss-preset",
  presets: [pandaPresetBase, presetBase],
  theme: {
    keyframes,
    recipes,
    slotRecipes,
  },
} satisfies Preset;

export const preset = definePreset(base);

export default preset;

export const createPreset = (keyColor: Palette = "blue") =>
  definePreset({
    ...base,
    theme: {
      ...base.theme,
      extend: {
        semanticTokens: {
          colors: {
            keyColor: createKeyColor(keyColor),
          },
        },
      },
    },
  });

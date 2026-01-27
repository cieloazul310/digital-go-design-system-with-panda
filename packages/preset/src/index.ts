import { definePreset, type Preset } from "@pandacss/dev";
import presetBase from "@cieloazul310/digital-go-pandacss-plugin";
import {
  createKeyColor,
  type Palette,
} from "@cieloazul310/digital-go-pandacss-utils";
import recipes from "./recipes";
import { keyframes } from "./keyframes";

const base = {
  name: "digital-go-pandacss-preset",
  presets: [presetBase],
  theme: {
    keyframes,
    recipes,
  },
} satisfies Preset;

export default definePreset(base);

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

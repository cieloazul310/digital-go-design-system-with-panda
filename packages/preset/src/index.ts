import { definePreset } from "@pandacss/dev";
import presetBase from "@cieloazul310/digital-go-pandacss-plugin";
import {
  createKeyColor,
  type Palette,
} from "@cieloazul310/digital-go-pandacss-utils";
import recipes from "./recipes";

export default definePreset({
  name: "digital-go-pandacss-preset",
  presets: [presetBase],
  theme: {
    recipes,
  },
});

export const createPreset = (keyColor?: Palette) =>
  definePreset({
    name: "digital-go-pandacss-preset",
    presets: [presetBase],
    theme: {
      recipes,
      extend: {
        semanticTokens: {
          colors: {
            keyColor: createKeyColor(keyColor ?? "blue"),
          },
        },
      },
    },
  });

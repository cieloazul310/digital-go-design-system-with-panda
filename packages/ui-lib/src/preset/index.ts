import { definePreset } from "@pandacss/dev";
import presetBase from "@cieloazul310/digital-go-pandacss-plugin";
import accordion from "./accordion";
import button from "./button";

export const preset = definePreset({
  name: "with-import-map-package",
  presets: [presetBase],
  theme: {
    recipes: {
      accordion,
      button,
    },
  },
});

export default preset;

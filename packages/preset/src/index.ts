import { definePreset } from "@pandacss/dev";
import presetBase from "@cieloazul310/digital-go-pandacss-plugin";
import recipes from "./recipes";

const preset = definePreset({
  name: "digital-go-pandacss-preset",
  presets: [presetBase],
  theme: {
    recipes,
  },
});

export default preset;

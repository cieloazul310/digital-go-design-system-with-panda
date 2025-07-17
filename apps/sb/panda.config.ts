import { defineConfig } from "@pandacss/dev";
import { createPreset } from "@cieloazul310/digital-go-pandacss/preset";
import typography from "./stories/typography";

export default defineConfig({
  presets: ["@pandacss/dev/presets", createPreset("blue")],
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./stories/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {},
  },

  staticCss: {
    css: [
      {
        properties: {
          textStyle: [...typography],
        },
      },
    ],
    recipes: "*",
  },

  jsxFramework: "react",
  // The output directory for your css system
  outdir: "styled-system",
  importMap: "@digital-go-pandacss/styled-system",
});

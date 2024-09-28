import { defineConfig } from "@pandacss/dev";
import { preset } from "@cieloazul310/digital-go-pandacss/preset";
import { createKeyColor } from "@cieloazul310/digital-go-pandacss/utils";

export default defineConfig({
  presets: ["@pandacss/dev/presets", preset],
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./stories/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      semanticTokens: {
        colors: {
          keyColor: createKeyColor("forest"),
        },
      },
    },
  },

  staticCss: {
    recipes: "*",
  },

  jsxFramework: "react",
  // The output directory for your css system
  outdir: "styled-system",
  importMap: "@import-map-package/styled-system",
});

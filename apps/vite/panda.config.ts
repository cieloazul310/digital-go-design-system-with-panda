import { defineConfig } from "@pandacss/dev";
import { createPreset } from "@cieloazul310/digital-go-pandacss/preset";

export default defineConfig({
  presets: ["@pandacss/dev/presets", createPreset("lime")],
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      tokens: {
        sizes: {
          "mobile-header-height": { value: "4.25rem" },
        },
      },
    },
  },
  jsxFramework: "react",

  // The output directory for your css system
  outdir: "styled-system",
  importMap: "@digital-go-pandacss/styled-system",
});

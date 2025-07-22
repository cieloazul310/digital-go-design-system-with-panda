import { defineConfig } from "@pandacss/dev";
import { createPreset } from "@cieloazul310/digital-go-pandacss-preset";

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
      semanticTokens: {
        sizes: {
          "common-main-width": {
            value: {
              base: "{sizes.3xl}",
              lg: "{sizes.4xl}",
              xl: "{sizes.5xl}",
              "2xl": "{sizes.6xl}",
            },
          },
          "sidebar-width": {
            value: "{sizes.72}",
          },
        },
      },
    },
  },
  jsxFramework: "react",

  // The output directory for your css system
  outdir: "styled-system",
});

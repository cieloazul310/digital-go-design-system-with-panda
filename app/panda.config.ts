import { defineConfig } from "@pandacss/dev";
import { preset } from "@cieloazul310/digital-go-panda/preset";
import { createKeyColor } from "@cieloazul310/digital-go-panda/utils";

export default defineConfig({
  presets: ["@pandacss/dev/presets", preset],
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      semanticTokens: {
        colors: {
          keyColor: createKeyColor("wood"),
        },
      },
    },
  },
  jsxFramework: "react",

  // The output directory for your css system
  outdir: "../packages/generated/dist",
  importMap: "@import-map-package/styled-system",
});

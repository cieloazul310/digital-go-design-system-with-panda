import { defineConfig } from "@pandacss/dev";
import { createPreset } from "@cieloazul310/digital-go-pandacss/preset";
import { tokens } from "./src/theme/tokens";

export default defineConfig({
  presets: ["@pandacss/dev/presets", createPreset("blue")],
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx,md,mdx}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      tokens,
    },
  },
  jsxFramework: "react",

  // The output directory for your css system
  outdir: "styled-system",
  importMap: "@import-map-package/styled-system",
});

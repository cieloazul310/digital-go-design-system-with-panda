import { defineConfig } from "@pandacss/dev";
import { createPreset } from "@cieloazul310/digital-go-pandacss-preset";

export default defineConfig({
  presets: [createPreset("blue")],
  // Whether to use css reset
  preflight: true,

  // The extension for the emitted JavaScript files
  outExtension: "mjs",
  // Where to look for your css declarations
  include: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./stories/**/*.{js,jsx,ts,tsx}",
    "./.storybook/**/*.{js,jsx,ts,tsx}",
  ],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {},
  },

  staticCss: {
    recipes: "*",
    css: [
      {
        properties: {
          colorPalette: [
            "blue",
            "light-blue",
            "cyan",
            "green",
            "lime",
            "yellow",
            "orange",
            "red",
            "magenta",
            "purple",
            "solid-gray",
          ],
        },
      },
    ],
  },

  // The output directory for your css system
  outdir: "../packages/generated/dist",
  importMap: "styled-system",

  // The JSX framework to use
  jsxFramework: "react",

  // The CSS Syntax to use to use
  syntax: "object-literal",
});

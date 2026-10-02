import { defineConfig } from "eslint/config";
import nextPlugin from "@next/eslint-plugin-next";
import appConfig from "@repo/eslint-config/react-app";

export default defineConfig([
  {
    ignores: [".next", "styled-system/**/*", "src/components/ui/**/*"],
  },
  ...appConfig,
  {
    ...nextPlugin.configs["core-web-vitals"],
    files: ["**/*.{js,jsx,ts,tsx}"],
  },
  {
    files: ["src/**/*.{jsx,tsx}"],
    rules: {
      "react-refresh/only-export-components": "off",
    },
  },
]);

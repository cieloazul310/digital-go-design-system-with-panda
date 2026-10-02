import { defineConfig } from "eslint/config";
import eslintReact from "@eslint-react/eslint-plugin";
import reactHooks from "eslint-plugin-react-hooks";
import eslintConfigPrettier from "eslint-config-prettier";
import common from "./index.mjs";

export default defineConfig([
  ...common,
  {
    files: ["**/*.{jsx,tsx}"],
    extends: [eslintReact.configs["recommended-typescript"]],
  },
  {
    plugins: {
      "react-hooks": reactHooks,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
    },
  },
  eslintConfigPrettier,
]);

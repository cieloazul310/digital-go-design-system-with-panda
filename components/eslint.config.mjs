import { defineConfig } from "eslint/config";
import reactInternalConfig from "@repo/eslint-config/react-internal";
import storybook from "eslint-plugin-storybook";

export default defineConfig([
  ...reactInternalConfig,
  ...storybook.configs["flat/recommended"],
  {
    files: ["postcss.config.cjs"],
    rules: {
      "@typescript-eslint/no-require-imports": "off",
    },
  },
]);

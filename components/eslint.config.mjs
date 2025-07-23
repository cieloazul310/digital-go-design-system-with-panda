import reactInternalConfig from "@repo/eslint-config/react-internal";
import storybook from "eslint-plugin-storybook";

/**
 * @type {import("eslint").Linter.Config}
 */
export default [
  ...reactInternalConfig,
  ...storybook.configs["flat/recommended"],
  {
    files: ["postcss.config.cjs"],
    rules: {
      "@typescript-eslint/no-require-imports": "off",
    },
  },
];

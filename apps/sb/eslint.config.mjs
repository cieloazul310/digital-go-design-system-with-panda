import appConfig from "@repo/eslint-config/react-app";
import storybook from "eslint-plugin-storybook";

/**
 * @type {import("eslint").Linter.Config}
 */
export default [
  ...appConfig,
  ...storybook.configs["flat/recommended"],
  {
    files: ["postcss.config.cjs"],
    rules: {
      "@typescript-eslint/no-require-imports": "off",
    },
  },
];

import eslintPluginReact from "eslint-plugin-react";
import eslintPluginJsxA11y from "eslint-plugin-jsx-a11y";
import reactHooks from "eslint-plugin-react-hooks";
import eslintConfigPrettier from "eslint-config-prettier";
import common from "./index.mjs";

/**
 * @type {import("eslint").Linter.Config[]}
 */
export default [
  ...common,
  eslintPluginReact.configs.flat["jsx-runtime"],
  {
    plugins: {
      "react-hooks": reactHooks,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
    },
  },
  eslintPluginJsxA11y.flatConfigs.recommended,
  eslintConfigPrettier,
];

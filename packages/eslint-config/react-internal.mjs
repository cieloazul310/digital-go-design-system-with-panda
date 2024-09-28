import eslintPluginReact from "eslint-plugin-react";
import eslintPluginJsxA11y from "eslint-plugin-jsx-a11y";
import eslintConfigPrettier from "eslint-config-prettier";
import common from "./index.mjs";

/**
 * @type {import("eslint").Linter.Config[]}
 */
export default [
  ...common,
  eslintPluginReact.configs.flat["jsx-runtime"],
  eslintPluginJsxA11y.flatConfigs.recommended,
  eslintConfigPrettier,
];

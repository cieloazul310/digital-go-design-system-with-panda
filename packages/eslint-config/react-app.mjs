import eslintPluginReactRefresh from "eslint-plugin-react-refresh";
import reactInternal from "./react-internal.mjs";

/**
 * @type {import("eslint").Linter.Config}
 */
export default [
  ...reactInternal,
  {
    plugins: {
      "react-refresh": eslintPluginReactRefresh,
    },
    rules: {
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
    },
  },
];

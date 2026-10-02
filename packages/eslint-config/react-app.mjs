import { defineConfig } from "eslint/config";
import eslintPluginReactRefresh from "eslint-plugin-react-refresh";
import reactInternal from "./react-internal.mjs";

export default defineConfig([
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
]);

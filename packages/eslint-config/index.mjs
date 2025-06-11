import { cwd } from "process";
import { resolve } from "path";
import eslint from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import eslintPluginImport from "eslint-plugin-import";

const project = resolve(cwd(), "./tsconfig.json");
/**
 * @type {import("eslint").Linter.Config}
 */
export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  eslintPluginImport.flatConfigs.recommended,
  eslintPluginImport.flatConfigs.typescript,
  {
    files: ["**/*.cjs"],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },
  {
    settings: {
      "import/resolver": {
        typescript: {
          project,
        },
      },
    },
  },
);

import { cwd } from "node:process";
import { resolve } from "node:path";
import { defineConfig } from "eslint/config";
import eslint from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import { importX } from "eslint-plugin-import-x";
import { createTypeScriptImportResolver } from "eslint-import-resolver-typescript";

const project = resolve(cwd(), "./tsconfig.json");

export default defineConfig([
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  importX.flatConfigs.recommended,
  importX.flatConfigs.typescript,
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
      "import-x/resolver-next": [createTypeScriptImportResolver({ project })],
    },
  },
]);

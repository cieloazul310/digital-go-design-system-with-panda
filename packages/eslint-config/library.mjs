import { defineConfig } from "eslint/config";
import eslintConfigPrettier from "eslint-config-prettier";
import common from "./index.mjs";

export default defineConfig([...common, eslintConfigPrettier]);

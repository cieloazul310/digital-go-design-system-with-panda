import eslintConfigPrettier from "eslint-config-prettier";
import common from "./index.mjs";

/**
 * @type {import("eslint").Linter.Config}
 */
export default [...common, eslintConfigPrettier];

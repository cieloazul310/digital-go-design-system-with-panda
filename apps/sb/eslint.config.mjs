import appConfig from "@repo/eslint-config/react-app";
import reactHooks from "eslint-plugin-react-hooks";

/**
 * @type {import("eslint").Linter.Config}
 */
export default [
  ...appConfig,
  {
    plugins: {
      "react-hooks": reactHooks,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
    },
  },
  {
    files: ["postcss.config.cjs"],
    rules: {
      "@typescript-eslint/no-require-imports": "off",
    },
  },
];

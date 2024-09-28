import appConfig from "@repo/eslint-config/react-app";

/**
 * @type {import("eslint").Linter.Config}
 */
export default [
  ...appConfig,
  {
    files: ["postcss.config.cjs"],
    rules: {
      "@typescript-eslint/no-require-imports": "off",
    },
  },
];

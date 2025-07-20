import appConfig from "@repo/eslint-config/react-app";

/**
 * @type {import("eslint").Linter.Config}
 */
export default [
  ...appConfig,
  {
    files: ["postcss.config.cjs"],
    languageOptions: {},
  },
  {
    files: ["src/**/*.{jsx,tsx}"],
    rules: {
      "react-refresh/only-export-components": "off",
    },
  },
];

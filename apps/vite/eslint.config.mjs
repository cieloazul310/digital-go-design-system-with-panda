import { defineConfig } from "eslint/config";
import appConfig from "@repo/eslint-config/react-app";

export default defineConfig([
  {
    ignores: ["styled-system/**/*", "src/components/ui/**/*"],
  },
  ...appConfig,
]);

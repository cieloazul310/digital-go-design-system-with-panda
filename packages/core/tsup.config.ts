import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src"],
  format: ["esm", "cjs"],
  external: ["@pandacss/dev", "@import-map-package/styled-system"],
  dts: true,
  clean: true,
});

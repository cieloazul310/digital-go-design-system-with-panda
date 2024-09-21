import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src"],
  format: ["esm", "cjs"],
  external: ["@import-map-package/styled-system"],
  dts: true,
  clean: true,
});

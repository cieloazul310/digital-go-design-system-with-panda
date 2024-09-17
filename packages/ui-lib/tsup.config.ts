import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts", "src/preset.ts"],
  format: ["esm", "cjs"],
  external: ["@import-map-package/styled-system"],
  dts: true,
  clean: true,
});

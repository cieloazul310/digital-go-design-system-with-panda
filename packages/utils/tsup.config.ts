import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src"],
  external: ["@pandacss/dev"],
  format: ["esm", "cjs"],
  dts: true,
  clean: true,
});

import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  external: ["@pandacss/dev", "@pandacss/preset-panda"],
  format: ["esm", "cjs"],
  dts: true,
  clean: true,
});

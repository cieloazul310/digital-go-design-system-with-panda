import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  external: ["@pandacss/dev", "@cieloazul310/digital-go-pandacss-plugin"],
  format: ["esm", "cjs"],
  dts: true,
  clean: true,
});

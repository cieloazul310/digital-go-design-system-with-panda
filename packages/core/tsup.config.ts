import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src"],
  format: ["esm", "cjs"],
  external: ["@pandacss/dev", "@cieloazul310/styled-system"],
  dts: true,
  clean: true,
});

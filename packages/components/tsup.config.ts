import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src"],
  format: ["esm", "cjs"],
  external: ["@digital-go-pandacss/styled-system"],
  // dts: true,
  clean: true,
});

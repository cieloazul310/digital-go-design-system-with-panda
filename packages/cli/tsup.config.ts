import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/add-snippets.ts"],
  outDir: "bin",
  splitting: false,
  clean: true,
  target: "node16",
  format: ["cjs", "esm"],
  dts: false,
  shims: true,
});

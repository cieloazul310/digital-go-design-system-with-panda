import { defineConfig } from "tsdown";

export default defineConfig({
  entry: ["src/index.ts"],
  format: {
    esm: {
      target: ["esnext"],
    },
    cjs: {
      target: ["node22"],
    },
  },
  deps: {
    neverBundle: [/^@pandacss\//],
  },
  dts: true,
  clean: true,
});

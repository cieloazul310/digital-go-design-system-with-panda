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
    neverBundle: [/^@pandacss\//, /^@zag-js\//, /^@cieloazul310\//],
  },
  dts: true,
  clean: true,
});

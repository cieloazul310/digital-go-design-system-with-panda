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
  external: [/^@pandacss\//, /^@cieloazul310\//],
  dts: true,
  clean: true,
});

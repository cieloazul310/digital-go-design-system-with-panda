import { describe, it, expect } from "vitest";
import { getContrast } from "polished";
import colors from "../src/tokens/colors";

describe("All color tokens meet contrast requirements", () => {
  const colorKeys = Object.keys(colors).filter((key) => {
    const c = colors[key];
    return typeof c === "object" && c !== null && "primary" in c && "bg" in c;
  });

  colorKeys.forEach((token) => {
    const c = colors[token];
    const primary = c.primary?.DEFAULT?.value ?? c.primary?.value;
    const secondary = c.secondary?.value;
    const bg = c.bg?.value;
    const white = colors.white.value;

    it(`${token}.primary vs white contrast is >= 4.5`, () => {
      expect(getContrast(primary, white)).toBeGreaterThanOrEqual(4.5);
    });

    it(`${token}.primary vs ${token}.bg contrast is >= 3.1`, () => {
      expect(getContrast(primary, bg)).toBeGreaterThanOrEqual(3.1);
    });

    it(`${token} secondary vs white contrast is >= 3.0`, () => {
      expect(getContrast(secondary, white)).toBeGreaterThanOrEqual(3.0);
    });
  });
});

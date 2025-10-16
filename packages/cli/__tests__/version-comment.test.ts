import { describe, it, expect } from "vitest";
import {
  createVersionComment,
  parseVersionComment,
} from "../src/version-comment";

describe("version comment", () => {
  it("basic", () => {
    expect(createVersionComment({ tag: "v1.2.3", commit: "abc1234" })).toBe(
      "// Generated from digital-go-design-system-with-panda@v1.2.3 (commit: abc1234)\n",
    );
    expect(
      parseVersionComment(
        "// Generated from digital-go-design-system-with-panda@v1.2.3 (commit: abc1234)",
      ),
    ).toEqual({
      tag: "v1.2.3",
      commit: "abc1234",
    });
  });
});

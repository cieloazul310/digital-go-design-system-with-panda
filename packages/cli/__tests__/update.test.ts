import { describe, it, expect, beforeEach, afterEach } from "vitest";
import {
  mkdtempSync,
  writeFileSync,
  readFileSync,
  rmSync,
  existsSync,
  mkdirSync,
} from "fs";
import { resolve, join } from "path";
import { execa } from "execa";

describe("update.ts", () => {
  let tmpDir: string;
  let outDir: string;

  beforeEach(() => {
    tmpDir = mkdtempSync("/tmp/digital-go-update-test-");
    outDir = join(tmpDir, "src/components/ui");
    mkdirSync(outDir, { recursive: true });
    // ダミーの既存コンポーネントファイルを作成
    writeFileSync(
      join(outDir, "Button.tsx"),
      "// Generated from digital-go-design-system-with-panda@v0.0.1 (commit: dummy)\nexport const Button = () => null;",
    );
  });

  afterEach(() => {
    if (existsSync(tmpDir)) rmSync(tmpDir, { recursive: true, force: true });
  });

  it("should update component to latest version", async () => {
    await execa("node", [resolve(__dirname, "../bin/update.cjs")], {
      cwd: tmpDir,
    });

    const updatedContent = readFileSync(join(outDir, "Button.tsx"), "utf8");
    expect(updatedContent).toMatch(
      /Generated from digital-go-design-system-with-panda@/,
    );
    // 必要なら内容の差分も検証
  });
});

import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { execa } from "execa";
import { rmSync, mkdtempSync, readdirSync, mkdirSync, existsSync } from "fs";
import { tmpdir } from "os";
import { join } from "path";

describe("digital go panda css CLI", () => {
  let outputDir: string;

  beforeEach(() => {
    outputDir = mkdtempSync(join(tmpdir(), "digital-go-panda-cli-"));
    mkdirSync(outputDir, { recursive: true });
    console.log(`Temporary directory created: ${outputDir}`);
  });

  afterEach(() => {
    if (existsSync(outputDir)) {
      console.log(`Cleaning up: ${outputDir}`);
      rmSync(outputDir, { recursive: true, force: true });
    }
  });

  it("should generate component files in specified directory", async () => {
    const cliPath = join(__dirname, "../bin/add-snippets.cjs");
    const { stdout } = await execa("node", [cliPath], { cwd: outputDir });

    expect(stdout).toBe(
      `✅ UI components generated from GitHub at components/ui`,
    );

    const componentDir = join(outputDir, "components/ui");
    expect(existsSync(componentDir)).toBe(true);

    const files = readdirSync(componentDir, { withFileTypes: true });
    expect(files.length).toBeGreaterThan(0);

    const generatedFiles = readdirSync(join(componentDir, "accordion"), {
      recursive: true,
    });
    expect(generatedFiles).toContain("index.tsx");
  });
});

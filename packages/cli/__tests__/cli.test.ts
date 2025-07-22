import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { execa } from "execa";
import {
  rmSync,
  mkdtempSync,
  readdirSync,
  existsSync,
  cpSync,
  writeFileSync,
} from "fs";
import { tmpdir } from "os";
import { join, resolve } from "path";

describe("digital go panda css CLI", () => {
  let outputDir: string;

  beforeEach(() => {
    outputDir = mkdtempSync(join(tmpdir(), "digital-go-panda-cli-"));
    console.log(`Temporary directory created: ${outputDir}`);
  });

  afterEach(() => {
    if (existsSync(outputDir)) {
      console.log(`Cleaning up: ${outputDir}`);
      rmSync(outputDir, { recursive: true, force: true });
    }
  });

  async function runCliAndAssert(outDir: string, expectedMsg: string) {
    const cliPath = join(__dirname, "../bin/add-snippets.cjs");
    const { stdout } = await execa("node", [cliPath], { cwd: outDir });

    expect(stdout).toBe(expectedMsg);

    const componentDir = join(outDir, expectedMsg.match(/at (.+)$/)?.[1] ?? "");
    expect(existsSync(componentDir)).toBe(true);

    const files = readdirSync(componentDir, { withFileTypes: true });
    expect(files.length).toBeGreaterThan(0);

    const generatedFiles = readdirSync(join(componentDir, "accordion"), {
      recursive: true,
    });
    expect(generatedFiles).toContain("index.tsx");
  }

  it("if component.json exists", async () => {
    cpSync(
      resolve(__dirname, "../public/components.json"),
      join(outputDir, "components.json"),
    );
    await runCliAndAssert(
      outputDir,
      "✅ UI components generated from GitHub at src/components/ui",
    );
  });

  it("if component.json does not exist", async () => {
    await runCliAndAssert(
      outputDir,
      "✅ UI components generated from GitHub at src/components/ui",
    );
  });

  it("custom config", async () => {
    const customConfig = {
      outDir: "components/digital-go",
    };
    writeFileSync(
      join(outputDir, "components.json"),
      JSON.stringify(customConfig, null, 2),
    );
    await runCliAndAssert(
      outputDir,
      "✅ UI components generated from GitHub at components/digital-go",
    );
  });
});

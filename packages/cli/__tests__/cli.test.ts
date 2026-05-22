import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { execa } from "execa";
import {
  rm,
  mkdtemp,
  readdir,
  access,
  cp,
  writeFile,
  mkdir,
} from "fs/promises";
import { constants } from "fs";
import { tmpdir } from "os";
import { join, resolve } from "path";

async function exists(path: string): Promise<boolean> {
  try {
    await access(path, constants.F_OK);
    return true;
  } catch {
    return false;
  }
}

describe("without arguments", () => {
  it("shows help message", async () => {
    const cliPath = join(__dirname, "../bin/index.cjs");
    const { stdout } = await execa("node", [cliPath, "--help"], {
      reject: false,
    });
    expect(stdout).toContain("Usage:");
    expect(stdout).toContain("[command]");
    expect(stdout).toContain("[options]");
  });
});

describe("digital go panda css CLI", () => {
  let outputDir: string;

  beforeEach(async () => {
    outputDir = await mkdtemp(join(tmpdir(), "digital-go-panda-cli-"));
  });

  afterEach(async () => {
    if (await exists(outputDir)) {
      await rm(outputDir, { recursive: true, force: true });
    }
  });

  async function runCliAndAssert(
    outDir: string,
    expectedMsg: string,
    args: string[] = ["--all"],
  ) {
    const cliPath = join(__dirname, "../bin/index.cjs");
    const { stdout } = await execa("node", [cliPath, "install", ...args], {
      cwd: outDir,
    });

    expect(stdout).toBe(expectedMsg);

    // extract path from stdout: support English 'at <path>' and Japanese messages that include 'src/...' or 'components/...'
    const pathMatch = stdout.match(/at (.+)$|(?:src\/\S+|components\/\S+)/m);
    const extractedPath = pathMatch ? (pathMatch[1] ?? pathMatch[0]) : "";
    const componentDir = join(outDir, extractedPath);
    expect(await exists(componentDir)).toBe(true);

    const files = await readdir(componentDir, { withFileTypes: true });
    expect(files.length).toBeGreaterThan(0);

    const accordionIndex = join(componentDir, "accordion", "index.tsx");
    const accordionSnippet = join(componentDir, "accordion", "snippet.tsx");
    expect(await exists(accordionIndex)).toBe(true);
    expect(await exists(accordionSnippet)).toBe(true);
  }

  it("if component.json exists", async () => {
    await cp(
      resolve(__dirname, "../public/components.json"),
      join(outputDir, "components.json"),
    );
    await runCliAndAssert(
      outputDir,
      "✅ UIコンポーネントを src/components/ui に生成しました",
    );
  });

  it("if component.json does not exist", async () => {
    await runCliAndAssert(
      outputDir,
      "✅ UIコンポーネントを src/components/ui に生成しました",
    );
  });

  it("partial generation (single component)", async () => {
    // ensure components.json available for stable catalogue mapping
    await cp(
      resolve(__dirname, "../public/components.json"),
      join(outputDir, "components.json"),
    );
    await runCliAndAssert(
      outputDir,
      "✅ UIコンポーネントを src/components/ui に生成しました",
      ["accordion"],
    );
  });

  it("includes progress components with --all --include-progress", async () => {
    const sourceDir = "./components/src";
    await mkdir(join(outputDir, "components"), { recursive: true });
    await cp(
      resolve(__dirname, "../../..", "components/src"),
      join(outputDir, "components/src"),
      { recursive: true },
    );
    const customConfig = {
      outDir: "src/components/ui",
      sourceDir,
    };
    await writeFile(
      join(outputDir, "components.json"),
      JSON.stringify(customConfig, null, 2),
    );

    const cliPath = join(__dirname, "../bin/index.cjs");
    const { stdout } = await execa(
      "node",
      [cliPath, "install", "--all", "--include-progress"],
      { cwd: outputDir },
    );

    expect(stdout).toContain(
      "✅ UIコンポーネントを src/components/ui に生成しました",
    );

    const progressComponent = join(
      outputDir,
      "src/components/ui",
      "date-input",
    );
    expect(await exists(progressComponent)).toBe(true);
  });

  it("includes progress components without --include-progress", async () => {
    const sourceDir = "./components/src";
    await mkdir(join(outputDir, "components"), { recursive: true });
    await cp(
      resolve(__dirname, "../../..", "components/src"),
      join(outputDir, "components/src"),
      { recursive: true },
    );
    const customConfig = {
      outDir: "src/components/ui",
      sourceDir,
    };
    await writeFile(
      join(outputDir, "components.json"),
      JSON.stringify(customConfig, null, 2),
    );

    const cliPath = join(__dirname, "../bin/index.cjs");
    const { stdout } = await execa("node", [cliPath, "install", "--all"], {
      cwd: outputDir,
    });

    expect(stdout).toContain(
      "✅ UIコンポーネントを src/components/ui に生成しました",
    );

    const progressComponent = join(
      outputDir,
      "src/components/ui",
      "date-input",
    );
    expect(await exists(progressComponent)).toBe(false);
  });

  it("custom output directory", async () => {
    const customConfig = {
      outDir: "components/digital-go",
    };
    await writeFile(
      join(outputDir, "components.json"),
      JSON.stringify(customConfig, null, 2),
    );
    await runCliAndAssert(
      outputDir,
      "✅ UIコンポーネントを components/digital-go に生成しました",
    );
  });

  it("override false config", async () => {
    const customConfig = {
      override: false,
    };
    await writeFile(
      join(outputDir, "components.json"),
      JSON.stringify(customConfig, null, 2),
    );
    // 事前にディレクトリを作成しておく
    const targetDir = join(outputDir, "src/components/ui");
    // 必要ならサブディレクトリも作成
    await mkdir(targetDir, { recursive: true });

    const cliPath = join(__dirname, "../bin/index.cjs");
    // エラーが出ることを期待
    await expect(
      execa("node", [cliPath, "install", "--all"], { cwd: outputDir }),
    ).rejects.toThrow(/出力先ディレクトリ|上書き/i);
  });
});

#!/usr/bin/env node
import { simpleGit } from "simple-git";
import { tmpdir } from "os";
import { cpSync, existsSync, readFileSync } from "fs";
import { join } from "path";

type Config = {
  // components: string[];
  outDir?: string; // 出力先ディレクトリ
  sourceDir?: string; // ソースディレクトリ
  override?: boolean; // 上書きフラグ
};

async function main() {
  const cwd = process.cwd();
  const configPath = join(cwd, "components.json");

  let outDir = "src/components/ui";
  let templateDir = undefined;
  let override = true;

  if (existsSync(configPath)) {
    const config = JSON.parse(readFileSync(configPath, "utf-8")) as Config;
    outDir = config.outDir ?? outDir;
    templateDir = config.sourceDir ? join(cwd, config.sourceDir) : undefined;
    override = config.override ?? override;
  }

  if (!templateDir) {
    const git = simpleGit();

    // GitHub 上のテンプレートリポジトリ
    const repoUrl =
      "https://github.com/cieloazul310/digital-go-design-system-with-panda";
    const templateSubdir = "packages/components/src";

    // 一時ディレクトリへ clone
    const tmpPath = join(tmpdir(), `digital-go-pandacss-${Date.now()}`);
    await git.clone(repoUrl, tmpPath);

    // 指定ディレクトリにあるテンプレートを使用
    templateDir = join(tmpPath, templateSubdir);
  }

  if (!existsSync(templateDir)) {
    throw new Error(`Template directory not found: ${templateDir}`);
  }

  // アプリ側へのコピー
  const outputDir = join(cwd, outDir);
  if (existsSync(outputDir) && !override) {
    throw new Error(
      `Output directory already exists: ${outputDir}. Use --override to overwrite.`,
    );
  }
  cpSync(templateDir, outputDir, { recursive: true });

  console.log(`✅ UI components generated from GitHub at ${outDir}`);
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

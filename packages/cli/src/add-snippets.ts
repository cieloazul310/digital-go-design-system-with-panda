#!/usr/bin/env node
import { simpleGit } from "simple-git";
import { tmpdir } from "os";
import { cpSync, existsSync, readFileSync } from "fs";
import { join } from "path";

async function main() {
  const git = simpleGit();

  // GitHub 上のテンプレートリポジトリ
  const repoUrl =
    "https://github.com/cieloazul310/digital-go-design-system-with-panda";
  const templateSubdir = "packages/components/src";

  // 一時ディレクトリへ clone
  const tmpPath = join(tmpdir(), `digital-go-pandacss-${Date.now()}`);
  await git.clone(repoUrl, tmpPath);

  // 指定ディレクトリにあるテンプレートを使用
  const templateDir = join(tmpPath, templateSubdir);

  const cwd = process.cwd();
  const configPath = join(cwd, "components.json");

  let outDir = "src/components/ui";

  if (existsSync(configPath)) {
    const config = JSON.parse(readFileSync(configPath, "utf-8")) as {
      // components: string[];
      outDir?: string;
    };
    outDir = config.outDir ?? outDir;
  }

  // アプリ側へのコピー
  const outputDir = join(process.cwd(), outDir);
  cpSync(templateDir, outputDir, { recursive: true });

  console.log(`✅ UI components generated from GitHub at ${outDir}`);
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

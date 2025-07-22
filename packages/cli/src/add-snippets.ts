#!/usr/bin/env node
import { simpleGit } from "simple-git";
import { tmpdir } from "os";
import { cpSync } from "fs";
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

  // アプリ側へのコピー
  const targetDir = process.argv[2] || "components/ui";
  const outputDir = join(process.cwd(), targetDir);
  cpSync(templateDir, outputDir, { recursive: true });

  console.log(`✅ UI components generated from GitHub at ${targetDir}`);
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

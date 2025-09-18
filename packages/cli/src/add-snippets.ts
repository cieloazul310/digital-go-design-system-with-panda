#!/usr/bin/env node
import { simpleGit } from "simple-git";
import { tmpdir } from "os";
import { existsSync, readFileSync, readdirSync, writeFileSync } from "fs";
import { join } from "path";
import { readConfig } from "./read-config";
import { copyComponents } from "./copy-components";

async function main() {
  const cwd = process.cwd();
  const { outDir, sourceDir, override } = readConfig(cwd);

  let templateDir = sourceDir ? join(cwd, sourceDir) : undefined;

  if (!templateDir) {
    const git = simpleGit();
    const repoUrl =
      "https://github.com/cieloazul310/digital-go-design-system-with-panda";
    const templateSubdir = "components/src";
    const tmpPath = join(tmpdir(), `digital-go-pandacss-${Date.now()}`);
    await git.clone(repoUrl, tmpPath);

    // バージョン情報取得
    const repoGit = simpleGit(tmpPath);
    const tag = (
      await repoGit.raw(["describe", "--tags", "--abbrev=0"])
    ).trim();
    const commit = (await repoGit.revparse(["HEAD"])).trim();

    templateDir = join(tmpPath, templateSubdir);

    // コピー前に各ファイルの先頭にコメントを埋め込む
    const files = readdirSync(templateDir, { withFileTypes: true });
    for (const file of files) {
      if (file.isFile() && file.name.endsWith(".tsx")) {
        const filePath = join(templateDir, file.name);
        const content = readFileSync(filePath, "utf8");
        const versionComment = `// Generated from digital-go-design-system-with-panda@${tag} (commit: ${commit})\n`;
        writeFileSync(filePath, versionComment + content, "utf8");
      }
    }
  }

  /*
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
  */

  if (!existsSync(templateDir)) {
    throw new Error(`Template directory not found: ${templateDir}`);
  }

  // アプリ側へのコピー
  const outputDir = join(cwd, outDir);
  copyComponents({
    templateDir,
    outputDir,
    override,
  });

  console.log(`✅ UI components generated from GitHub at ${outDir}`);
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

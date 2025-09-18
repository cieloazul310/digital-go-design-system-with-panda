#!/usr/bin/env node
import { simpleGit } from "simple-git";
import { tmpdir } from "os";
import { existsSync } from "fs";
import { join } from "path";
import { readConfig } from "./read-config";
import { copyComponents } from "./copy-components";

/*
// バージョンコメント抽出用
function extractVersionComment(content: string): string | undefined | null {
  const match = content.match(/^\/\/ Generated from digital-go-design-system-with-panda@([^\s]+) \(commit: ([^\)]+)\)/);
  return match ? match[1] : null;
}
*/

async function main() {
  const cwd = process.cwd();
  const { outDir, sourceDir, override } = readConfig(cwd);

  let templateDir = sourceDir ? join(cwd, sourceDir) : undefined;
  let latestTag = "";
  let latestCommit = "";

  if (!templateDir) {
    const git = simpleGit();
    const repoUrl =
      "https://github.com/cieloazul310/digital-go-design-system-with-panda";
    const templateSubdir = "components/src";
    const tmpPath = join(tmpdir(), `digital-go-pandacss-${Date.now()}`);
    await git.clone(repoUrl, tmpPath);

    // 最新バージョン情報取得
    const repoGit = simpleGit(tmpPath);
    latestTag = (
      await repoGit.raw(["describe", "--tags", "--abbrev=0"])
    ).trim();
    latestCommit = (await repoGit.revparse(["HEAD"])).trim();

    templateDir = join(tmpPath, templateSubdir);
  }

  if (!existsSync(templateDir)) {
    throw new Error(`Template directory not found: ${templateDir}`);
  }

  const outputDir = join(cwd, outDir);
  if (!existsSync(outputDir)) {
    throw new Error(`Output directory not found: ${outputDir}`);
  }

  /*
  // 各コンポーネントのバージョンを比較し、必要ならアップデート
  const files = readdirSync(templateDir, { withFileTypes: true });
  for (const file of files) {
    if (file.isFile() && file.name.endsWith(".tsx")) {
      const srcPath = join(templateDir, file.name);
      const destPath = join(outputDir, file.name);

      // 既存ファイルのバージョン取得
      let currentVersion: string | undefined | null = null;
      if (existsSync(destPath)) {
        const destContent = readFileSync(destPath, "utf8");
        currentVersion = extractVersionComment(destContent);
      }

      // 最新バージョンと比較
      if (currentVersion !== latestTag) {
        // アップデート（上書き）
        const srcContent = readFileSync(srcPath, "utf8");
        const versionComment = `// Generated from digital-go-design-system-with-panda@${latestTag} (commit: ${latestCommit})\n`;
        writeFileSync(destPath, versionComment + srcContent, "utf8");
        console.log(`Updated: ${file.name} to version ${latestTag}`);
      } else {
        console.log(`Up-to-date: ${file.name} (${latestTag})`);
      }
    }
  }
  console.log("✅ Components update completed.");
  */

  // コピー
  const versionComment = latestTag
    ? `// Generated from digital-go-design-system-with-panda@${latestTag} (commit: ${latestCommit})\n`
    : undefined;

  copyComponents({
    templateDir,
    outputDir,
    versionComment,
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

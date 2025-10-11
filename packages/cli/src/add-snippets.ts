#!/usr/bin/env node
import { simpleGit } from "simple-git";
import { tmpdir } from "os";
import { cpSync, existsSync } from "fs";
import { join } from "path";
import { readConfig } from "./read-config";
import { copyComponents } from "./copy-components";

/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
async function main(args: string[]) {
  const cwd = process.cwd();
  const { outDir, sourceDir, override } = readConfig(cwd);
  const tmpPath = join(tmpdir(), `digital-go-pandacss-${Date.now()}`);

  let templateDir: string | undefined = undefined;
  let versionComment: string | undefined = undefined;

  if (sourceDir) {
    cpSync(join(cwd, sourceDir), tmpPath, { recursive: true });
    templateDir = tmpPath;
    versionComment = "// Generated from Custom Source Directory\n";
  } else {
    const git = simpleGit();
    const repoUrl =
      "https://github.com/cieloazul310/digital-go-design-system-with-panda";
    const templateSubdir = "components/src";
    await git.clone(repoUrl, tmpPath);

    // バージョン情報取得
    const repoGit = simpleGit(tmpPath);
    const tag = (
      await repoGit.raw(["describe", "--tags", "--abbrev=0"])
    ).trim();
    const commit = (await repoGit.revparse(["HEAD"])).trim();

    templateDir = join(tmpPath, templateSubdir);
    versionComment = `// Generated from digital-go-design-system-with-panda@${tag} (commit: ${commit})\n`;
  }

  if (!existsSync(templateDir)) {
    throw new Error(`Template directory not found: ${templateDir}`);
  }

  // アプリ側へのコピー
  const outputDir = join(cwd, outDir);
  copyComponents({
    templateDir,
    outputDir,
    override,
    versionComment,
  });

  console.log(`✅ UI components generated from GitHub at ${outDir}`);
}

export async function addSnippets(args: string[]) {
  await main(args)
    .then(() => process.exit(0))
    .catch((err) => {
      console.error(err);
      process.exit(1);
    });
}

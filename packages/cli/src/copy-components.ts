import {
  readdirSync,
  readFileSync,
  writeFileSync,
  existsSync,
  cpSync,
} from "fs";
import { join } from "path";

export function copyComponents({
  templateDir,
  outputDir,
  versionComment,
  override = true,
  ids,
}: {
  templateDir: string;
  outputDir: string;
  versionComment?: string;
  override?: boolean;
  ids?: string[];
}) {
  // If copying all components (ids not provided), behave as before
  if (!ids) {
    if (existsSync(outputDir) && !override) {
      throw new Error(
        `出力先ディレクトリが既に存在します: ${outputDir}. --overrideを使用して上書きしてください。`,
      );
    }

    // Copy everything first
    cpSync(templateDir, outputDir, { recursive: true });

    // Then prefix versionComment to .tsx files in the destination
    const dirs = readdirSync(outputDir, { withFileTypes: true });
    for (const dir of dirs) {
      if (dir.isDirectory()) {
        const destDir = join(outputDir, dir.name);
        const files = readdirSync(destDir, { withFileTypes: true });
        for (const file of files) {
          if (file.isFile() && file.name.endsWith(".tsx")) {
            const destPath = join(destDir, file.name);
            const content = readFileSync(destPath, "utf8");
            // avoid double-prefixing if already present
            if (versionComment && content.startsWith(versionComment)) continue;
            writeFileSync(destPath, (versionComment || "") + content, "utf8");
          }
        }
      }
    }

    return;
  }

  // Partial copy: ids provided
  // If the top-level output dir exists and override is false, fail early.
  if (existsSync(outputDir) && !override) {
    throw new Error(
      `出力先ディレクトリが既に存在します: ${outputDir}. --overrideを使用して上書きしてください。`,
    );
  }
  for (const id of ids) {
    const src = join(templateDir, id);
    if (!existsSync(src)) {
      throw new Error(
        `テンプレートコンポーネントが見つかりません: ${id} (expected at ${src})`,
      );
    }

    const dest = join(outputDir, id);
    if (existsSync(dest) && !override) {
      throw new Error(
        `出力先ディレクトリが既に存在します: ${dest}. --overrideを使用して上書きしてください。`,
      );
    }

    // Ensure dest parent exists
    // Use cpSync per-component to avoid copying everything
    // Copy the whole component directory first
    cpSync(src, dest, { recursive: true });

    // Then prefix versionComment to .tsx files in dest
    const destFiles = readdirSync(dest, { withFileTypes: true });
    for (const file of destFiles) {
      if (file.isFile() && file.name.endsWith(".tsx")) {
        const destPath = join(dest, file.name);
        const content = readFileSync(destPath, "utf8");
        if (versionComment && content.startsWith(versionComment)) continue;
        writeFileSync(destPath, (versionComment || "") + content, "utf8");
      }
    }
  }
}

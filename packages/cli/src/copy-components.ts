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
}: {
  templateDir: string;
  outputDir: string;
  versionComment?: string;
  override?: boolean;
}) {
  if (existsSync(outputDir) && !override) {
    throw new Error(
      `Output directory already exists: ${outputDir}. Use --override to overwrite.`,
    );
  }

  // .tsxファイルにはバージョンコメントを付与
  const files = readdirSync(templateDir, { withFileTypes: true });
  for (const file of files) {
    if (file.isFile() && file.name.endsWith(".tsx") && versionComment) {
      const filePath = join(templateDir, file.name);
      const content = readFileSync(filePath, "utf8");
      writeFileSync(filePath, versionComment + content, "utf8");
    }
  }

  cpSync(templateDir, outputDir, { recursive: true });
}

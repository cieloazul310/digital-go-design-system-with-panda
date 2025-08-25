import { readdirSync, readFileSync, writeFileSync } from "fs";
import { join, extname } from "path";
import * as yaml from "yaml";
import * as changeCase from "change-case";

// MDXフロントマター抽出用
function extractFrontmatter(content: string) {
  const match = content.match(/^---\n([\s\S]+?)\n---/);
  if (!match) return {};
  const lines = match[1].split("\n");
  const result: Record<string, string> = {};
  for (const line of lines) {
    const [key, ...rest] = line.split(":");
    if (key && rest.length) {
      result[key.trim()] = rest.join(":").trim();
    }
  }
  return result;
}

// 既存catalogue.ymlの読み込み
const cataloguePath = join(__dirname, "../catalogue.yml");
const catalogue = yaml.parse(readFileSync(cataloguePath, "utf8")) as any;

// MDXファイルの走査
const docsDir = join(__dirname, "../apps/nextjs/docs/components");
for (const file of readdirSync(docsDir, {
  recursive: true,
  encoding: "utf8",
})) {
  const [id] = file.split("/");

  if (extname(file) !== ".mdx") continue;
  const content = readFileSync(join(docsDir, file), "utf8");
  const fm = extractFrontmatter(content);

  // titleをキーにcatalogueへ反映
  const key = changeCase.pascalCase(id);
  if (!key) continue;
  if (!catalogue.catalogue[key]) catalogue.catalogue[key] = {};
  catalogue.catalogue[key].id = id;
  catalogue.catalogue[key].name = fm.title;
  catalogue.catalogue[key].className = id;
  catalogue.catalogue[key].description = fm.description;
  catalogue.catalogue[key].storybook = fm.storybook;
  catalogue.catalogue[key].digitalgo = fm.digitalgo;
  catalogue.catalogue[key].ark = fm.ark;
  // name, id, classNameは既存値を維持
}

console.log(catalogue);

// catalogue.ymlへ書き戻し
writeFileSync(cataloguePath, yaml.stringify(catalogue), "utf8");
console.log("catalogue.yml updated!");

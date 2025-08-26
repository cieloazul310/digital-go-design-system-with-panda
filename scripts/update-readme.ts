// scripts/update-readme.ts
import * as fs from "fs";
import * as path from "path";
import { loadCatalogue } from "./load-catalogue";

const catalog = loadCatalogue();

function createTable() {
  const tableHeader =
    "| 名称 | className | Recipe | Storybook |\n|------|---------|--------|-----------|";

  function recipeURL(id: string) {
    return `https://github.com/cieloazul310/digital-go-design-system-with-panda/blob/main/packages/preset/src/recipes/${id}.ts`;
  }

  const tableRows = Object.entries(catalog.components)
    .map(([_, { name, id, storybook }]) => {
      if (!storybook) {
        return `| ${name} | ${id} | [Recipe](${recipeURL(id)}) | |`;
      }
      return `| ${name} | ${id} | [Recipe](${recipeURL(id)}) | [Storybook](${storybook}) |`;
    })
    .join("\n");

  return [tableHeader, tableRows].join("\n");
}

const newTable = createTable();

function updateReadme(readmePath: string) {
  const readme = fs.readFileSync(readmePath, "utf8");
  const isMdx = /.mdx$/.test(readmePath);
  let updated: string;

  if (isMdx) {
    updated = readme.replace(
      /\{\/\* @catalog-start \*\/\}([\s\S]*?)\{\/\* @catalog-end \*\/\}/,
      `\{\/\* @catalog-start \*\/\}\n${newTable}\n\{\/\* @catalog-end \*\/\}`,
    );
  } else {
    updated = readme.replace(
      /<!-- @catalog-start -->([\s\S]*?)<!-- @catalog-end -->/,
      `<!-- @catalog-start -->\n${newTable}\n<!-- @catalog-end -->`,
    );
  }

  fs.writeFileSync(readmePath, updated);
  console.log("README.md updated!");
}

["../README.md", "../apps/nextjs/src/app/(mdx)/page.mdx"]
  .map((file) => path.resolve(__dirname, file))
  .forEach(updateReadme);

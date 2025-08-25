// scripts/update-readme.ts
import * as fs from "fs";
import * as path from "path";
import { loadCatalogue } from "./load-catalogue";

const catalog = loadCatalogue();

const tableHeader =
  "| Name | Recipe | Storybook |\n|------|--------|-----------|";

function recipeURL(id: string) {
  return `https://github.com/cieloazul310/digital-go-design-system-with-panda/blob/main/packages/preset/src/recipes/${id}.ts`;
}

const tableRows = Object.entries(catalog.components)
  .map(
    ([_, { name, id, storybook }]) =>
      `| ${name} | [Recipe](${recipeURL(id)}) | [Storybook](${storybook}) |`,
  )
  .join("\n");

const newTable = [tableHeader, tableRows].join("\n");

const readmePath = "README.md";
const readme = fs.readFileSync(readmePath, "utf8");

const updated = readme.replace(
  /<!-- @catalog-start -->([\s\S]*?)<!-- @catalog-end -->/,
  `<!-- @catalog-start -->\n${newTable}\n<!-- @catalog-end -->`,
);

fs.writeFileSync(readmePath, updated);
console.log("README.md updated!");

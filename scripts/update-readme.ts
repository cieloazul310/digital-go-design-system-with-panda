// scripts/update-readme.ts
import { readFile, writeFile } from "fs/promises";
import { resolve } from "path";
import { fileURLToPath } from "url";
import { loadCatalogue } from "./load-catalogue";

async function main() {
  const catalog = await loadCatalogue();

  function createTable() {
    const tableHeader =
      "| 状態 | 名称 | className | Recipe | Storybook |\n|------|------|---------|--------|-----------|";

    function statusEmoji(status?: string) {
      if (status === "done") return "✅";
      if (status === "progress") return "🔨";
      return "❌";
    }

    function recipeURL(id: string) {
      return `https://github.com/cieloazul310/digital-go-design-system-with-panda/blob/main/packages/preset/src/recipes/${id}.ts`;
    }

    const tableRows = Object.entries(catalog.components)
      .map(([_, { name, id, storybook, status }]) => {
        const emoji = statusEmoji(status);
        if (!storybook) {
          return `| ${emoji} | ${name} | ${id} | [Recipe](${recipeURL(id)}) | |`;
        }
        return `| ${emoji} | ${name} | ${id} | [Recipe](${recipeURL(id)}) | [Storybook](${storybook}) |`;
      })
      .join("\n");

    return [tableHeader, tableRows].join("\n");
  }

  const newTable = createTable();

  async function updateReadme(readmePath: string) {
    const readme = await readFile(readmePath, "utf8");
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

    await writeFile(readmePath, updated);
    console.log("README.md updated!");
  }

  ["../README.md", "../apps/nextjs/src/app/(mdx)/page.mdx"]
    .map((file) => resolve(__dirname, file))
    .forEach(updateReadme);
}

// ESM-safe check: run main when the script is executed directly
if (fileURLToPath(import.meta.url) === process.argv[1]) {
  (async () => {
    await main();
  })();
}

#!/usr/bin/env node

import { Command } from "commander";
import { loadCatalogue } from "./load-catalogue";
import { installSnippets } from "./install-snippets";
import { readConfig } from "./read-config";
import { existsSync } from "fs";
import { join } from "path";

const program = new Command();

program
  .name("digital-go-pandacss")
  .description("デジタル庁デザインシステム for Panda CSS");

program
  .command("install [ids...]")
  .description("インストールするコンポーネントを指定します")
  .option("--all", "すべてのコンポーネントをインストールします")
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  .action(async (ids: string[] = [], options: any) => {
    if (options.all && ids.length > 0) {
      console.error("コンポーネントIDと--allを同時に指定することはできません");
      process.exit(2);
    }
    if (!options.all && ids.length === 0) {
      console.error("コンポーネントIDを指定するか、--allを使用してください");
      process.exit(2);
    }

    // Determine target ids
    const catalogue = loadCatalogue() ?? { components: {} };
    const availableIds = Object.values(catalogue.components || {}).map(
      ({ id }) => id,
    );
    const targetIds = options.all ? availableIds : ids;

    const unknown = targetIds.filter((id) => !availableIds.includes(id));
    if (unknown.length) {
      console.error("コンポーネントIDが見つかりません:", unknown.join(", "));
      process.exit(2);
    }

    try {
      // Pre-check: read components.json and fail early if outDir exists and override is false
      const { outDir: cfgOutDir, override: cfgOverride } = readConfig(
        process.cwd(),
      );
      const outputPath = join(process.cwd(), cfgOutDir);
      if (existsSync(outputPath) && !cfgOverride) {
        console.error(
          `出力先ディレクトリが既に存在します: ${outputPath}. --overrideを使用して上書きしてください。`,
        );
        process.exit(1);
      }

      // installSnippets reads components.json itself for outDir/sourceDir
      await installSnippets(targetIds);
      /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
    } catch (err: any) {
      console.error(err);
      process.exit(1);
    }
  });

program
  .command("list")
  .description("利用可能なコンポーネントIDの一覧を表示します")
  .option("--json", "JSON形式で出力します")
  .action((options: { json?: boolean }) => {
    const catalogue = loadCatalogue();
    if (!catalogue || !catalogue.components) {
      console.error("カタログが見つかりません");
      process.exit(1);
    }

    const comps = Object.values(catalogue.components);

    if (options.json) {
      console.log(JSON.stringify(comps, null, 2));
      return;
    }

    for (const e of comps) {
      console.log(`${e.id} — ${e.name}`);
    }
  });

program.parse(process.argv);

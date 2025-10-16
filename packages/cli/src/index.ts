#!/usr/bin/env node

import { Command } from "commander";
import { loadCatalogue } from "./load-catalogue";
import { installSnippets } from "./install-snippets";
import { readConfig } from "./read-config";
import { existsSync } from "fs";
import { join } from "path";

const program = new Command();

program.name("digital-go-pandacss").description("Digital Go Panda CSS CLI");

program
  .command("install [ids...]")
  .description("Install components by id")
  .option("--all", "Install all components")
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  .action(async (ids: string[] = [], options: any) => {
    if (options.all && ids.length > 0) {
      console.error("Cannot pass ids and --all together");
      process.exit(2);
    }
    if (!options.all && ids.length === 0) {
      console.error("Pass ids or use --all");
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
      console.error("Unknown ids:", unknown.join(", "));
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
          `Output directory already exists: ${outputPath}. Use --override to overwrite.`,
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

program.parse(process.argv);

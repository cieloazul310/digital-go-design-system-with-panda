#!/usr/bin/env node
import { readFile, writeFile, mkdir } from "fs/promises";
import { resolve } from "path";
import { parse } from "yaml";
import { fileURLToPath } from "url";
import { exists } from "./fs-exists";

async function main() {
  const repoRoot = resolve(__dirname, "..");
  const cataloguePath = resolve(repoRoot, "catalogue.yml");
  const outDir = resolve(repoRoot, "packages", "cli");
  const outPath = resolve(outDir, "public", "catalogue.json");

  let file: string | undefined;
  try {
    file = await readFile(cataloguePath, "utf8");
  } catch (err: unknown) {
    console.error(`Could not read ${cataloguePath}:`, getErrorMessage(err));
    process.exitCode = 2;
    return;
  }

  let catalogue: Record<string, any> | undefined;
  try {
    catalogue = parse(file);
  } catch (err) {
    console.error(
      `Failed to parse YAML at ${cataloguePath}:`,
      getErrorMessage(err),
    );
    process.exitCode = 3;
    return;
  }

  try {
    if (!(await exists(outDir))) await mkdir(outDir, { recursive: true });
    await writeFile(outPath, JSON.stringify(catalogue, null, 2), "utf8");
    console.log(`Wrote ${outPath}`);
  } catch (err) {
    console.error(`Failed to write ${outPath}:`, getErrorMessage(err));
    process.exitCode = 4;
    return;
  }
}

function getErrorMessage(err: unknown): string {
  if (err instanceof Error) return err.message;
  if (typeof err === "string") return err;
  try {
    return JSON.stringify(err);
  } catch {
    return String(err);
  }
}

// ESM-safe check: run main when the script is executed directly
if (fileURLToPath(import.meta.url) === process.argv[1]) {
  (async () => {
    await main();
  })();
}

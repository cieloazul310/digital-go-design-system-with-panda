import { readFile } from "fs/promises";
import { join } from "path";
import { exists } from "./fs-exists";

export type ComponentsConfig = {
  outDir: string;
  sourceDir?: string;
  override: boolean;
  // 他に必要なフィールドがあれば追加
};

export async function readConfig(
  cwd: string = process.cwd(),
): Promise<ComponentsConfig> {
  const defaultConfig: ComponentsConfig = {
    outDir: "src/components/ui",
    override: true,
  };
  const configPath = join(cwd, "components.json");
  if (!(await exists(configPath))) {
    return defaultConfig;
  }

  const config = JSON.parse(
    await readFile(configPath, "utf-8"),
  ) as ComponentsConfig;
  return {
    ...defaultConfig,
    ...config,
  };
}

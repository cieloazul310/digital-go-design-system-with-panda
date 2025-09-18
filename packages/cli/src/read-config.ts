import { existsSync, readFileSync } from "fs";
import { join } from "path";

export type ComponentsConfig = {
  outDir: string;
  sourceDir?: string;
  override: boolean;
  // 他に必要なフィールドがあれば追加
};

export function readConfig(cwd: string = process.cwd()): ComponentsConfig {
  const defaultConfig: ComponentsConfig = {
    outDir: "src/components/ui",
    override: true,
  };
  const configPath = join(cwd, "components.json");
  if (!existsSync(configPath)) {
    return defaultConfig;
  }
  const config = JSON.parse(
    readFileSync(configPath, "utf-8"),
  ) as ComponentsConfig;
  return {
    ...defaultConfig,
    ...config,
  };
}

import { readFile } from "fs/promises";
import { resolve } from "path";
import { parse } from "yaml";

export type Catalogue = {
  components: Record<
    string,
    {
      id: string;
      name: string;
      className: string;
      description?: string;
      digitalgo?: string;
      ark?: string;
      storybook?: string;
      status?: "done" | "progress" | "not-started";
    }
  >;
};

export async function loadCatalogue(): Promise<Catalogue> {
  const file = await readFile(resolve(__dirname, "../catalogue.yml"), "utf8");
  return parse(file);
}

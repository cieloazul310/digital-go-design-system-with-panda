import fs from "fs";
import path from "path";
import * as yaml from "yaml";

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
    }
  >;
};

export function loadCatalogue(): Catalogue {
  const file = fs.readFileSync(
    path.resolve(__dirname, "../catalogue.yml"),
    "utf8",
  );
  return yaml.parse(file);
}

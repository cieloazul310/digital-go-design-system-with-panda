import { readFileSync } from "fs";
import { resolve } from "path";

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
  const cataloguePath = resolve(__dirname, "..", "public", "catalogue.json");
  let file: string;
  try {
    file = readFileSync(cataloguePath, "utf8");
  } catch (err: unknown) {
    throw new Error(`Could not read ${cataloguePath}: ${getErrorMessage(err)}`);
  }

  let catalogue: Catalogue;
  try {
    catalogue = JSON.parse(file);
  } catch (err) {
    throw new Error(
      `Failed to parse JSON at ${cataloguePath}: ${getErrorMessage(err)}`,
    );
  }

  return catalogue;
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

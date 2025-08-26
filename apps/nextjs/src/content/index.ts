import * as path from "path";
import { z, defineMdx, defineDataFromFile } from "@cieloazul310/regista";
import { postGroups } from "@/utils/post-group";

export const post = defineMdx({
  contentPath: path.resolve(process.cwd(), "docs"),
  basePath: "/",
  schema: {
    description: z.string().optional(),
    ark: z.url().optional(),
    storybook: z.url().optional(),
    digitalgo: z.url().optional(),
  },
  sortFunction: (a, b) => {
    const groupIds = postGroups.map(({ id }) => id);

    return (
      groupIds.indexOf(a.slug[0] ?? "") - groupIds.indexOf(b.slug[0] ?? "") ||
      a.slug.join("/").localeCompare(b.slug.join("/"))
    );
  },
});
export type PostFrontmatter = z.infer<typeof post.schema>;
export type PostMetadata = z.infer<typeof post.metadataSchema>;

export const components = defineDataFromFile({
  filePath: path.resolve(process.cwd(), "../../../../catalogue.yml"),
  format: "yaml",
  schema: z.object({
    components: z.record(
      z.string(),
      z.object({
        id: z.string(),
        name: z.string(),
        description: z.string().optional(),
        ark: z.url().optional(),
        storybook: z.url().optional(),
        digitalgo: z.url().optional(),
      }),
    ),
  }),
});

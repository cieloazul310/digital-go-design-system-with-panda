import * as path from "path";
import { z, defineMdx } from "@cieloazul310/regista";
import { postGroups } from "@/utils/post-group";

export const post = defineMdx({
  contentPath: path.resolve(process.cwd(), "docs"),
  basePath: "/",
  schema: {
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

import * as path from "path";
import { z, defineMdx } from "@cieloazul310/regista";

export const post = defineMdx({
  contentPath: path.resolve(process.cwd(), "docs"),
  basePath: "/",
  schema: {
    ark: z.url().optional(),
    storybook: z.url().optional(),
    digitalgo: z.url().optional(),
  },
});
export type PostFrontmatter = z.infer<typeof post.schema>;
export type PostMetadata = z.infer<typeof post.metadataSchema>;

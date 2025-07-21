import createMDX from "@next/mdx";
import remarkGfm from "remark-gfm";
import rehypeShiki from "@shikijs/rehype";

const withMdx = createMDX({
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      [
        rehypeShiki,
        {
          themes: {
            light: "slack-dark",
          },
        },
      ],
    ],
  },
});

/**
 * @type {import("next").NextConfig}
 */
const nextConfig = {
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
};

export default withMdx(nextConfig);

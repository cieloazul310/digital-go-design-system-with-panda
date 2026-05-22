import createMDX from "@next/mdx";
import remarkGfm from "remark-gfm";
import rehypePrettyCode from "rehype-pretty-code";
import { transformerNotationDiff } from "@shikijs/transformers";

/** @type {import('rehype-pretty-code').Options} */
const options = {
  theme: "slack-dark",
  transformers: [transformerNotationDiff()],
};

const withMdx = createMDX({
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [[rehypePrettyCode, options]],
  },
});

/**
 * @type {import("next").NextConfig}
 */
const nextConfig = {
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
};

export default withMdx(nextConfig);

import remarkGfm from "remark-gfm";
import NextLink from "next/link";
import rehypeShiki from "@shikijs/rehype";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { css } from "styled-system/css";
import { Stack } from "styled-system/jsx";
import { useMDXComponents } from "@/mdx-components";
import { BaseLayout } from "@/components/layout/base";
import { LeadingText } from "@/components/shortcodes";
import { Link } from "@/components/link";
import { post } from "@/content";

export async function generateStaticParams() {
  const allPosts = await post.getAll(); // => PostMetadata[]
  return allPosts;
}

async function Page({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params;
  /* eslint-disable-next-line react-hooks/rules-of-hooks */
  const components = useMDXComponents();
  const item = await post.useMdx(slug, {
    components,
    mdxOptions: {
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
  if (!item) return null;
  const { content, frontmatter, context } = item;
  const { title, ark, storybook, digitalgo, description } = frontmatter;
  const { older, newer } = context;

  return (
    <BaseLayout slug={slug}>
      <article>
        <hgroup
          className={css({
            mt: { base: 4, md: 6, lg: 0 },
            mb: { base: 8, md: 12, lg: 16 },
            display: "flex",
            flexDirection: "column",
            gap: 4,
          })}
        >
          <h1
            className={css({
              textStyle: { base: "std-28B-150", md: "std-45B-140" },
              ml: -0.5,
            })}
          >
            {title}
          </h1>
          {description && <LeadingText>{description}</LeadingText>}
          {(ark || storybook || digitalgo) && (
            <Stack
              gap={{ base: 2, sm: 4 }}
              direction={{ base: "column", sm: "row" }}
            >
              {ark && <Link href={ark}>Ark UI</Link>}
              {storybook && <Link href={storybook}>Storybook</Link>}
              {digitalgo && <Link href={digitalgo}>デザインシステム</Link>}
            </Stack>
          )}
        </hgroup>
        <section>{content}</section>
      </article>
      <nav
        className={css({
          display: "grid",
          gridTemplateColumns: { base: "1fr", sm: "repeat(2, 1fr)" },
          gap: { base: 2, sm: 4 },
          mt: 8,
        })}
      >
        <div
          className={css({
            display: "flex",
            flexDirection: "column",
            gap: 2,
            alignItems: "start",
          })}
        >
          {older && (
            <Button
              variant="outline"
              width="full"
              justifyContent="start"
              alignItems="center"
              asChild
            >
              <NextLink href={older.href}>
                <ChevronLeft />
                {older.frontmatter.title}
              </NextLink>
            </Button>
          )}
        </div>

        <div
          className={css({
            display: "flex",
            flexDirection: "column",
            gap: 2,
            alignItems: "end",
          })}
        >
          {newer && (
            <Button
              variant="outline"
              width="full"
              justifyContent="end"
              alignItems="center"
              asChild
            >
              <NextLink href={newer.href}>
                {newer.frontmatter.title}
                <ChevronRight />
              </NextLink>
            </Button>
          )}
        </div>
      </nav>
    </BaseLayout>
  );
}

export default Page;

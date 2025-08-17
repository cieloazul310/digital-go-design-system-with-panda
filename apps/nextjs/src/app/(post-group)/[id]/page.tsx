import { css } from "styled-system/css";
import { post } from "@/content";
import { ResourceList } from "@/components/ui/resource-list";
import { BaseLayout } from "@/components/layout/base";
import { Heading2 } from "@/components/article";
import { LeadingText } from "@/components/shortcodes";
import { Link } from "@/components/link";
import { postGroups } from "@/utils/post-group";

export function generateStaticParams() {
  return postGroups;
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const content = postGroups.find((group) => group.id === id);
  if (!content) return;
  const { title, description } = content;
  const allPosts = await post.getAll();
  const data = allPosts.filter(({ slug }) => slug.includes(id));

  return (
    <BaseLayout slug={[id]}>
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
        </hgroup>
        {description && (
          <section>
            <LeadingText>{description}</LeadingText>
          </section>
        )}
      </article>
      <section>
        <Heading2>{title}一覧</Heading2>
        <nav
          className={css({
            display: "grid",
            gridTemplateColumns: { base: "1fr", md: "repeat(2, 1fr)" },
            gridAutoRows: "auto",
            gap: 8,
          })}
        >
          {data.map(({ frontmatter, href }) => (
            <ResourceList.Root
              borderWidth="1px"
              borderColor="solid-gray.420"
              key={href}
              asLink
            >
              <ResourceList.Main py={8} textStyle="std-17N-170">
                <ResourceList.Content gap={4}>
                  <ResourceList.Title asChild>
                    <Link href={href}>{frontmatter.title}</Link>
                  </ResourceList.Title>
                  {frontmatter.description && <p>{frontmatter.description}</p>}
                </ResourceList.Content>
              </ResourceList.Main>
            </ResourceList.Root>
          ))}
        </nav>
      </section>
    </BaseLayout>
  );
}

import NextLink from "next/link";
import { css } from "styled-system/css";
import { menuItem } from "styled-system/recipes";
import { post } from "@/content";
import { postGroups } from "@/utils/post-group";

type MenuProps = {
  slug?: string[];
};

export default async function Menu({ slug = [] }: MenuProps) {
  const allPost = await post.getAll();

  const menuCollection = postGroups.map(({ title, href, id }) => {
    const children = allPost
      .filter((post) => post.slug.length === 2 && post.slug.includes(id))
      .map((post) => ({
        title: post.frontmatter.title,
        href: post.href,
        selected: slug.join("/") === post.slug.join("/"),
      }));

    return {
      title,
      href,
      children,
      open: slug.includes(id),
      selected: slug.join("/") === id,
    };
  });

  return (
    <nav className={css({ p: 1 })}>
      <ul>
        {menuCollection.map((menuGroup) => (
          <li key={menuGroup.href}>
            <NextLink
              className={menuItem({ variant: "boxed" })}
              href={menuGroup.href}
              data-open={menuGroup.open || undefined}
              data-selected={menuGroup.selected || undefined}
            >
              <svg width="24" height="24" viewBox="0 0 24 24">
                {menuGroup.open ? (
                  <path
                    d="M12 19L5 12L12 5L19 12L12 19ZM12 16.15L16.15 12L12 7.85L7.85 12L12 16.15Z"
                    fill="currentColor"
                  />
                ) : (
                  <path d="M12 19L5 12L12 5L19 12L12 19Z" fill="currentColor" />
                )}
              </svg>
              {menuGroup.title}
            </NextLink>
            <ul
              className={css({
                pl: 8,
                display: { base: "none", _open: "block" },
              })}
              data-open={menuGroup.open || undefined}
            >
              {menuGroup.children.map((item) => (
                <li key={item.href}>
                  <NextLink
                    className={menuItem({ variant: "boxed" })}
                    href={item.href}
                    data-selected={item.selected || undefined}
                  >
                    {item.title}
                  </NextLink>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  );
}

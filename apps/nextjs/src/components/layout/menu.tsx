import NextLink from "next/link";
import { css } from "styled-system/css";
import { menuItem } from "styled-system/recipes";
import { post } from "@/content";

type MenuProps = {
  slug?: string[];
};

export default async function Menu({ slug = [] }: MenuProps) {
  const allPost = await post.getAll();
  /*
  const collection = {
    items: [
      { value: "トップページ", href: "/" },
      { value: "はじめに", href: "/introduction" },
      {
        value: "はじめて本ウェブサイトを見る方へ",
        href: "/introduction/about",
      },
      { value: "利用上の注意事項", href: "/introduction/notices" },
      { value: "ガイダンス", href: "/guidance" },
      { value: "デザインシステムとは", href: "/guidance/desgin-system" },
      { value: "使い方", href: "/guidance/how-to-use" },
      { value: "アクセシビリティ", href: "/foundations/accessibility" },
      { value: "基本デザイン", href: "/foundations/style-guides" },
      { value: "カラー", href: "/guidance" },
      { value: "タイポグラフィ", href: "/foundations/desgin-system" },
      { value: "レイアウト", href: "/foundations/how-to-use" },
      { value: "リンクテキスト", href: "/foundations/accessibility" },
      { value: "余白", href: "/foundations/style-guides" },
      { value: "エレベーション", href: "/foundations/style-guides" },
    ],
  };
  */

  return (
    <nav className={css({ p: 1 })}>
      <ul>
        {[...allPost].map(({ frontmatter, href }) => (
          <li key={href}>
            <NextLink
              className={menuItem({ variant: "boxed" })}
              data-selected={`/${slug.join("/")}` === href || undefined}
              href={href}
            >
              {frontmatter.title}
            </NextLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

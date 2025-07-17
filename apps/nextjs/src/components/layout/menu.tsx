"use client";

// import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { css } from "@digital-go-pandacss/styled-system/css";
import { menuItem } from "@digital-go-pandacss/styled-system/recipes";

export default function Menu() {
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
  const pathname = usePathname();

  return (
    <nav className={css({ p: 1 })}>
      {collection.items.map(({ value, href }) => (
        <li
          className={menuItem({ variant: "boxed" })}
          key={value}
          data-selected={pathname === href || undefined}
        >
          {value}
        </li>
      ))}
    </nav>
  );
}

import { createListCollection } from "@ark-ui/react/listbox";
import { css } from "@import-map-package/styled-system/css";
import { styled, Stack } from "@import-map-package/styled-system/jsx";
import { Button } from "@cieloazul310/digital-go-pandacss/button";
import { Divider } from "@cieloazul310/digital-go-pandacss/divider";
import * as MenuList from "@cieloazul310/digital-go-pandacss/menu-list";

import { Paragraph } from "./components/article";
import { ExternalLink } from "./components/external-link";

const collection = createListCollection({
  items: [
    { value: "はじめに", href: "/introduction" },
    { value: "はじめて本ウェブサイトを見る方へ", href: "/introduction/about" },
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
  groupBy: ({ href }) => href.split("/")[1]?.toString() ?? "/",
});

function App() {
  return (
    <div
      className={css({
        display: "grid",
        gridTemplateAreas: `
            "side-nav main"
            "side-nav footer"
          `,
        gridTemplateColumns: {
          base: "0 1fr",
          md: "18rem 1fr",
        },
        gridTemplateRows: "1fr auto",
      })}
    >
      <header
        className={css({
          gridArea: "side-nav",
          display: { base: "none", md: "flex" },
          flexDirection: "column",
          pt: 10,
          borderRightWidth: { base: 0, md: "1px" },
          borderRightColor: "solid-gray.420",
          minHeight: "100vh",
          overflowY: "auto",
          gap: 10,
          height: "full",
        })}
      >
        <a
          href="/"
          className={css({
            alignSelf: "center",
            width: 48,
            color: "inherit",
            textStyle: "std-20B-150",
            my: 2,
          })}
        >
          デジタル庁デザインシステムβ版 for Panda CSS
        </a>
        <MenuList.Root variant="boxed" collection={collection}>
          <MenuList.Label>お品書き</MenuList.Label>
          <MenuList.Content>
            {collection.group().map(([group, items]) => (
              <MenuList.ItemGroup key={group}>
                <MenuList.ItemGroupLabel>{group}</MenuList.ItemGroupLabel>
                <styled.ul pl={8}>
                  {items.map((item) => (
                    <MenuList.Item key={item.href} item={item}>
                      <MenuList.ItemText>{item.value}</MenuList.ItemText>
                    </MenuList.Item>
                  ))}
                </styled.ul>
              </MenuList.ItemGroup>
            ))}
          </MenuList.Content>
        </MenuList.Root>
      </header>
      <main className={css({ gridArea: "main", pt: 10 })}>
        <div
          className={css({
            maxWidth: "breakpoint-xl",
            mx: "auto",
            px: { base: 4, md: 8 },
            textStyle: { base: "std-18N-160", md: "std-20N-150" },
          })}
        >
          {/**
           * text-std-28B-150 md:text-std-45B-140
           * mt-4 mb-8 md:mt-6 md:mb-12 lg:mt-0 lg:mb-16
           * -ml-0.5
           */}
          <styled.hgroup
            mt={{ base: 4, md: 6, lg: 0 }}
            mb={{ base: 8, md: 12, lg: 16 }}
          >
            <h1
              className={css({
                textStyle: { base: "std-28B-150", md: "std-45B-140" },
                ml: -0.5,
              })}
            >
              ようこそデジタル庁デザインシステムへ🐼
            </h1>
            <span
              className={css({
                textStyle: { base: "std-18N-160", md: "std-22N-150" },
                my: 4,
              })}
            >
              <ExternalLink
                href="https://design.digital.go.jp/"
                target="_blank"
                rel="noopener noreferer"
              >
                デジタル庁デザインシステムウェブサイト
              </ExternalLink>
              のコンテンツを加工して作成
            </span>
          </styled.hgroup>
          <section>
            <Paragraph>
              デジタル庁デザインシステムは、スタイリングの考え方を提供するデザイン言語、情報の視覚表現とインタラクションを具現化するUIコンポーネント、ユーザビリティとアクセシビリティを踏まえた設計や実装のためのガイドラインから構成されるデザインアセットです。
            </Paragraph>
            <Paragraph>
              デジタル庁のミッションである「誰一人取り残されない、人に優しいデジタル化を。」の実現に寄与することを標榜し、官公庁や地方自治体などの行政機関や公共性の高い組織等のウェブサイト/ウェブアプリケーション/オンラインサービスまたはシステム等で利用することを念頭に置いて構築されています。
            </Paragraph>
            <Stack
              gap={2}
              my={4}
              direction={{ base: "column", md: "row" }}
              alignItems={{ base: "start", md: "center" }}
            >
              <ExternalLink
                href="https://github.com/cieloazul310/digital-go-design-system-with-panda"
                target="_blank"
                rel="noopener noreferer"
              >
                GitHub リポジトリ
              </ExternalLink>
              <ExternalLink
                href="https://cieloazul310.github.io/digital-go-design-system-with-panda"
                target="_blank"
                rel="noopener noreferer"
              >
                Storybook
              </ExternalLink>
            </Stack>
            <Paragraph>
              作成:{" "}
              <ExternalLink
                href="https://cieloazul310.github.io"
                target="_blank"
                rel="noopener noreferer"
              >
                水戸地図
              </ExternalLink>
            </Paragraph>
          </section>
          <Stack
            gap={2}
            direction={{ base: "column", md: "row" }}
            alignItems={{ base: "start", md: "center" }}
          >
            <Button variant="outline" size="lg">
              Outline Large
            </Button>
            <Button size="md">Solid Medium</Button>
            <Button variant="text" size="sm">
              Text
            </Button>
          </Stack>
          <Divider color="black" />
          <Stack
            gap={2}
            direction={{ base: "column", md: "row" }}
            alignItems={{ base: "start", md: "center" }}
          >
            <Button variant="outline" size="lg" asChild>
              <a
                href="https://cieloazul310.github.io"
                target="_blank"
                rel="noopener noreferer"
              >
                Outline Large
              </a>
            </Button>
          </Stack>
        </div>
      </main>
    </div>
  );
}

export default App;

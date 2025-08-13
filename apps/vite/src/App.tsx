import { createListCollection } from "@ark-ui/react/listbox";
import { css } from "styled-system/css";
import { menuItem } from "styled-system/recipes";
import { styled, Stack } from "styled-system/jsx";

import { Drawer } from "@/components/ui/drawer";
import {
  HamburgerMenuButton,
  HamburgerIcon,
  CloseIcon,
} from "@/components/ui/hamburger-menu-button";
import { ResourceList } from "@/components/ui/resource-list";
import { Heading2, Paragraph } from "@/components/article";
import { ExternalLink } from "@/components/external-link";

const collection = createListCollection({
  items: [
    { value: "はじめに", href: "/introduction" },
    { value: "はじめて本ウェブサイトを見る方へ", href: "/introduction/about" },
    { value: "利用上の注意事項", href: "/introduction/notices" },
    { value: "ガイダンス", href: "/guidance" },
    { value: "デザインシステムとは", href: "/guidance/desgin-system" },
    { value: "使い方", href: "/guidance/how-to-use" },
    { value: "アクセシビリティ", href: "/guidance/accessibility" },
    { value: "スタイルガイド", href: "/guidance/style-guides" },
    { value: "基本デザイン", href: "/foundations/style-guides" },
    { value: "カラー", href: "/foundations/colors" },
    { value: "タイポグラフィ", href: "/foundations/typography" },
    { value: "レイアウト", href: "/foundations/layout" },
    { value: "リンクテキスト", href: "/foundations/link-text" },
    { value: "余白", href: "/foundations/spacing" },
    { value: "エレベーション", href: "/foundations/elevation" },
  ],
  groupBy: ({ href }) => href.split("/")[1]?.toString() ?? "/",
});

const links = [
  {
    title: "デジタル庁デザインシステム",
    description:
      "デジタル庁デザインシステムの使い方、基本デザインやコンポーネントの仕様、ガイドライン、作例、アクセシビリティのドキュメントなどが含まれます。",
    url: "https://design.digital.go.jp/",
  },
  {
    title: "Ark UI",
    description: "Chakra UIが提供するヘッドレスUIライブラリ。",
    url: "https://ark-ui.com/",
  },
  {
    title: "Panda CSS",
    description: "Chakra UIが提供するゼロランタイムCSS-in-JSライブラリ。",
    url: "https://panda-css.com/",
  },
  {
    title: "Park UI",
    description:
      "Ark UIをPanda CSSでスタイリングしたReactコンポーネントライブラリ。",
    url: "https://park-ui.com/",
  },
];

function App() {
  return (
    <div
      className={css({
        /**
         * min-h-screen pt-[var(--mobile-header-height)] lg:pt-0
         */
        minHeight: "screen",
        pt: { base: "{sizes.mobile-header-height}", lg: 0 },
      })}
    >
      <header
        className={css({
          /**
           * fixed top-0 z-10 w-full bg-white/85 lg:hidden
           */
          position: "fixed",
          top: 0,
          zIndex: 10,
          width: "full",
          height: "mobile-header-height",
          bg: "white/85",
          display: { base: "block", lg: "none" },
        })}
      >
        <div
          className={css({
            /**
             * mx-auto flex w-full max-w-screen-1440 items-center justify-between
             * px-4 py-2.5 md:px-8
             */
            mx: "auto",
            display: "flex",
            width: "full",
            maxWidth: "90em",
            alignItems: "center",
            justifyContent: "space-between",
            px: { base: 4, md: 8 },
            py: 2.5,
          })}
        >
          <h1
            className={css({
              /**
               * w-40 lg:w-48 rounded-4 text-std-16B-170 lg:text-std-20B-150 leading-150
               * lg:mr-2 block
               */
              display: "block",
              width: 48,
              textStyle: { base: "std-16B-170", lg: "std-20B-150" },
              rounded: 4,
              mr: { base: 0, lg: 2 },
              lineHeight: 150,
            })}
          >
            デジタル庁デザインシステムβ版 for Panda CSS
          </h1>
          <Drawer.Root placement="right">
            <Drawer.Trigger asChild>
              <HamburgerMenuButton>
                <HamburgerIcon />
                メニュー
              </HamburgerMenuButton>
            </Drawer.Trigger>
            <Drawer.Backdrop />
            <Drawer.Positioner>
              <Drawer.Content>
                <Drawer.Header>
                  <Drawer.Title>ドロワー</Drawer.Title>
                  <Drawer.CloseTrigger
                    asChild
                    position="absolute"
                    top="5"
                    right="4"
                  >
                    <HamburgerMenuButton>
                      <CloseIcon />
                      閉じる
                    </HamburgerMenuButton>
                  </Drawer.CloseTrigger>
                </Drawer.Header>
                <Drawer.Body>
                  <nav className={css({ p: 1 })}>
                    {collection.items.map(({ value }) => (
                      <li
                        className={menuItem({ variant: "boxed" })}
                        key={value}
                      >
                        {value}
                      </li>
                    ))}
                  </nav>
                </Drawer.Body>
              </Drawer.Content>
            </Drawer.Positioner>
          </Drawer.Root>
        </div>
      </header>
      <div
        className={css({
          display: "grid",
          gridTemplateAreas: `
            "side-nav main"
            "side-nav footer"
          `,
          gridTemplateColumns: {
            base: "0 1fr",
            lg: "{sizes.sidebar-width} minmax(0, 1fr)",
          },
          gridTemplateRows: "1fr auto",
          minHeight: "calc(100vh - {sizes.mobile-header-height})",
        })}
      >
        <header
          className={css({
            gridArea: "side-nav",
            display: { base: "none", lg: "flex" },
            flexDirection: "column",
            pt: 10,
            position: "fixed",
            top: 0,
            borderRightWidth: { base: 0, lg: "1px" },
            borderRightColor: "solid-gray.420",
            overflowY: "auto",
            overscrollBehaviorY: "contain",
            gap: 10,
            height: "full",
            width: "sidebar-width",
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
          <nav className={css({ p: 1 })}>
            {collection.items.map(({ value }) => (
              <li className={menuItem({ variant: "boxed" })} key={value}>
                {value}
              </li>
            ))}
          </nav>
        </header>
        <main
          className={css({
            gridArea: "main",
            minWidth: "0",
            pt: { base: 0, lg: 10 },
          })}
        >
          <div
            className={css({
              maxWidth: "common-main-width",
              mx: "auto",
              px: { base: 4, md: 8 },
              textStyle: { base: "std-18N-160", md: "std-20N-150" },
              boxSizing: "content-box",
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
            <section>
              <Heading2>参照</Heading2>
              <ul
                className={css({
                  /**
                   * mt-6 grid grid-cols-1 gap-8 xl:grid-cols-2
                   */
                  mt: 6,
                  display: "grid",
                  gridTemplateColumns: {
                    base: "repeat(1, minmax(0, 1fr))",
                    xl: "repeat(2, minmax(0, 1fr))",
                  },
                  gap: 8,
                })}
              >
                {links.map(({ title, description, url }) => (
                  <ResourceList.Root borderWidth="1px" asLink asChild key={url}>
                    <li>
                      <ResourceList.Main>
                        <ResourceList.Content py={4}>
                          <ResourceList.Title asChild mb={4}>
                            <ExternalLink href={url}>{title}</ExternalLink>
                          </ResourceList.Title>
                          <p>{description}</p>
                        </ResourceList.Content>
                      </ResourceList.Main>
                    </li>
                  </ResourceList.Root>
                ))}
              </ul>
            </section>
          </div>
        </main>
        <footer
          className={css({
            /**
             * [grid-area:footer] [&>div]:max-w-[--home-main-width] mb-6 mt-16 md:mb-10 md:mt-20
             */
            gridArea: "footer",
            mb: { base: 6, md: 10 },
            mt: { base: 16, md: 20 },
            "& > div": {
              maxWidth: "common-main-width",
            },
          })}
        >
          <div
            className={css({
              /**
               * mx-auto box-content md:px-[--content-padding]
               */
              mx: "auto",
              px: { base: 4, md: 8 },
              boxSizing: "content-box",
            })}
          >
            <div
              className={css({
                /**
                 * flex flex-col gap-8 md:flex-row md:items-center md:gap-20 lg:gap-16 xl:gap-24
                 */
                display: "flex",
                flexDirection: { base: "column", md: "row" },
                alignItems: { base: "initial", md: "center" },
                gap: { base: 8, md: 20, lg: 16, xl: 24 },
              })}
            >
              <ExternalLink
                href="https://cieloazul310.github.io"
                className={css({
                  /**
                   * w-fit text-std-20B-150 md:p-1.5
                   */
                  color: "inherit",
                  width: "fit-content",
                  textStyle: "std-20B-150",
                  p: { base: 0, md: 1.5 },
                })}
              >
                水戸地図
              </ExternalLink>
              <ul
                className={css({
                  /**
                   * flex flex-col gap-4 md:flex-row md:gap-8
                   */
                  display: "flex",
                  flexDirection: { base: "column", md: "row" },
                  gap: { base: 4, md: 8 },
                  textStyle: "dns-16N-130",
                  color: "solid-gray.800",
                })}
              >
                <li>
                  <ExternalLink
                    href="https://github.com/cieloazul310/digital-go-design-system-with-panda"
                    color="inherit"
                  >
                    GitHub
                  </ExternalLink>
                </li>
                <li>
                  <ExternalLink
                    href="https://cieloazul310.github.io/digital-go-design-system-with-panda"
                    color="inherit"
                  >
                    Storybook
                  </ExternalLink>
                </li>
              </ul>
            </div>
            <p
              className={css({
                /**
                 * mt-8 text-oln-16N-100 text-solid-gray-600 md:px-1.5
                 */
                textStyle: "oln-16N-100",
                color: "solid-gray.600",
                mt: 8,
                px: { base: 0, md: 1.5 },
              })}
            >
              © cieloazul310 All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;

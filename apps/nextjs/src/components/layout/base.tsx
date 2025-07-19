import type { PropsWithChildren } from "react";
import { css } from "@cieloazul310/styled-system/css";
import MobileHeader from "./mobile-header";
import Menu from "./menu";
import Footer from "./footer";

export default function BaseLayout({
  children,
  slug,
}: PropsWithChildren<{ slug?: string[] }>) {
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
      <MobileHeader />
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
          <Menu slug={slug} />
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
            {children}
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}

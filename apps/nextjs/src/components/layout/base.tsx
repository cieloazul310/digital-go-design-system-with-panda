import { css } from "@import-map-package/styled-system/css";
import type { PropsWithChildren } from "react";
import MobileHeader from "./mobile-header";
import Menu from "./menu";

export default function BaseLayout({ children }: PropsWithChildren) {
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
            md: "18rem 1fr",
          },
          gridTemplateRows: "1fr auto",
          minHeight: "calc(100vh - {sizes.mobile-header-height})",
        })}
      >
        <header
          className={css({
            gridArea: "side-nav",
            display: { base: "none", md: "flex" },
            flexDirection: "column",
            pt: 10,
            position: "fixed",
            top: 0,
            borderRightWidth: { base: 0, md: "1px" },
            borderRightColor: "solid-gray.420",
            overflowY: "auto",
            overscrollBehaviorY: "contain",
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
          <Menu />
        </header>
        <main className={css({ gridArea: "main", pt: { base: 0, lg: 10 } })}>
          <div
            className={css({
              maxWidth: "breakpoint-xl",
              mx: "auto",
              px: { base: 4, md: 8 },
              textStyle: { base: "std-18N-160", md: "std-20N-150" },
              boxSizing: "content-box",
            })}
          >
            {children}
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
          })}
        />
      </div>
    </div>
  );
}

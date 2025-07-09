import { css } from "@import-map-package/styled-system/css";
import type { PropsWithChildren } from "react";
import Menu from "./menu";

export default function BaseLayout({ children }: PropsWithChildren) {
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
        <Menu />
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
          {children}
        </div>
      </main>
    </div>
  );
}

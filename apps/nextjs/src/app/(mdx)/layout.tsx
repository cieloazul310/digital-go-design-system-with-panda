import type { PropsWithChildren } from "react";
import { css } from "@cieloazul310/styled-system/css";
import { Link } from "@/components/link";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <article>
      {/**
       * text-std-28B-150 md:text-std-45B-140
       * mt-4 mb-8 md:mt-6 md:mb-12 lg:mt-0 lg:mb-16
       * -ml-0.5
       */}
      <hgroup
        className={css({
          mt: { base: 4, md: 6, lg: 0 },
          mb: { base: 8, md: 12, lg: 16 },
        })}
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
          <Link href="https://design.digital.go.jp/">
            デジタル庁デザインシステムウェブサイト
          </Link>
          のコンテンツを加工して作成
        </span>
      </hgroup>
      <section>{children}</section>
    </article>
  );
}

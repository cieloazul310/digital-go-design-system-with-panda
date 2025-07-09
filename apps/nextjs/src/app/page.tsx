import { styled, Stack } from "@import-map-package/styled-system/jsx";
import { css } from "@import-map-package/styled-system/css";
import { Link } from "@/components/link";
import { Paragraph } from "@/components/article";

export default function Home() {
  return (
    <>
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
          <Link href="https://design.digital.go.jp/">
            デジタル庁デザインシステムウェブサイト
          </Link>
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
          <Link href="https://github.com/cieloazul310/digital-go-design-system-with-panda">
            GitHub リポジトリ
          </Link>
          <Link href="https://cieloazul310.github.io/digital-go-design-system-with-panda">
            Storybook
          </Link>
        </Stack>
        <Paragraph>
          作成: <Link href="https://cieloazul310.github.io">水戸地図</Link>
        </Paragraph>
      </section>
    </>
  );
}

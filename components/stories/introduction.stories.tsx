import type { StoryObj, Meta } from "@storybook/nextjs-vite";
import { css } from "styled-system/css";
import { Link } from "../src/link";
import { UnorderedList } from "../src/unordered-list";
import { List } from "../src/list";

const meta = {
  title: "Getting Started/Introduction",
} satisfies Meta;

export default meta;
type Story = StoryObj;

const h2 = css({
  // text-std-24B-150 md:text-std-32B-150 my-8 md:my-10
  textStyle: { base: "std-24B-150", md: "std-32B-150" },
  my: { base: 8, md: 10 },
});

const h3 = css({
  // text-std-22B-150 md:text-std-24B-150 my-6 md:my-8
  textStyle: { base: "std-22B-150", md: "std-24B-150" },
  my: { base: 6, md: 8 },
});

const paragraph = css({ my: 4 });

export const Introduction: Story = {
  render: () => (
    <div
      className={css({
        // "p-4 text-std-17N-170 md:p-8"
        p: { base: 4, md: 8 },
        textStyle: "std-17N-170",
      })}
    >
      <h1
        className={css({
          // "text-std-28B-150 mt-0 mb-8 md:text-std-45B-140 md:mb-12"
          textStyle: { base: "std-28B-150", md: "std-45B-140" },
          mt: 0,
          mb: { base: 8, md: 12 },
        })}
      >
        React サンプルコンポーネント🐼
      </h1>
      <p className="my-4">
        <Link href="https://design.digital.go.jp/" target="_blank">
          デジタル庁デザインシステム
        </Link>
        のコンポーネントの一部を
        <Link href="https://ark-ui.com/" target="_blank">
          Ark UI (React)
        </Link>{" "}
        /{" "}
        <Link href="http://panda-css.com/" target="_blank">
          Panda CSS
        </Link>
        ベースで実装したサンプル集です。
      </p>
      <h2 className={h2}>コンセプト</h2>
      <h3 className={h3}>アクセシビリティファースト</h3>
      <p className={paragraph}>
        アクセシビリティを最優先事項として位置付けています。
      </p>
      <p className={paragraph}>
        公開されているすべてのコンポーネントは、
        <Link href="https://waic.jp/translations/WCAG22/" target="_blank">
          WCAG
        </Link>
        等のアクセシビリティガイドラインを最大限に取り込んだデジタル庁デザインシステムのガイドラインを基に作られており、アクセシビリティの専門家によるチェックも受けています。
      </p>
      <p className={paragraph}>
        これにより、デジタル庁デザインシステムのコンポーネントを使うことで、WCAGの各達成基準に適合または適合が容易になります。
      </p>
      {/*  
      <h3 className={h3}>HTML ネイティブ機能の活用</h3>
      <p className={paragraph}>
        保守性の観点から、可能な限りHTMLネイティブの機能を使用することを重視して開発をしています。
      </p>
      <p className={paragraph}>
        <Link href="https://html.spec.whatwg.org" target="_blank">
          HTML Living Standard
        </Link>
        や
        <Link href="https://open-ui.org/" target="_blank">
          Open UI
        </Link>
        の動向を常に確認し、新しい
        HTMLネイティブの機能が利用可能になった際には、既存の実装を最新の標準に置き換えていきます。この取り組みにより、一部のブラウザではまだ実装されていない最新機能を試験的に導入することもあります。
      </p>
      <p className={paragraph}>
        HTMLネイティブ機能だけでは実現できないコンポーネントに関しては、ヘッドレスUIライブラリの使用を推奨します。
      </p>
      <p className={paragraph}>
        一部のサンプルコードでは、Reactの機能を使った実装も提供していますので、実装の参考にしてください。WAI-ARIAやキーボード操作などの挙動については
        <Link href="ARIA Authoring Practices Guide (APG)" target="_blank">
          ARIA Authoring Practices Guide (APG)
        </Link>
        の
        <Link href="https://www.w3.org/WAI/ARIA/apg/patterns/" target="_blank">
          Patterns
        </Link>
        を参考にして実装しています。
      </p>
      <h2 className={h2}>コンポーネントのバージョンについて</h2>
      <p className={paragraph}>
        DADS
        v2はv2.0.0以降の最新のガイドラインとデザインデータを基に作られたコンポーネントです。
      </p>
      <p className={paragraph}>
        v1.x系統が基となっているDADS
        v1のコンポーネントは非推奨となっています。それらのコンポーネントのガイドラインとデザインデータがv2に追加され次第、順次DADS
        v2に置き換えていく予定です。
      </p>
      <h2 className={h2}>検証済み環境</h2>
      <p className={paragraph}>
        以下のブラウザの最新版で動作確認を行なっています。
      </p>
      <UnorderedList className={ul}>
        <List>Google Chrome</List>
        <List>Microsoft Edge</List>
        <List>Safari</List>
        <List>Firefox</List>
      </UnorderedList>
      <p className={paragraph}>
        また、以下のスクリーンリーダーでも動作検証を行なっています。
      </p>
      <UnorderedList className={ul}>
        <List>NVDA</List>
        <List>iOS VoiceOver</List>
        <List>TalkBack</List>
        <List>Mac VoiceOver</List>
      </UnorderedList>
      */}
      <h2 className={h2}>リソース</h2>
      <p className={paragraph}>
        デジタル庁が提供する、デジタル庁デザインシステムのガイドラインやデザインデータなど、連携可能な各種リソースです。用途の必要性に応じてあわせてご利用ください。
      </p>
      <UnorderedList>
        <List>
          <Link href="https://design.digital.go.jp/" target="_blank">
            デジタル庁デザインシステムウェブサイト（ガイドライン）
          </Link>
        </List>
        <List>
          <Link
            href="https://www.figma.com/community/file/1377880368787735577"
            target="_blank"
          >
            デザインデータ（Figma）
          </Link>
        </List>
        <List>
          <Link
            href="https://www.digital.go.jp/resources/introduction-to-web-accessibiListty-guidebook"
            target="_blank"
          >
            ウェブアクセシビリティ導入ガイドブック
          </Link>
        </List>
      </UnorderedList>
      <h2 className={h2}>不具合報告・機能要望について</h2>
      <p className={paragraph}>
        コンポーネントに関する不具合や機能要望は、
        <Link
          href="https://github.com/cieloazul310/digital-go-design-system-with-panda"
          target="_blank"
        >
          GitHubのリポジトリ
        </Link>
        からIssueを作成して報告してください。
      </p>
    </div>
  ),
};

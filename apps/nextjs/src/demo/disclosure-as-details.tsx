import { Disclosure } from "@/components/ui/disclosure";

export default function App() {
  return (
    <Disclosure.Root asChild>
      <details>
        <Disclosure.Summary asChild>
          <summary>
            <Disclosure.Indicator />
            ディスクロージャータイトル
          </summary>
        </Disclosure.Summary>
        <Disclosure.Content textStyle="std-17N-170" my={4}>
          これはダミーテキストです。ダミーテキストは、デザインやレイアウトの作成時に使用される仮の文章です。ダミーテキストを使用すると、デザインの全体像を評価したり、テキストの配置や長さを確認したりすることができます。ダミーテキストは実際の文章ではないので、内容には意味がありません。
        </Disclosure.Content>
      </details>
    </Disclosure.Root>
  );
}

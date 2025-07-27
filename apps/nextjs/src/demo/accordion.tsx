import { ChevronDownIcon } from "lucide-react";
import * as Accordion from "@/components/ui/accordion";

export default function App() {
  return (
    <Accordion.Root textStyle="std-16N-170">
      <Accordion.Item value="hoge">
        <Accordion.ItemTrigger>
          <h3>ダミーテキストとは何ですか？</h3>
          <Accordion.ItemIndicator>
            <ChevronDownIcon />
          </Accordion.ItemIndicator>
        </Accordion.ItemTrigger>
        <Accordion.ItemContent>
          <p>これはダミーテキストです。</p>
          <p>
            ダミーテキストは、デザインやレイアウトの作成時に使用される仮の文章です。ダミーテキストを使用すると、デザインの全体像を評価したり、テキストの配置や長さを確認したりすることができます。ダミーテキストは実際の文章ではないので、内容には意味がありません。
          </p>
        </Accordion.ItemContent>
      </Accordion.Item>
      <Accordion.Item value="hige">
        <Accordion.ItemTrigger>
          <h3>
            ダミーテキストがデザインやレイアウトに使用されていることがよくありますが、どのような目的や意味で使用されているのでしょうか？
          </h3>
          <Accordion.ItemIndicator>
            <ChevronDownIcon />
          </Accordion.ItemIndicator>
        </Accordion.ItemTrigger>
        <Accordion.ItemContent>
          これはダミーテキストです。ダミーテキストは、デザインやレイアウトの作成時に使用される仮の文章です。ダミーテキストを使用すると、デザインの全体像を評価したり、テキストの配置や長さを確認したりすることができます。ダミーテキストは実際の文章ではないので、内容には意味がありません。これはダミーテキストです。ダミーテキストは、デザインやレイアウトの作成時に使用される仮の文章です。ダミーテキストを使用すると、デザインの全体像を評価したり、テキストの配置や長さを確認したりすることができます。ダミーテキストは実際の文章ではないので、内容には意味がありません。
        </Accordion.ItemContent>
      </Accordion.Item>
      <Accordion.Item value="huge">
        <Accordion.ItemTrigger>
          <h3>ダミーテキストはどのような場合に使用されますか？</h3>
          <Accordion.ItemIndicator>
            <ChevronDownIcon />
          </Accordion.ItemIndicator>
        </Accordion.ItemTrigger>
        <Accordion.ItemContent>
          <p>これはダミーテキストです。</p>
          <p>
            ダミーテキストは、デザインやレイアウトの作成時に使用される仮の文章です。
          </p>
          <p>
            ダミーテキストを使用すると、デザインの全体像を評価したり、テキストの配置や長さを確認したりすることができます。ダミーテキストは実際の文章ではないので、内容には意味がありません。
          </p>
        </Accordion.ItemContent>
      </Accordion.Item>
    </Accordion.Root>
  );
}

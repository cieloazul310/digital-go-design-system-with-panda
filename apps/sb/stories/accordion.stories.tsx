import { ChevronDownIcon } from "lucide-react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import * as Accordion from "@cieloazul310/digital-go-pandacss/accordion";
import { styled, Container } from "@import-map-package/styled-system/jsx";

const meta = {
  title: "Components/アコーディオン",
  argTypes: {
    collapsible: {
      control: "boolean",
    },
    multiple: {
      control: "boolean",
    },
  },
  args: {
    collapsible: true,
    multiple: true,
  },
  render: ({ ...props }) => {
    return (
      <Accordion.Root textStyle="std-16N-170" {...props}>
        <Accordion.Item className="group" value="hoge">
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
        <Accordion.Item className="group" value="hige">
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
        <Accordion.Item className="group" value="huge">
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
  },
} satisfies Meta<typeof Accordion.Root>;

export default meta;
type Story = StoryObj;

export const Basic: Story = {};

export const Summary: Story = {
  render: ({ ...props }) => (
    <Container maxWidth="breakpoint-md" textStyle="std-16N-170">
      <article>
        <styled.h1 textStyle="std-28B-150">Heading</styled.h1>
        <styled.p my={4}>これはダミーテキストです。</styled.p>
        <styled.p my={4}>
          ダミーテキストは、デザインやレイアウトの作成時に使用される仮の文章です。ダミーテキストを使用すると、デザインの全体像を評価したり、テキストの配置や長さを確認したりすることができます。ダミーテキストは実際の文章ではないので、内容には意味がありません。
        </styled.p>
        <Accordion.Root my={8} {...props}>
          <Accordion.Item className="group" value="hoge" asChild>
            <details>
              <Accordion.ItemTrigger asChild>
                <summary>
                  <styled.h3 textStyle="std-18N-160">
                    ダミーテキストがデザインやレイアウトに使用されていることがよくありますが、どのような目的や意味で使用されているのでしょうか？
                  </styled.h3>
                  <Accordion.ItemIndicator>
                    <ChevronDownIcon />
                  </Accordion.ItemIndicator>
                </summary>
              </Accordion.ItemTrigger>
              <Accordion.ItemContent>
                <p>
                  これはダミーテキストです。ダミーテキストは、デザインやレイアウトの作成時に使用される仮の文章です。ダミーテキストを使用すると、デザインの全体像を評価したり、テキストの配置や長さを確認したりすることができます。ダミーテキストは実際の文章ではないので、内容には意味がありません。これはダミーテキストです。ダミーテキストは、デザインやレイアウトの作成時に使用される仮の文章です。ダミーテキストを使用すると、デザインの全体像を評価したり、テキストの配置や長さを確認したりすることができます。ダミーテキストは実際の文章ではないので、内容には意味がありません。
                </p>
              </Accordion.ItemContent>
            </details>
          </Accordion.Item>
        </Accordion.Root>
        <styled.p my={4}>
          ダミーテキストを使用すると、デザインの全体像を評価したり、テキストの配置や長さを確認したりすることができます。ダミーテキストは実際の文章ではないので、内容には意味がありません。
        </styled.p>
      </article>
    </Container>
  ),
};

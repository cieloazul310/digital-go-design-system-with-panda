/**
 * reference:
 * https://github.com/digital-go-jp/design-system-example-components/blob/main/src/components/Disclosure/Disclosure.stories.tsx
 */
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { css } from "styled-system/css";
import { styled, Container } from "styled-system/jsx";
import * as Disclosure from "../src/disclosure";

const meta = {
  title: "Components/ディスクロージャー",
  tags: ["autodocs"],
  component: Disclosure.Root,
  argTypes: {},
  args: {},
} satisfies Meta<typeof Disclosure.Root>;

export default meta;
type Story = StoryObj;

const paragraph = css({ my: 4 });

export const Basic: Story = {
  args: {
    children: (
      <>
        <Disclosure.Summary>
          <Disclosure.Icon />
          ディスクロージャータイトル
        </Disclosure.Summary>
        <Disclosure.Content my={4}>
          これはダミーテキストです。ダミーテキストは、デザインやレイアウトの作成時に使用される仮の文章です。ダミーテキストを使用すると、デザインの全体像を評価したり、テキストの配置や長さを確認したりすることができます。ダミーテキストは実際の文章ではないので、内容には意味がありません。
        </Disclosure.Content>
      </>
    ),
  },
};

export const Summary: Story = {
  render: ({ ...props }) => (
    <Container maxWidth="breakpoint-md" textStyle="std-16N-170">
      <article>
        <styled.h1 textStyle="std-28B-150">Heading</styled.h1>
        <p className={paragraph}>これはダミーテキストです。</p>
        <p className={paragraph}>
          ダミーテキストは、デザインやレイアウトの作成時に使用される仮の文章です。ダミーテキストを使用すると、デザインの全体像を評価したり、テキストの配置や長さを確認したりすることができます。ダミーテキストは実際の文章ではないので、内容には意味がありません。
        </p>
        <Disclosure.Root my={8} asChild {...props}>
          <details>
            <Disclosure.Summary asChild>
              <summary>
                <Disclosure.Icon />
                ダミーテキストがデザインやレイアウトに使用されていることがよくありますが、どのような目的や意味で使用されているのでしょうか？
              </summary>
            </Disclosure.Summary>
            <Disclosure.Content my={4}>
              これはダミーテキストです。ダミーテキストは、デザインやレイアウトの作成時に使用される仮の文章です。ダミーテキストを使用すると、デザインの全体像を評価したり、テキストの配置や長さを確認したりすることができます。ダミーテキストは実際の文章ではないので、内容には意味がありません。これはダミーテキストです。ダミーテキストは、デザインやレイアウトの作成時に使用される仮の文章です。ダミーテキストを使用すると、デザインの全体像を評価したり、テキストの配置や長さを確認したりすることができます。ダミーテキストは実際の文章ではないので、内容には意味がありません。
            </Disclosure.Content>
          </details>
        </Disclosure.Root>
        <p className={paragraph}>
          ダミーテキストを使用すると、デザインの全体像を評価したり、テキストの配置や長さを確認したりすることができます。ダミーテキストは実際の文章ではないので、内容には意味がありません。
        </p>
      </article>
    </Container>
  ),
};

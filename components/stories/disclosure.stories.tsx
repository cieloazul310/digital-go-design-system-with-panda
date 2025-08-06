/**
 * reference:
 * https://github.com/digital-go-jp/design-system-example-components/blob/main/src/components/Disclosure/Disclosure.stories.tsx
 */
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { useCollapsible } from "@ark-ui/react/collapsible";
import { css } from "styled-system/css";
import { styled, Container } from "styled-system/jsx";
import * as Disclosure from "../src/disclosure";

const meta = {
  title: "Components/ディスクロージャー",
  tags: ["autodocs"],
  component: Disclosure.Root,
  argTypes: {
    disabled: {
      type: "boolean",
      control: { type: "boolean" },
    },
    defaultOpen: {
      type: "boolean",
      control: { type: "boolean" },
    },
    lazyMount: {
      type: "boolean",
      control: { type: "boolean" },
    },
    unmountOnExit: {
      type: "boolean",
      control: { type: "boolean" },
    },
  },
  args: {
    disabled: false,
    defaultOpen: false,
    lazyMount: false,
    unmountOnExit: false,
  },
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
  render: ({ ...args }) => (
    <Container maxWidth="breakpoint-md" textStyle="std-16N-170">
      <article>
        <styled.h1 textStyle="std-28B-150">Heading</styled.h1>
        <p className={paragraph}>これはダミーテキストです。</p>
        <p className={paragraph}>
          ダミーテキストは、デザインやレイアウトの作成時に使用される仮の文章です。ダミーテキストを使用すると、デザインの全体像を評価したり、テキストの配置や長さを確認したりすることができます。ダミーテキストは実際の文章ではないので、内容には意味がありません。
        </p>
        <Disclosure.Root my={8} asChild {...args}>
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

export const LazyMountAndUnmountOnExit: Story = {
  args: {
    lazyMount: true,
    unmountOnExit: true,
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

export const WithProvider: Story = {
  render: ({ ...args }) => {
    const disclosure = useCollapsible({ ...args });
    return (
      <>
        <p className={paragraph}>{disclosure.visible ? "Visible" : "Hidden"}</p>
        <Disclosure.RootProvider value={disclosure}>
          <Disclosure.Summary>
            <Disclosure.Icon />
            ディスクロージャータイトル
          </Disclosure.Summary>
          <Disclosure.Content my={4}>
            これはダミーテキストです。ダミーテキストは、デザインやレイアウトの作成時に使用される仮の文章です。ダミーテキストを使用すると、デザインの全体像を評価したり、テキストの配置や長さを確認したりすることができます。ダミーテキストは実際の文章ではないので、内容には意味がありません。
          </Disclosure.Content>
        </Disclosure.RootProvider>
      </>
    );
  },
};

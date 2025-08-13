import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ChevronDownIcon } from "lucide-react";
import { css } from "styled-system/css";
import { styled, Container } from "styled-system/jsx";
import { Accordion, useAccordion } from "../src/accordion";
import { Button } from "../src/button";
import { colorPalette } from "./utils/color-palette";
import { disabled } from "./utils/arg-types";

const meta = {
  title: "Components/アコーディオン",
  tags: ["autodocs"],
  component: Accordion.Root,
  argTypes: {
    collapsible: {
      control: "boolean",
    },
    multiple: {
      control: "boolean",
    },
    colorPalette,
    disabled,
  },
  args: {
    collapsible: true,
    multiple: true,
    colorPalette: "keyColor",
    disabled: false,
  },
} satisfies Meta<typeof Accordion.Root>;

export default meta;
type Story = StoryObj;

export const Basic: Story = {
  args: {
    ...css.raw({
      textStyle: "std-17N-170",
    }),
    children: (
      <>
        <Accordion.Item value="hoge">
          <Accordion.ItemTrigger>
            <h3>ダミーテキストとは何ですか？</h3>
            <Accordion.ItemIndicator />
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
            <Accordion.ItemIndicator />
          </Accordion.ItemTrigger>
          <Accordion.ItemContent>
            これはダミーテキストです。ダミーテキストは、デザインやレイアウトの作成時に使用される仮の文章です。ダミーテキストを使用すると、デザインの全体像を評価したり、テキストの配置や長さを確認したりすることができます。ダミーテキストは実際の文章ではないので、内容には意味がありません。これはダミーテキストです。ダミーテキストは、デザインやレイアウトの作成時に使用される仮の文章です。ダミーテキストを使用すると、デザインの全体像を評価したり、テキストの配置や長さを確認したりすることができます。ダミーテキストは実際の文章ではないので、内容には意味がありません。
          </Accordion.ItemContent>
        </Accordion.Item>
        <Accordion.Item value="huge">
          <Accordion.ItemTrigger>
            <h3>ダミーテキストはどのような場合に使用されますか？</h3>
            <Accordion.ItemIndicator />
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
      </>
    ),
  },
};

export const CustomIndicator: Story = {
  args: {
    children: (
      <>
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
      </>
    ),
  },
};

export const Summary: Story = {
  render: ({ ...props }) => (
    <Container maxWidth="breakpoint-md">
      <article>
        <styled.h1 textStyle="std-28B-150">Heading</styled.h1>
        <styled.p my={4}>これはダミーテキストです。</styled.p>
        <styled.p my={4}>
          ダミーテキストは、デザインやレイアウトの作成時に使用される仮の文章です。ダミーテキストを使用すると、デザインの全体像を評価したり、テキストの配置や長さを確認したりすることができます。ダミーテキストは実際の文章ではないので、内容には意味がありません。
        </styled.p>
        <Accordion.Root my={8} {...props}>
          <Accordion.Item value="hoge" asChild>
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
              <Accordion.ItemContent textStyle="std-17N-170">
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

export const WithRootProvider: Story = {
  render: ({ ...args }) => {
    const accordion = useAccordion({
      ...args,
      defaultValue: ["React"],
    });
    const onClick = () => {
      accordion.setValue(["React", "Solid", "Vue", "Svelte"]);
    };

    return (
      <>
        <Button onClick={onClick}>Open all</Button>
        <Accordion.RootProvider value={accordion}>
          {["React", "Solid", "Vue", "Svelte"].map((item) => (
            <Accordion.Item value={item} key={item}>
              <Accordion.ItemTrigger>
                What is {item}?
                <Accordion.ItemIndicator>
                  <ChevronDownIcon />
                </Accordion.ItemIndicator>
              </Accordion.ItemTrigger>
              <Accordion.ItemContent>
                {item} is a JavaScript library for building user interfaces.
              </Accordion.ItemContent>
            </Accordion.Item>
          ))}
        </Accordion.RootProvider>
      </>
    );
  },
};

export const WithContext: Story = {
  args: {
    defaultValue: ["React"],
    children: (
      <>
        <Accordion.Context>
          {(context) => (
            <div
              className={css({
                display: "flex",
                flexDirection: "column",
                gap: 2,
                my: 4,
              })}
            >
              <span>Selected items: {context.value.join(", ")}</span>
              <span>Focused item: {context.focusedValue}</span>
              <Button
                width="fit-content"
                onClick={() => context.setValue(["React", "Solid"])}
              >
                Set value
              </Button>
            </div>
          )}
        </Accordion.Context>
        {["React", "Solid", "Vue", "Svelte"].map((item) => (
          <Accordion.Item key={item} value={item}>
            <Accordion.ItemTrigger>
              What is {item}?
              <Accordion.ItemIndicator>
                <ChevronDownIcon />
              </Accordion.ItemIndicator>
            </Accordion.ItemTrigger>
            <Accordion.ItemContent>
              {item} is a JavaScript library for building user interfaces.
            </Accordion.ItemContent>
          </Accordion.Item>
        ))}
      </>
    ),
  },
};

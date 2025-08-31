/**
 * https://github.com/digital-go-jp/design-system-example-components-react/blob/main/src/components/Button/Button.stories.tsx
 */
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { fn } from "storybook/test";
import { cx, css } from "styled-system/css";
import { hstack } from "styled-system/patterns";
import { button } from "styled-system/recipes";
import { styled, Flex } from "styled-system/jsx";
import { Button } from "../src/button";
import { Link } from "../src/link";
import { colorPalette } from "./utils/color-palette";
import { ariaDisabled } from "./utils/arg-types";

const headingStyle = css({ textStyle: "std-32B-150", mb: 6 });
const buttons = hstack({ gap: 4, alignItems: "end" });

const meta = {
  title: "Components/ボタン",
  tags: ["autodocs"],
  component: Button,
  argTypes: {
    variant: {
      options: button.variantMap.variant,
      control: { type: "radio" },
      description:
        "ボタンのスタイルを、塗りボタン（`solid-fill`）、アウトラインボタン（`outline`）、テキストボタン（`text`）の3種類から選択します。",
      table: {
        type: { summary: `${button.variantMap.variant.join(" | ")}` },
      },
    },
    size: {
      options: button.variantMap.size,
      control: { type: "radio" },
      description: "ボタンのサイズを以下から選択します。",
      table: {
        type: { summary: `${button.variantMap.size.join(" | ")}` },
      },
    },
    "aria-disabled": ariaDisabled,
    colorPalette,
  },
  args: {
    variant: "solid-fill",
    size: "md",
    children: "ボタン",
    onClick: fn(),
    colorPalette: "keyColor",
    "aria-disabled": false,
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    size: "lg",
  },
};

export const ColorPalette: Story = {
  args: {
    size: "lg",
    colorPalette: "magenta",
  },
};

export const AllButtons = {
  render: ({ ...props }) => {
    return (
      <Flex gap={8} direction="column">
        <div>
          <h2 className={headingStyle}>塗りボタン（Solid Fill）</h2>
          <div className={buttons}>
            <Button
              variant="solid-fill"
              size="lg"
              colorPalette={props.colorPalette}
            >
              ラベル
            </Button>
            <Button
              variant="solid-fill"
              size="md"
              colorPalette={props.colorPalette}
            >
              ラベル
            </Button>
            <Button
              variant="solid-fill"
              size="sm"
              colorPalette={props.colorPalette}
            >
              ラベル
            </Button>
            <Button
              variant="solid-fill"
              size="xs"
              colorPalette={props.colorPalette}
            >
              ラベル
            </Button>
          </div>
        </div>
        <div>
          <h2 className={headingStyle}>アウトラインボタン（Outline）</h2>
          <div className={buttons}>
            <Button
              variant="outline"
              size="lg"
              colorPalette={props.colorPalette}
            >
              ラベル
            </Button>
            <Button
              variant="outline"
              size="md"
              colorPalette={props.colorPalette}
            >
              ラベル
            </Button>
            <Button
              variant="outline"
              size="sm"
              colorPalette={props.colorPalette}
            >
              ラベル
            </Button>
            <Button
              variant="outline"
              size="xs"
              colorPalette={props.colorPalette}
            >
              ラベル
            </Button>
          </div>
        </div>
        <div>
          <h2 className={headingStyle}>テキストボタン（Text）</h2>
          <div className={buttons}>
            <Button variant="text" size="lg" colorPalette={props.colorPalette}>
              ラベル
            </Button>
            <Button variant="text" size="md" colorPalette={props.colorPalette}>
              ラベル
            </Button>
            <Button variant="text" size="sm" colorPalette={props.colorPalette}>
              ラベル
            </Button>
            <Button variant="text" size="xs" colorPalette={props.colorPalette}>
              ラベル
            </Button>
          </div>
        </div>
      </Flex>
    );
  },
};

export const DisabledButtons = {
  render: () => {
    return (
      <div>
        <h2 className={headingStyle}>
          Disabledの作例（aria-disabled 属性を使用）
        </h2>
        <styled.p mb={8}>
          ※ ボタンの無効化に<code>disabled</code>
          コンテンツ属性ではなく、キーボード操作のタブフォーカスでもアクセスできる
          <code>aria-disabled</code>
          を使用しています。
          <br />
          詳しくはデジタル庁デザインシステム専用サイトの
          <Link
            href="https://design.digital.go.jp/components/button/?tab=accessibility#h3-%E7%84%A1%E5%8A%B9%E3%83%9C%E3%82%BF%E3%83%B3%EF%BC%88disabled%EF%BC%89%E3%81%AF%E3%82%BF%E3%83%96%E3%83%95%E3%82%A9%E3%83%BC%E3%82%AB%E3%82%B9%E3%81%A7%E3%82%A2%E3%82%AF%E3%82%BB%E3%82%B9%E3%81%A7%E3%81%8D%E3%81%AA%E3%81%84"
            target="_blank"
          >
            ボタン（アクセシビリティ） -
            無効ボタン（disabled）はタブフォーカスでアクセスできない
          </Link>
          をお読みください。
        </styled.p>
        <div className={cx(buttons, css({ mt: 4 }))}>
          <Button aria-disabled={true} variant="solid-fill" size="lg">
            ラベル
          </Button>
          <Button aria-disabled={true} variant="outline" size="lg">
            ラベル
          </Button>
          <Button aria-disabled={true} variant="text" size="lg">
            ラベル
          </Button>
        </div>
        <div className={cx(buttons, css({ mt: 4 }))}>
          <Button aria-disabled={true} variant="solid-fill" size="md">
            ラベル
          </Button>
          <Button aria-disabled={true} variant="outline" size="md">
            ラベル
          </Button>
          <Button aria-disabled={true} variant="text" size="md">
            ラベル
          </Button>
        </div>
        <div className={cx(buttons, css({ mt: 4 }))}>
          <Button aria-disabled={true} variant="solid-fill" size="sm">
            ラベル
          </Button>
          <Button aria-disabled={true} variant="outline" size="sm">
            ラベル
          </Button>
          <Button aria-disabled={true} variant="text" size="sm">
            ラベル
          </Button>
        </div>
        <div className={cx(buttons, css({ mt: 4 }))}>
          <Button aria-disabled={true} variant="solid-fill" size="xs">
            ラベル
          </Button>
          <Button aria-disabled={true} variant="outline" size="xs">
            ラベル
          </Button>
          <Button aria-disabled={true} variant="text" size="xs">
            ラベル
          </Button>
        </div>
      </div>
    );
  },
};

export const LinkButtons = {
  render: () => {
    const href = location.href;
    return (
      <Flex gap={8} direction="column">
        <div>
          <h2 className={headingStyle}>
            ボタンの見た目をしたリンク（Solid Fill）
          </h2>
          <div className={buttons}>
            <Button asChild variant="solid-fill" size="lg">
              <a href={href}>ラベル</a>
            </Button>
          </div>
        </div>
        <div>
          <h2 className={headingStyle}>
            ボタンの見た目をしたリンク（Outline）
          </h2>
          <div className={buttons}>
            <Button asChild variant="outline" size="lg">
              <a href={href}>ラベル</a>
            </Button>
          </div>
        </div>
        <div>
          <h2 className={headingStyle}>ボタンの見た目をしたリンク（Text）</h2>
          <div className={buttons}>
            <Button asChild variant="text" size="lg">
              <a href={href}>ラベル</a>
            </Button>
          </div>
        </div>
      </Flex>
    );
  },
};

export const SolidFillLG: Story = {
  args: {
    variant: "solid-fill",
    size: "lg",
  },
};

export const SolidFillMD: Story = {
  args: {
    variant: "solid-fill",
    size: "md",
  },
};

export const SolidFillSM: Story = {
  args: {
    variant: "solid-fill",
    size: "sm",
  },
};

export const SolidFillXS: Story = {
  args: {
    variant: "solid-fill",
    size: "xs",
  },
};

export const OutlineLG: Story = {
  args: {
    variant: "outline",
    size: "lg",
  },
};

export const OutlineMD: Story = {
  args: {
    variant: "outline",
    size: "md",
  },
};

export const OutlineSM: Story = {
  args: {
    variant: "outline",
    size: "sm",
  },
};

export const OutlineXS: Story = {
  args: {
    variant: "outline",
    size: "xs",
  },
};

export const TextLG: Story = {
  args: {
    variant: "text",
    size: "lg",
  },
};

export const TextMD: Story = {
  args: {
    variant: "text",
    size: "md",
  },
};

export const TextSM: Story = {
  args: {
    variant: "text",
    size: "sm",
  },
};

export const TextXS: Story = {
  args: {
    variant: "text",
    size: "xs",
  },
};

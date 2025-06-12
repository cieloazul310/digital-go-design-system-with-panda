/**
 * https://github.com/digital-go-jp/design-system-example-components/blob/main/src/components/Button/Button.stories.tsx
 */
import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { ark } from "@ark-ui/react/factory";
import { Button } from "@cieloazul310/digital-go-pandacss/button";
import { cx, css } from "@import-map-package/styled-system/css";
import { styled, Flex } from "@import-map-package/styled-system/jsx";
import { link } from "@import-map-package/styled-system/recipes";
import { hstack } from "@import-map-package/styled-system/patterns";

const headingStyle = css({ textStyle: "std-32B-150", mb: 6 });
const buttons = hstack({ gap: 4, alignItems: "end" });
const Link = styled(ark.a, link);

const meta: Meta<typeof Button> = {
  title: "Components/ボタン",
  component: Button,
  argTypes: {
    variant: {
      options: ["solid-fill", "outline", "text"],
      control: { type: "radio" },
      description:
        "ボタンのスタイルを、塗りボタン（`solid-fill`）、アウトラインボタン（`outline`）、テキストボタン（`text`）の3種類から選択します。",
      table: {
        type: { summary: "'solid-fill' | 'outline' | 'text'" },
      },
    },
    size: {
      options: ["lg", "md", "sm", "xs"],
      control: { type: "radio" },
      description: "ボタンのサイズを以下から選択します。",
      table: {
        type: { summary: "'lg' | 'md' | 'sm' | 'xs'" },
      },
    },
    disabled: {
      control: { type: "boolean" },
      table: {
        defaultValue: { summary: "false" },
        type: { summary: "boolean" },
      },
    },
    "aria-disabled": {
      description:
        "無効化する必要がある場合は `disabled` 属性ではなく `aria-disabled` 属性を使用します。",
      control: { type: "boolean" },
      table: {
        defaultValue: { summary: "false" },
        type: { summary: "boolean" },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Playground: Story = {
  args: {
    variant: "solid-fill",
    size: "lg",
    children: "ボタン",
    onClick: fn(),
    disabled: false,
    "aria-disabled": false,
  },
};

export const AllButtons = {
  render: () => {
    return (
      <Flex gap={8} direction="column">
        <div>
          <h2 className={headingStyle}>塗りボタン（Solid Fill）</h2>
          <div className={buttons}>
            <Button variant="solid-fill" size="lg">
              ラベル
            </Button>
            <Button variant="solid-fill" size="md">
              ラベル
            </Button>
            <Button variant="solid-fill" size="sm">
              ラベル
            </Button>
            <Button variant="solid-fill" size="xs">
              ラベル
            </Button>
          </div>
        </div>
        <div>
          <h2 className={headingStyle}>アウトラインボタン（Outline）</h2>
          <div className={buttons}>
            <Button variant="outline" size="lg">
              ラベル
            </Button>
            <Button variant="outline" size="md">
              ラベル
            </Button>
            <Button variant="outline" size="sm">
              ラベル
            </Button>
            <Button variant="outline" size="xs">
              ラベル
            </Button>
          </div>
        </div>
        <div>
          <h2 className={headingStyle}>テキストボタン（Text）</h2>
          <div className={buttons}>
            <Button variant="text" size="lg">
              ラベル
            </Button>
            <Button variant="text" size="md">
              ラベル
            </Button>
            <Button variant="text" size="sm">
              ラベル
            </Button>
            <Button variant="text" size="xs">
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
        <styled.p color="error.2">
          Panda CSSでは <code>aria-disabled</code> 属性と <code>_disabled</code>{" "}
          に互換性はない。
        </styled.p>
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
    children: "ボタン",
    onClick: fn(),
    disabled: false,
    "aria-disabled": false,
  },
};

export const SolidFillMD: Story = {
  args: {
    variant: "solid-fill",
    size: "md",
    children: "ボタン",
    onClick: fn(),
    disabled: false,
    "aria-disabled": false,
  },
};

export const SolidFillSM: Story = {
  args: {
    variant: "solid-fill",
    size: "sm",
    children: "ボタン",
    onClick: fn(),
    disabled: false,
    "aria-disabled": false,
  },
};

export const SolidFillXS: Story = {
  args: {
    variant: "solid-fill",
    size: "xs",
    children: "ボタン",
    onClick: fn(),
    disabled: false,
    "aria-disabled": false,
  },
};

export const OutlineLG: Story = {
  args: {
    variant: "outline",
    size: "lg",
    children: "ボタン",
    onClick: fn(),
    disabled: false,
    "aria-disabled": false,
  },
};

export const OutlineMD: Story = {
  args: {
    variant: "outline",
    size: "md",
    children: "ボタン",
    onClick: fn(),
    disabled: false,
    "aria-disabled": false,
  },
};

export const OutlineSM: Story = {
  args: {
    variant: "outline",
    size: "sm",
    children: "ボタン",
    onClick: fn(),
    disabled: false,
    "aria-disabled": false,
  },
};

export const OutlineXS: Story = {
  args: {
    variant: "outline",
    size: "xs",
    children: "ボタン",
    onClick: fn(),
    disabled: false,
    "aria-disabled": false,
  },
};

export const TextLG: Story = {
  args: {
    variant: "text",
    size: "lg",
    children: "ボタン",
    onClick: fn(),
    disabled: false,
    "aria-disabled": false,
  },
};

export const TextMD: Story = {
  args: {
    variant: "text",
    size: "md",
    children: "ボタン",
    onClick: fn(),
    disabled: false,
    "aria-disabled": false,
  },
};

export const TextSM: Story = {
  args: {
    variant: "text",
    size: "sm",
    children: "ボタン",
    onClick: fn(),
    disabled: false,
    "aria-disabled": false,
  },
};

export const TextXS: Story = {
  args: {
    variant: "text",
    size: "xs",
    children: "ボタン",
    onClick: fn(),
    disabled: false,
    "aria-disabled": false,
  },
};

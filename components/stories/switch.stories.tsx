import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { css } from "styled-system/css";
import { Switch } from "../src/switch";

const meta = {
  title: "Components/スイッチ",
  tags: ["autodocs"],
  component: Switch.Root,
  argTypes: {
    disabled: {
      description:
        "無効状態にする必要がある場合に指定します（disabled 状態自体が非推奨のため、通常は使用しません）。",
      control: { type: "boolean" },
      table: {
        defaultValue: { summary: "false" },
        type: { summary: "boolean" },
      },
    },
  },
  args: {
    disabled: false,
  },
} satisfies Meta<typeof Switch.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

const OnOffExample = ({
  disabled,
  withLabel = false,
}: {
  disabled?: boolean;
  withLabel?: boolean;
}) => {
  return (
    <Switch.Root disabled={disabled}>
      <Switch.Control>
        <Switch.Thumb>
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="m10.4 16.3-4.1-4.1 1.2-1.3 2.9 2.9 6-6.1 1.3 1.2z"
              fill="currentcolor"
            />
          </svg>
        </Switch.Thumb>
      </Switch.Control>
      <Switch.HiddenInput role="switch" />
      <Switch.Label className={withLabel ? undefined : css({ srOnly: true })}>
        {withLabel ? "やさしい日本語に変換する" : "設定を有効にする"}
      </Switch.Label>
    </Switch.Root>
  );
};

export const PlaygroundOnOff: Story = {
  name: "Playground (On/Off)",
  render: ({ disabled }) => <OnOffExample disabled={disabled} />,
};

export const WithLabelOnOff: Story = {
  name: "With Label (On/Off)",
  render: ({ disabled }) => <OnOffExample disabled={disabled} withLabel />,
};

type ModeStoryArgs = {
  leftLabel: string;
  rightLabel: string;
  disabled?: boolean;
};

const ModeExample = ({ leftLabel, rightLabel, disabled }: ModeStoryArgs) => {
  return (
    <Switch.Root variant="mode" disabled={disabled}>
      <span aria-hidden="true">{leftLabel}</span>
      <Switch.Control>
        <Switch.Thumb />
      </Switch.Control>
      <span aria-hidden="true">{rightLabel}</span>
      <Switch.HiddenInput role="switch" />
      <Switch.Label className={css({ srOnly: true })}>
        {leftLabel} / {rightLabel}
      </Switch.Label>
    </Switch.Root>
  );
};

export const PlaygroundMode: StoryObj<ModeStoryArgs> = {
  name: "Playground (Mode)",
  argTypes: {
    leftLabel: {
      description: "左側の選択肢のラベルです。",
      control: { type: "text" },
      table: { type: { summary: "string" } },
    },
    rightLabel: {
      description: "右側の選択肢のラベルです。",
      control: { type: "text" },
      table: { type: { summary: "string" } },
    },
    disabled: {
      description:
        "無効状態にする必要がある場合に指定します（disabled 状態自体が非推奨のため、通常は使用しません）。",
      control: { type: "boolean" },
      table: {
        defaultValue: { summary: "false" },
        type: { summary: "boolean" },
      },
    },
  },
  args: {
    leftLabel: "リスト表示",
    rightLabel: "カレンダー表示",
    disabled: false,
  },
  render: (args) => <ModeExample {...args} />,
};

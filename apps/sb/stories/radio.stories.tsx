import type { Meta, StoryObj } from "@storybook/react-vite";
import * as RadioGroup from "@cieloazul310/digital-go-pandacss/radio";

const meta = {
  title: "Components/ラジオボタン",
  component: RadioGroup.Root,
  tags: ["autodocs"],
  argTypes: {
    size: {
      type: "string",
      description: "チェックボックスのサイズを以下から選択します。",
      control: { type: "radio" },
      options: ["sm", "md", "lg"],
      table: {
        defaultValue: { summary: "sm" },
        type: { summary: "'sm' | 'md' | 'lg'" },
      },
    },
    orientation: {
      type: "string",
      control: { type: "radio" },
      options: ["vertical", "horizonal"],
      table: {
        defaultValue: { summary: "vertical" },
        type: { summary: "'vertical' | 'horizonal'" },
      },
    },
    disabled: {
      description:
        "無効化する必要がある場合は `disabled` 属性ではなく `aria-disabled` 属性を使用します。",
      control: { type: "boolean" },
      table: {
        defaultValue: { summary: "false" },
        type: { summary: "boolean" },
      },
    },
  },
} satisfies Meta<typeof RadioGroup.Root>;

export default meta;
type Story = StoryObj<typeof RadioGroup.Root>;

export const Playground: Story = {
  args: {
    size: "sm",
    disabled: false,
    orientation: "vertical",
  },
  render: ({ ...props }) => (
    <RadioGroup.Root defaultValue="hoge" {...props}>
      <RadioGroup.Item value="hoge">
        <RadioGroup.ItemControl />
        <RadioGroup.ItemText>Hoge</RadioGroup.ItemText>
        <RadioGroup.ItemHiddenInput />
      </RadioGroup.Item>
      <RadioGroup.Item value="hige">
        <RadioGroup.ItemControl />
        <RadioGroup.ItemText>Hige</RadioGroup.ItemText>
        <RadioGroup.ItemHiddenInput />
      </RadioGroup.Item>
      <RadioGroup.Item value="huge">
        <RadioGroup.ItemControl />
        <RadioGroup.ItemText>Huge</RadioGroup.ItemText>
        <RadioGroup.ItemHiddenInput />
      </RadioGroup.Item>
    </RadioGroup.Root>
  ),
};

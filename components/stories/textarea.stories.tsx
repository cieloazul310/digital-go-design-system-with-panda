import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import * as InputText from "../src/input-text";

const meta = {
  title: "Components/テキストエリア",
  tags: ["autodocs"],
  component: InputText.Root,
  argTypes: {
    invalid: {
      description: "エラー状態であるかどうかを指定します。",
      control: { type: "boolean" },
      table: {
        defaultValue: { summary: "false" },
        type: { summary: "boolean" },
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
} satisfies Meta<typeof InputText.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Plain: Story = {
  args: {
    invalid: false,
    disabled: false,
  },
};

export const WithLabel: Story = {
  render: ({ ...props }) => (
    <InputText.Root {...props}>
      <InputText.Label>ラベル</InputText.Label>
      <InputText.HelperText>
        番組へのご意見・ご感想をご記入ください。
      </InputText.HelperText>
      <InputText.Textarea />
      <InputText.ErrorText>140字以内で記入</InputText.ErrorText>
    </InputText.Root>
  ),
  args: {
    invalid: false,
    disabled: false,
  },
};

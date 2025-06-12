import type { Meta, StoryObj } from "@storybook/react-vite";
import { Textarea } from "@cieloazul310/digital-go-pandacss/textarea";
import * as InputText from "@cieloazul310/digital-go-pandacss/input-text";

const meta = {
  title: "Components/テキストエリア",
  component: Textarea,
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
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof Textarea>;

export const Plain: Story = {
  args: {
    invalid: false,
    disabled: false,
    "aria-disabled": false,
  },
};

export const WithLabel: Story = {
  render: ({ invalid, disabled, ...props }) => (
    <InputText.Root
      invalid={invalid}
      disabled={disabled}
      aria-disabled={props["aria-disabled"]}
    >
      <InputText.Label>ラベル</InputText.Label>
      <InputText.HelperText>
        番組へのご意見・ご感想をご記入ください。
      </InputText.HelperText>
      <InputText.Textarea {...props} />
      <InputText.ErrorText>140字以内で記入</InputText.ErrorText>
    </InputText.Root>
  ),
  args: {
    invalid: false,
    disabled: false,
    "aria-disabled": false,
  },
};

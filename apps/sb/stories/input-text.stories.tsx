import type { Meta, StoryObj } from "@storybook/react";
import * as InputText from "@cieloazul310/digital-go-pandacss/input-text";

const meta: Meta<typeof InputText.Root> = {
  title: "Components/InputText",
  argTypes: {
    size: {
      control: "inline-radio",
      options: ["sm", "md", "lg"],
    },
    disabled: { control: "boolean" },
    invalid: { control: "boolean" },
    readOnly: { control: "boolean" },
    required: { control: "boolean" },
  },
  args: {
    size: "lg",
    disabled: false,
    invalid: false,
    readOnly: false,
    required: false,
  },
  render: ({ ...props }) => {
    return (
      <InputText.Root {...props}>
        <InputText.Label>ラベル</InputText.Label>
        <InputText.HelperText>サポートテキスト</InputText.HelperText>
        <InputText.Input placeholder="Placeholder" />
        <InputText.ErrorText>※エラーテキストが入ります</InputText.ErrorText>
      </InputText.Root>
    );
  },
};

export default meta;
type Story = StoryObj;

export const basic: Story = {};

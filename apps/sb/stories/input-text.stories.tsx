import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import * as InputText from "@cieloazul310/digital-go-pandacss/input-text";
import { inputText } from "@import-map-package/styled-system/recipes";

const meta: Meta<typeof InputText.Root> = {
  title: "Components/InputText",
  argTypes: {
    size: {
      control: "inline-radio",
      options: inputText.variantMap.size,
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
    onChange: fn(),
  },
};

export default meta;
type Story = StoryObj;

export const input: Story = {
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

export const invalid: Story = {
  args: {
    invalid: true,
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

export const textarea: Story = {
  render: ({ ...props }) => {
    return (
      <InputText.Root {...props}>
        <InputText.Label>ラベル</InputText.Label>
        <InputText.HelperText>サポートテキスト</InputText.HelperText>
        <InputText.Textarea rows={6} />
        <InputText.ErrorText>※エラーテキストが入ります</InputText.ErrorText>
      </InputText.Root>
    );
  },
};

export const select: Story = {
  render: ({ ...props }) => {
    return (
      <InputText.Root {...props}>
        <InputText.Label>ラベル</InputText.Label>
        <InputText.HelperText>サポートテキスト</InputText.HelperText>
        <InputText.Select asChild>
          <select>
            <option value="one">オプション1</option>
            <option value="two">オプション2</option>
            <option value="three">オプション3</option>
          </select>
        </InputText.Select>
        <InputText.ErrorText>※エラーテキストが入ります</InputText.ErrorText>
      </InputText.Root>
    );
  },
};

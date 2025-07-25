import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { fn } from "storybook/test";
import * as InputText from "../src/input-text";
import { inputText } from "styled-system/recipes";

const meta = {
  title: "Components/インプットテキスト",
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "inline-radio",
      options: inputText.variantMap.size,
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
} satisfies Meta<typeof InputText.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Input: Story = {
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

export const Invalid: Story = {
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

export const Textarea: Story = {
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

export const Select: Story = {
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

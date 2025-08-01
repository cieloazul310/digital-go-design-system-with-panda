import type { Meta, StoryObj } from "@storybook/nextjs-vite";
// import type { KeyboardEvent } from "react";
import { fn } from "storybook/test";
import * as Field from "../src/field";
import { field } from "styled-system/recipes";

const meta = {
  title: "Components/インプットテキスト",
  tags: ["autodocs"],
  component: Field.Root,
  argTypes: {
    size: {
      control: "inline-radio",
      options: field.variantMap.size,
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
} satisfies Meta<typeof Field.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const InputText: Story = {
  args: {
    children: (
      <>
        <Field.Label>
          ラベル
          <Field.RequirementBadge>※必須</Field.RequirementBadge>
        </Field.Label>
        <Field.SupportText>サポートテキスト</Field.SupportText>
        <Field.Input placeholder="Placeholder" />
        <Field.ErrorText>※エラーテキストが入ります</Field.ErrorText>
      </>
    ),
  },
};

export const Invalid: Story = {
  args: {
    invalid: true,
    children: (
      <>
        <Field.Label>
          ラベル<Field.RequirementBadge>※必須</Field.RequirementBadge>
        </Field.Label>
        <Field.SupportText>サポートテキスト</Field.SupportText>
        <Field.Input placeholder="Placeholder" />
        <Field.ErrorText>※エラーテキストが入ります</Field.ErrorText>
      </>
    ),
  },
};

export const Textarea: Story = {
  args: {
    children: (
      <>
        <Field.Label>
          ラベル<Field.RequirementBadge>※必須</Field.RequirementBadge>
        </Field.Label>
        <Field.SupportText>サポートテキスト</Field.SupportText>
        <Field.Textarea rows={6} />
        <Field.ErrorText>※エラーテキストが入ります</Field.ErrorText>
      </>
    ),
  },
};

export const Select: Story = {
  args: {
    children: (
      <>
        <Field.Label>
          ラベル<Field.RequirementBadge>※必須</Field.RequirementBadge>
        </Field.Label>
        <Field.SupportText>サポートテキスト</Field.SupportText>
        <Field.Select asChild>
          <select>
            <option value="one">オプション1</option>
            <option value="two">オプション2</option>
            <option value="three">オプション3</option>
          </select>
        </Field.Select>
        <Field.ErrorText>※エラーテキストが入ります</Field.ErrorText>
      </>
    ),
  },
};

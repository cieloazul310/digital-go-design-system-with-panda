import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { useState } from "react";
import { fn } from "storybook/test";
import { useField } from "@ark-ui/react/field";
import { field } from "styled-system/recipes";
import * as Field from "../src/field";
import { Button } from "../src/button";
import {
  disabled,
  ariaDisabled,
  invalid,
  readOnly,
  required,
} from "./utils/arg-types";

const meta = {
  title: "Components/インプットテキスト",
  tags: ["autodocs"],
  component: Field.Root,
  argTypes: {
    size: {
      options: field.variantMap.size,
      control: "inline-radio",
    },
    disabled,
    "aria-disabled": ariaDisabled,
    invalid,
    readOnly,
    required,
  },
  args: {
    size: "lg",
    disabled: false,
    "aria-disabled": false,
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

export const WithProvider: Story = {
  render: ({ ...args }) => {
    const [invalid, setInvalid] = useState(false);
    const field = useField({ ...args, invalid });

    return (
      <>
        <Button onClick={() => setInvalid((prev) => !prev)} my={4}>
          Toggle invalid
        </Button>
        <Field.RootProvider value={field}>
          <Field.Label>
            ラベル<Field.RequirementBadge>※必須</Field.RequirementBadge>
          </Field.Label>
          <Field.SupportText>サポートテキスト</Field.SupportText>
          <Field.Input placeholder="Placeholder" />
          <Field.ErrorText>※エラーテキストが入ります</Field.ErrorText>
        </Field.RootProvider>
      </>
    );
  },
};

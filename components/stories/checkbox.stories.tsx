import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { checkbox } from "styled-system/recipes";
import { Checkbox, useCheckbox } from "../src/checkbox";
import { Field } from "../src/field";
import { colorPalette } from "./utils/color-palette";
import {
  invalid,
  disabled,
  ariaDisabled,
  readOnly,
  required,
} from "./utils/arg-types";

const meta = {
  title: "Components/チェックボックス/単体",
  tags: ["autodocs"],
  component: Checkbox.Root,
  argTypes: {
    size: {
      type: "string",
      description: "チェックボックスのサイズを以下から選択します。",
      control: { type: "radio" },
      options: checkbox.variantMap.size,
      table: {
        defaultValue: { summary: "sm" },
        type: { summary: "'sm' | 'md' | 'lg'" },
      },
    },
    invalid,
    disabled,
    "aria-disabled": ariaDisabled,
    readOnly,
    required,
    colorPalette,
  },
  args: {
    size: "sm",
    invalid: false,
    disabled: false,
    "aria-disabled": false,
    readOnly: false,
    required: false,
    colorPalette: "keyColor",
  },
} satisfies Meta<typeof Checkbox.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    children: (
      <>
        <Checkbox.Control>
          <Checkbox.Indicator />
        </Checkbox.Control>
        <Checkbox.HiddenInput />
        <Checkbox.Label>選択肢</Checkbox.Label>
      </>
    ),
  },
};

export const Standalone: Story = {
  args: {
    "aria-label": "名前を指定してください",
    children: (
      <>
        <Checkbox.Control>
          <Checkbox.Indicator />
        </Checkbox.Control>
        <Checkbox.HiddenInput />
      </>
    ),
  },
};

export const WithField: Story = {
  render: ({ ...args }) => {
    const { invalid, disabled, readOnly, required, ...props } = args;
    const fieldProps = { invalid, disabled, readOnly, required };

    return (
      <Field.Root {...fieldProps}>
        <Field.Label>
          ラベル
          <Field.RequirementBadge>※必須</Field.RequirementBadge>
        </Field.Label>
        <Field.SupportText>サポートテキスト</Field.SupportText>
        <Checkbox.Root {...props}>
          <Checkbox.Control>
            <Checkbox.Indicator />
          </Checkbox.Control>
          <Checkbox.HiddenInput />
          <Checkbox.Label>選択肢</Checkbox.Label>
        </Checkbox.Root>
        <Field.ErrorText>エラーテキスト</Field.ErrorText>
      </Field.Root>
    );
  },
};

export const WithContext: Story = {
  args: {
    children: (
      <>
        <Checkbox.Control>
          <Checkbox.Indicator />
        </Checkbox.Control>
        <Checkbox.Context>
          {(checkbox) => (
            <Checkbox.Label>
              Checkbox {checkbox.checked.toString()}
            </Checkbox.Label>
          )}
        </Checkbox.Context>
        <Checkbox.HiddenInput />
      </>
    ),
  },
};

export const WithProvider: Story = {
  render: ({ ...args }) => {
    const checkbox = useCheckbox({ ...args });

    return (
      <>
        <span>{checkbox.checked ? "Checked" : "UnChecked"}</span>
        <Checkbox.RootProvider value={checkbox}>
          <Checkbox.Control>
            <Checkbox.Indicator />
          </Checkbox.Control>
          <Checkbox.Label>Checkbox</Checkbox.Label>
          <Checkbox.HiddenInput />
        </Checkbox.RootProvider>
      </>
    );
  },
};

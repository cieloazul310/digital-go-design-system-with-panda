import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import * as Checkbox from "../src/checkbox";
import * as Field from "../src/field";

const meta = {
  title: "Components/チェックボックス/単体",
  tags: ["autodocs"],
  component: Checkbox.Root,
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
    "aria-disabled": {
      description:
        "無効化する必要がある場合は `disabled` 属性ではなく `aria-disabled` 属性を使用します。",
      control: { type: "boolean" },
      table: {
        defaultValue: { summary: "false" },
        type: { summary: "boolean" },
      },
    },
    readOnly: {
      control: { type: "boolean" },
      table: {
        defaultValue: { summary: "false" },
        type: { summary: "boolean" },
      },
    },
    required: {
      control: { type: "boolean" },
      table: {
        defaultValue: { summary: "false" },
        type: { summary: "boolean" },
      },
    },
    colorPalette: {
      options: [
        "keyColor",
        "blue",
        "light-blue",
        "cyan",
        "green",
        "lime",
        "yellow",
        "orange",
        "red",
        "magenta",
        "purple",
      ],
      control: { type: "radio" },
      table: {
        defaultValue: { summary: "keyColor" },
        type: {
          summary:
            "'keyColor' | 'blue' | 'light-blue' | 'cyan' | 'green' | 'lime' | 'yellow' | 'orange' | 'red' | 'magenta' | 'purple'",
        },
      },
    },
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

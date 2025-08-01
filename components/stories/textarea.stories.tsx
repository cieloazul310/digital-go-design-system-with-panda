import type { Meta, StoryObj } from "@storybook/nextjs-vite";
// import * as InputText from "../src/input-text";
import { css } from "styled-system/css";
import * as Field from "../src/field";
import { Textarea } from "../src/textarea";

const meta = {
  title: "Components/テキストエリア",
  tags: ["autodocs"],
  component: Textarea,
  argTypes: {
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
  args: {
    disabled: false,
    "aria-disabled": false,
  },
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Plain: Story = {
  args: {
    name: "plain-textarea",
    disabled: false,
    placeholder: "",
    rows: 6,
    ...css.raw({
      width: "320px",
    }),
  },
};

export const WithField: Story = {
  args: {
    placeholder:
      "Ark UIのFieldコンポーネントを使用するとラベルやサポートテキストとテキストエリアがidによって自動的に関連付けられる",
  },
  render: ({ ...args }) => (
    <Field.Root>
      <Field.Label>ラベル</Field.Label>
      <Field.SupportText>サポートテキスト</Field.SupportText>
      <Field.Textarea {...args} />
      <Field.ErrorText>エラーテキスト</Field.ErrorText>
    </Field.Root>
  ),
};

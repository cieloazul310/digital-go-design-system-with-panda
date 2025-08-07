import type { Meta, StoryObj } from "@storybook/nextjs-vite";
// import * as InputText from "../src/input-text";
import { css } from "styled-system/css";
import * as Field from "../src/field";
import { Textarea } from "../src/textarea";
import { disabled, ariaDisabled, readOnly, required } from "./utils/arg-types";

const meta = {
  title: "Components/テキストエリア",
  tags: ["autodocs"],
  component: Textarea,
  argTypes: {
    disabled,
    "aria-disabled": ariaDisabled,
    readOnly,
    required,
  },
  args: {
    disabled: false,
    "aria-disabled": false,
    readOnly: false,
    required: false,
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

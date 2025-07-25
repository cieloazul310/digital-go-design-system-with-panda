import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Input } from "../src/form/input";

const meta = {
  title: "Components/フォーム",
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "inline-radio",
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
    invalid: {
      control: "boolean",
    },
  },
  args: {
    disabled: false,
    invalid: false,
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const InputText: Story = {
  args: {
    size: "lg",
  },
  render: () => <Input />,
};

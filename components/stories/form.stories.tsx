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
      control: "boolean",
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

import type { Meta, StoryObj } from "@storybook/react-vite";
import { Input } from "@cieloazul310/digital-go-pandacss/form/input";

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

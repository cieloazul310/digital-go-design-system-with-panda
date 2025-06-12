import type { Meta, StoryObj } from "@storybook/react-vite";
import { Input } from "@cieloazul310/digital-go-pandacss/input";
import { input } from "@import-map-package/styled-system/recipes";

const meta = {
  title: "Components/インプット",
  component: Input,
  argTypes: {
    size: {
      control: "inline-radio",
      options: input.variantMap.size,
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
type Story = StoryObj<typeof Input>;

export const Primary: Story = {
  args: {
    size: "lg",
  },
};

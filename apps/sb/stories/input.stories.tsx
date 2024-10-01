import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "@cieloazul310/digital-go-pandacss/input";
import { input } from "@import-map-package/styled-system/recipes";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  argTypes: {
    size: {
      control: "inline-radio",
      options: input.variantMap.size,
    },
    disabled: {
      control: "boolean",
    },
    error: {
      control: "boolean",
    },
  },
  args: {
    disabled: false,
    error: false,
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Primary: Story = {
  args: {
    size: "lg",
  },
};

import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@cieloazul310/digital-go-pandacss/button";
import { button } from "@import-map-package/styled-system/recipes";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  argTypes: {
    variant: {
      control: "inline-radio",
      options: button.variantMap.variant,
    },
    size: {
      control: "inline-radio",
      options: button.variantMap.size,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: "Primary",
  },
};

export const Outline: Story = {
  args: {
    children: "Outline",
    ...button.raw({
      variant: "outline",
    }),
  },
};

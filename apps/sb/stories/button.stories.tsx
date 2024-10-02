import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Button } from "@cieloazul310/digital-go-pandacss/button";
import { css } from "@import-map-package/styled-system/css";
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
  args: {
    disabled: false,
    variant: "solid-fill",
    size: "md",
    onClick: fn(),
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

export const WithAsChild: Story = {
  args: {
    children: (
      <a href="https://cieloazul310.github.io" target="_blank">
        水戸地図
      </a>
    ),
    asChild: true,
  },
};

export const FullWidth: Story = {
  args: {
    children: "Full Width",
    ...css.raw({
      width: "full",
    }),
  },
};

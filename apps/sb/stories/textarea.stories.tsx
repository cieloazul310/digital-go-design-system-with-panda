import type { Meta, StoryObj } from "@storybook/react";
import { Textarea } from "@cieloazul310/digital-go-pandacss/textarea";
// import { textarea } from "@import-map-package/styled-system/recipes";

const meta: Meta<typeof Textarea> = {
  title: "Components/Textarea",
  component: Textarea,
  argTypes: {
    disabled: {
      control: "boolean",
    },
    invalid: {
      control: "boolean",
    },
    rows: {
      control: { type: "number", min: 2, max: 8, step: 1 },
    },
  },
  args: {
    disabled: false,
    invalid: false,
    rows: 4,
  },
};

export default meta;
type Story = StoryObj<typeof Textarea>;

export const Primary: Story = {
  args: {},
};

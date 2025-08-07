import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { input } from "styled-system/recipes";
import { Input } from "../src/form/input";
import { disabled, ariaDisabled, readOnly, required } from "./utils/arg-types";

const meta = {
  title: "Components/フォーム",
  tags: ["autodocs"],
  component: Input,
  argTypes: {
    size: {
      options: input.variantMap.size,
      control: { type: "inline-radio" },
      table: {
        defaultValue: { summary: "lg" },
        type: { summary: `${input.variantMap.size.join(" | ")}` },
      },
    },
    disabled,
    "aria-disabled": ariaDisabled,
    readOnly,
    required,
  },
  args: {
    size: "lg",
    disabled: false,
    "aria-disabled": false,
    readOnly: false,
    required: false,
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const InputText: Story = {
  args: {
    size: "lg",
  },
};

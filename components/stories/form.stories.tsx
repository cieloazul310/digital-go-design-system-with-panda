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
    type: {
      options: [
        "text",
        "password",
        "email",
        "number",
        "tel",
        "url",
        "search",
        "date",
        "datetime-local",
        "time",
      ],
      control: { type: "select" },
    },
  },
  args: {
    size: "lg",
    disabled: false,
    "aria-disabled": false,
    readOnly: false,
    required: false,
    type: "text",
    name: "input",
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const InputText: Story = {
  args: {
    size: "lg",
  },
};

export const Password: Story = {
  args: {
    size: "md",
    type: "password",
  },
};

export const Hoge: Story = {
  args: {
    size: "md",
  },
};

import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { stepNavigation } from "styled-system/recipes";
import { StepNavigation } from "../src/step-navigation";
import { colorPalette } from "./utils/color-palette";

const meta = {
  title: "Components/ステップナビゲーション",
  tags: ["autodocs"],
  component: StepNavigation.Root,
  argTypes: {
    size: {
      type: "string",
      control: { type: "radio" },
      options: stepNavigation.variantMap.size,
    },
    orientation: {
      type: "string",
      control: { type: "radio" },
      options: ["vertical", "horizontal"],
      table: {
        defaultValue: { summary: "vertical" },
        type: { summary: "'vertical' | 'horizontal'" },
      },
    },
    colorPalette,
  },
  args: {
    size: "md",
    orientation: "horizontal",
    colorPalette: "keyColor",
  },
} satisfies Meta<typeof StepNavigation.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

const items = [
  {
    value: "first",
    title: "ステップのタイトル",
    description: "ステップの説明が入ります。",
  },
  {
    value: "second",
    title: "ステップのタイトル",
    description: "ステップの説明が入ります。",
  },
  {
    value: "third",
    title: "ステップのタイトル",
    description: "ステップの説明が入ります。",
  },
];

export const Basic: Story = {
  args: {
    count: items.length,
    children: (
      <>
        <StepNavigation.List>
          {items.map((item, index) => (
            <StepNavigation.Item key={index} index={index}>
              <StepNavigation.Trigger>
                <StepNavigation.Indicator>{index + 1}</StepNavigation.Indicator>
                <StepNavigation.Title>{item.title}</StepNavigation.Title>
              </StepNavigation.Trigger>
              <StepNavigation.Description>
                {item.description}
              </StepNavigation.Description>
              <StepNavigation.Separator />
            </StepNavigation.Item>
          ))}
        </StepNavigation.List>
      </>
    ),
  },
};

export const Vertical: Story = {
  args: {
    count: items.length,
    orientation: "vertical",
    children: (
      <>
        <StepNavigation.List>
          {items.map((item, index) => (
            <StepNavigation.Item key={index} index={index}>
              <StepNavigation.Trigger>
                <StepNavigation.Indicator>{index + 1}</StepNavigation.Indicator>
                <StepNavigation.Title>{item.title}</StepNavigation.Title>
              </StepNavigation.Trigger>
              <StepNavigation.Description>
                {item.description}
              </StepNavigation.Description>
              <StepNavigation.Separator />
            </StepNavigation.Item>
          ))}
        </StepNavigation.List>
      </>
    ),
  },
};

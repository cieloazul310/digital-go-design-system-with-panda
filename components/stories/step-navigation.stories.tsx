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
  { value: "first", title: "First", description: "Contact Info" },
  { value: "second", title: "Second", description: "Date & Time" },
  { value: "third", title: "Third", description: "Select Rooms" },
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
                <span>{item.title}</span>
              </StepNavigation.Trigger>
              <StepNavigation.Separator />
            </StepNavigation.Item>
          ))}
        </StepNavigation.List>
      </>
    ),
  },
};

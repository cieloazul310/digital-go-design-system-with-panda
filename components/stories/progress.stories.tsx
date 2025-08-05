import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { css } from "styled-system/css";
import { progress } from "styled-system/recipes";
import { Center } from "styled-system/jsx";
import * as Progress from "../src/progress";
import { colorPalette } from "./utils/color-palette";

const meta = {
  title: "Components/プログレスインジケーター",
  component: Progress.Root,
  argTypes: {
    layout: {
      control: { type: "radio" },
      options: progress.variantMap.layout,
      table: {
        defaultValue: { summary: "vertical" },
        type: { summary: `${progress.variantMap.layout.join(" | ")}` },
      },
    },
    colorPalette,
    value: {
      control: { type: "range", min: 0, max: 100 },
    },
  },
  args: {
    value: 40,
    layout: "vertical",
    colorPalette: "keyColor",
  },
} satisfies Meta<typeof Progress.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Circular: Story = {
  args: {
    children: (
      <>
        <Progress.Circle>
          <Progress.CircleTrack />
          <Progress.CircleRange />
        </Progress.Circle>
        <Progress.Label>ラベル</Progress.Label>
      </>
    ),
  },
};

export const Linear: Story = {
  args: {
    children: (
      <>
        <Progress.Track>
          <Progress.Range />
        </Progress.Track>
        <Progress.Label>ラベル</Progress.Label>
      </>
    ),
  },
};

export const WithUnderlayCircular: Story = {
  args: {
    ...css.raw({
      width: "128px",
      height: "128px",
      rounded: 12,
      bg: "white",
      justifyContent: "center",
    }),
    children: (
      <>
        <Progress.Circle>
          <Progress.CircleTrack />
          <Progress.CircleRange />
        </Progress.Circle>
        <Progress.Label>ラベル</Progress.Label>
      </>
    ),
  },
  decorators: [
    (Story) => (
      <Center width="full" height="100vh" bg="solid-gray.50">
        <Story />
      </Center>
    ),
  ],
  parameters: {
    layout: "fullscreen",
  },
};

export const WithUnderlayLinear: Story = {
  args: {
    ...css.raw({
      p: 12,
      rounded: 12,
      bg: "white",
      justifyContent: "center",
    }),
    children: (
      <>
        <Progress.Track>
          <Progress.Range />
        </Progress.Track>
        <Progress.Label>ラベル</Progress.Label>
      </>
    ),
  },
  decorators: [
    (Story) => (
      <Center width="full" height="100vh" bg="solid-gray.50">
        <Story />
      </Center>
    ),
  ],
  parameters: {
    layout: "fullscreen",
  },
};

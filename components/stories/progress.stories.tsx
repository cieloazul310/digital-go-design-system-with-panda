import type { Meta, StoryObj, ArgTypes } from "@storybook/nextjs-vite";
import { useState, useEffect } from "react";
import { css } from "styled-system/css";
import { progress } from "styled-system/recipes";
import { Center } from "styled-system/jsx";
import { Progress } from "../src/progress";
import { colorPalette } from "./utils/color-palette";

const meta = {
  title: "Components/プログレスインジケーター",
  component: Progress.Root,
  tags: ["autodocs"],
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
  },
  args: {
    layout: "vertical",
    colorPalette: "keyColor",
  },
} satisfies Meta<typeof Progress.Root>;

const valueArgTypes = {
  value: {
    control: { type: "range", min: 0, max: 100 },
  },
} satisfies ArgTypes[string];

export default meta;
type Story = StoryObj<typeof meta>;

export const Circular: Story = {
  argTypes: {
    value: valueArgTypes,
  },
  args: {
    value: 40,
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
  argTypes: {
    value: valueArgTypes,
  },
  args: {
    value: 40,
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

export const IndetermiatedCircular: Story = {
  args: {
    value: null,
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

export const IndeterminatedLinear: Story = {
  argTypes: {
    value: valueArgTypes,
  },
  args: {
    value: null,
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
  argTypes: {
    value: valueArgTypes,
  },
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
  argTypes: {
    value: valueArgTypes,
  },
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

export const WithStateCircular: Story = {
  render: ({ ...args }) => {
    const [value, setValue] = useState(0);
    useEffect(() => {
      const interval = setInterval(() => {
        setValue((value) => (value === 100 ? 0 : value + 1));
      }, Math.random() * 100);

      return () => clearInterval(interval);
    });

    return (
      <Progress.Root {...args} value={value}>
        <Progress.Circle>
          <Progress.CircleTrack />
          <Progress.CircleRange />
        </Progress.Circle>
        <Progress.Label>Loading</Progress.Label>
      </Progress.Root>
    );
  },
};

export const WithStateLineaer: Story = {
  render: ({ ...args }) => {
    const [value, setValue] = useState(0);
    useEffect(() => {
      const interval = setInterval(() => {
        setValue((value) => (value === 100 ? 0 : value + 1));
      }, Math.random() * 100);

      return () => clearInterval(interval);
    });

    return (
      <Progress.Root {...args} value={value}>
        <Progress.Track>
          <Progress.Range />
        </Progress.Track>
        <Progress.Label>Loading</Progress.Label>
      </Progress.Root>
    );
  },
};

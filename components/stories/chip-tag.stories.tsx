import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Database, CircleUserIcon } from "lucide-react";
import { css } from "styled-system/css";
import { ChipTag } from "../src/chip-tag";

const meta = {
  title: "Components/チップタグ",
  tags: ["autodocs"],
  component: ChipTag.Root,
} satisfies Meta<typeof ChipTag.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    children: (
      <>
        <ChipTag.Icon>
          <Database />
        </ChipTag.Icon>
        <ChipTag.Label>ラベル</ChipTag.Label>
        <ChipTag.RemoveButton />
      </>
    ),
  },
};

export const WithoutIcon: Story = {
  render: ({ ...args }) => (
    <div className={css({ display: "inline-flex", gap: 4, flexWrap: "wrap" })}>
      <ChipTag.Root {...args}>
        <ChipTag.Label>現行法令</ChipTag.Label>
        <ChipTag.RemoveButton />
      </ChipTag.Root>
      <ChipTag.Root {...args}>
        <ChipTag.Label>法令</ChipTag.Label>
        <ChipTag.RemoveButton />
      </ChipTag.Root>
      <ChipTag.Root {...args}>
        <ChipTag.Label>勅令</ChipTag.Label>
        <ChipTag.RemoveButton />
      </ChipTag.Root>
      <ChipTag.Root {...args}>
        <ChipTag.Label>関連度順</ChipTag.Label>
        <ChipTag.RemoveButton />
      </ChipTag.Root>
      <ChipTag.Root {...args}>
        <ChipTag.Label>長いラベル長いラベル長いラベル長いラベル</ChipTag.Label>
        <ChipTag.RemoveButton />
      </ChipTag.Root>
      <ChipTag.Root {...args}>
        <ChipTag.Label>10件</ChipTag.Label>
        <ChipTag.RemoveButton />
      </ChipTag.Root>
      <ChipTag.Root {...args}>
        <ChipTag.Label>長いラベル</ChipTag.Label>
        <ChipTag.RemoveButton />
      </ChipTag.Root>
    </div>
  ),
};

export const WithLargeIcon: Story = {
  render: ({ ...args }) => (
    <div className={css({ display: "inline-flex", gap: 4, flexWrap: "wrap" })}>
      <ChipTag.Root {...args}>
        <ChipTag.Icon>
          <CircleUserIcon size={44} />
        </ChipTag.Icon>
        <ChipTag.Label>現行法令</ChipTag.Label>
        <ChipTag.RemoveButton />
      </ChipTag.Root>
      <ChipTag.Root {...args}>
        <ChipTag.Icon>
          <CircleUserIcon size={44} />
        </ChipTag.Icon>
        <ChipTag.Label>法令</ChipTag.Label>
        <ChipTag.RemoveButton />
      </ChipTag.Root>
    </div>
  ),
};

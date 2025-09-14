import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { useState } from "react";
import { Database, CircleUserIcon } from "lucide-react";
import { css } from "styled-system/css";
import { ChipTag } from "../src/chip-tag";
import { Divider } from "../src/divider";
import { colorPalette } from "./utils/color-palette";

const meta = {
  title: "Components/チップタグ",
  tags: ["autodocs"],
  component: ChipTag.Root,
  argTypes: {
    colorPalette,
  },
  args: {
    colorPalette: "keyColor",
  },
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

export const WithAction: Story = {
  render: ({ ...args }) => {
    const items = [
      "現行法令",
      "法令",
      "勅令",
      "関連度順",
      "長いラベル長いラベル長いラベル長いラベル",
      "10件",
      "長いラベル",
    ];
    const [selected, setSelected] = useState<string[]>([]);
    const onItemClick = (item: string) => () => {
      setSelected([...selected, item]);
    };
    const onSelectedItemClick = (item: string) => () => {
      setSelected(selected.filter((val) => val !== item));
    };

    return (
      <div className={css({ display: "flex", flexDirection: "column" })}>
        <div
          className={css({
            display: "inline-flex",
            gap: 2,
            flexWrap: "wrap",
            py: 2,
          })}
        >
          {items
            .filter((val) => !selected.includes(val))
            .map((val) => (
              <ChipTag.Root
                key={val}
                {...args}
                colorPalette="solid-gray"
                onClick={onItemClick(val)}
              >
                <ChipTag.Label>{val}</ChipTag.Label>
                <ChipTag.AddButton />
              </ChipTag.Root>
            ))}
        </div>
        <Divider />
        <div
          className={css({
            display: "inline-flex",
            gap: 2,
            flexWrap: "wrap",
            py: 2,
          })}
        >
          {selected.map((val) => (
            <ChipTag.Root
              key={val}
              {...args}
              onClick={onSelectedItemClick(val)}
            >
              <ChipTag.Label>{val}</ChipTag.Label>
              <ChipTag.RemoveButton />
            </ChipTag.Root>
          ))}
        </div>
      </div>
    );
  },
};

import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import * as Drawer from "@cieloazul310/digital-go-pandacss/drawer";
import { Button } from "@cieloazul310/digital-go-pandacss/button";
import { XIcon } from "lucide-react";
import { css } from "@import-map-package/styled-system/css";

const meta = {
  title: "Components/ドロワー",
  component: Drawer.Root,
  args: {
    placement: "right",
  },
  argTypes: {
    placement: {
      options: ["left", "right"],
      control: { type: "radio" },
      table: {
        type: { summary: "'left' | 'right'" },
      },
    },
  },
} satisfies Meta<typeof Drawer.Root>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    placement: "right",
    children: (
      <>
        <Drawer.Trigger asChild>
          <Button>Open Drawer</Button>
        </Drawer.Trigger>
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content>
            <Drawer.Header>
              <Drawer.Title>ドロワー</Drawer.Title>
              <Drawer.CloseTrigger
                asChild
                position="absolute"
                top="3"
                right="4"
              >
                <XIcon />
              </Drawer.CloseTrigger>
            </Drawer.Header>
            <Drawer.Body>
              {Array.from({ length: 10 }).map((_, i) => (
                <p className={css({ my: 4 })} key={i.toString()}>
                  あなたは絶対けっしてその講義物というものの後へあれたでし。近頃一遍のお話者はもっともその話ですただけで出来てかねるでしょでも発展描けるないますから、ぴたりにもせよたでですう。
                </p>
              ))}
            </Drawer.Body>
          </Drawer.Content>
        </Drawer.Positioner>
      </>
    ),
  },
};

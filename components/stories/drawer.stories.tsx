import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { useState } from "react";
import { css } from "styled-system/css";
import { drawer } from "styled-system/recipes";
import { Drawer } from "../src/drawer";
import { Button } from "../src/button";
import {
  HamburgerMenuButton,
  CloseIcon,
  HamburgerIcon,
} from "../src/hamburger-menu-button";

const meta = {
  title: "Components/ドロワー",
  component: Drawer.Root,
  tags: ["autodocs"],
  argTypes: {
    placement: {
      options: drawer.variantMap.placement,
      control: { type: "radio" },
      table: {
        type: { summary: `${drawer.variantMap.placement.join(" | ")}` },
      },
    },
  },
  args: {
    placement: "right",
    defaultOpen: false,
    lazyMount: false,
    unmountOnExit: false,
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
          <HamburgerMenuButton>
            <HamburgerIcon />
            メニュー
          </HamburgerMenuButton>
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
                <HamburgerMenuButton>
                  <CloseIcon />
                  閉じる
                </HamburgerMenuButton>
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

export const HandleOutside: Story = {
  args: {
    placement: "right",
  },
  render: ({ defaultOpen = false, ...args }) => {
    const [open, setOpen] = useState(defaultOpen);
    const toggleDrawer = () => {
      setOpen(!open);
    };

    return (
      <>
        <Button onClick={toggleDrawer}>Toggle Drawer</Button>
        <Drawer.Root
          {...args}
          open={open}
          onOpenChange={(e) => setOpen(e.open)}
        >
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
                  <HamburgerMenuButton>
                    <CloseIcon />
                    閉じる
                  </HamburgerMenuButton>
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
        </Drawer.Root>
      </>
    );
  },
};

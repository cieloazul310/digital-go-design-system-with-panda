import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { useState } from "react";
import { css } from "styled-system/css";
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
    swipeDirection: {
      options: ["start", "end", "up", "down"],
      control: { type: "radio" },
      table: {
        type: { summary: `${["start", "end", "up", "down"].join(" | ")}` },
      },
    },
  },
  args: {
    swipeDirection: "end",
    defaultOpen: false,
    lazyMount: false,
    unmountOnExit: false,
  },
} satisfies Meta<typeof Drawer.Root>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    swipeDirection: "end",
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

export const Bottom: Story = {
  args: {
    swipeDirection: "down",
    snapPoints: [0.5, 0.75, 1],
    defaultSnapPoint: 0.75,
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
          <Drawer.Content className={css({ roundedTop: 16 })}>
            <Drawer.Grabber
              className={css({
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexShrink: 0,
                width: "full",
                paddingY: "20px",
                cursor: { base: "grab", _active: "grabbing" },
                touchAction: "none",
                userSelect: "none",
              })}
            >
              <Drawer.GrabberIndicator
                className={css({
                  width: "40px",
                  height: "4px",
                  bg: { base: "solid-gray.420", _hover: "solid-gray.536" },
                  borderRadius: "1000px",
                })}
              />
            </Drawer.Grabber>
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
    swipeDirection: "end",
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

import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { css } from "styled-system/css";
import { drawer } from "styled-system/recipes";
import * as Drawer from "../src/drawer";
import {
  HamburgerMenuButton,
  CloseIcon,
  HamburgerIcon,
} from "../src/hamburger-menu-button";

const meta = {
  title: "Components/ドロワー",
  component: Drawer.Root,
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

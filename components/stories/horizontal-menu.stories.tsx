import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import NextLink from "next/link";
import { HomeIcon } from "lucide-react";
import { css } from "styled-system/css";
import { hstack } from "styled-system/patterns";
import { HorizontalMenu } from "../src/horizontal-menu";
import { Menu } from "../src/menu";

const meta = {
  title: "Components/水平メニュー",
  component: HorizontalMenu,
  tags: ["autodocs"],
} satisfies Meta<typeof HorizontalMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: () => (
    <nav
      className={css({
        overflowX: "auto",
        borderColor: "solid-gray.420",
        borderBottomWidth: "1px",
      })}
    >
      <div className={hstack({ gap: 0, width: "max-content" })}>
        <HorizontalMenu aria-current="page" asChild>
          <NextLink href="/home">
            <HomeIcon />
            ホーム
          </NextLink>
        </HorizontalMenu>
        <HorizontalMenu asChild>
          <NextLink href="/life">くらし・手続き</NextLink>
        </HorizontalMenu>
        <HorizontalMenu asChild>
          <NextLink href="/education">子育て・教育</NextLink>
        </HorizontalMenu>
        <Menu.Root>
          <Menu.Trigger asChild>
            <HorizontalMenu>
              健康・医療・福祉
              <Menu.Indicator />
            </HorizontalMenu>
          </Menu.Trigger>
          <Menu.Positioner>
            <Menu.Content>
              <Menu.Item value="react" asChild>
                <NextLink href="/react">React</NextLink>
              </Menu.Item>
              <Menu.Item value="solid" asChild>
                <NextLink href="/solid">Solid</NextLink>
              </Menu.Item>
              <Menu.Item value="vue" asChild>
                <NextLink href="/vue">Vue</NextLink>
              </Menu.Item>
            </Menu.Content>
          </Menu.Positioner>
        </Menu.Root>
      </div>
    </nav>
  ),
};

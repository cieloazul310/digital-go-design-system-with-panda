import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import NextLink from "next/link";
import * as Tabs from "@cieloazul310/digital-go-pandacss/tabs";

const meta = {
  title: "Components/タブ",
  component: Tabs.Root,
  tags: ["autodocs"],
} satisfies Meta<typeof Tabs.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    defaultValue: "react",
    children: (
      <>
        <Tabs.List>
          <Tabs.Trigger value="react">React</Tabs.Trigger>
          <Tabs.Trigger value="vue">Vue</Tabs.Trigger>
          <Tabs.Trigger value="solid">Solid</Tabs.Trigger>
          <Tabs.Trigger value="svelte">Svelte</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="react">React Content</Tabs.Content>
        <Tabs.Content value="vue">Vue Content</Tabs.Content>
        <Tabs.Content value="solid">Solid Content</Tabs.Content>
        <Tabs.Content value="svelte">Svelte Content</Tabs.Content>
      </>
    ),
  },
};

export const WithRouter: Story = {
  args: {
    defaultValue: "/",
    children: (
      <Tabs.List>
        <Tabs.Trigger value="/" asChild>
          <NextLink href="/">概要</NextLink>
        </Tabs.Trigger>
        <Tabs.Trigger value="/usage" asChild>
          <NextLink href="/usage">使い方</NextLink>
        </Tabs.Trigger>
        <Tabs.Trigger value="/example" asChild>
          <NextLink href="/example">作例</NextLink>
        </Tabs.Trigger>
      </Tabs.List>
    ),
  },
};

import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import NextLink from "next/link";
import { tabs } from "styled-system/recipes";
import { styled } from "styled-system/jsx";
import { Tabs } from "../src/tabs";
import { UnorderedList, List } from "../src/list";
import { DescriptionList } from "../src/description-list";

const meta = {
  title: "Components/タブ",
  component: Tabs.Root,
  tags: ["autodocs"],
  argTypes: {
    placement: {
      control: "radio",
      options: tabs.variantMap.placement,
    },
  },
  args: {
    placement: "top",
  },
} satisfies Meta<typeof Tabs.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    defaultValue: "react",
    children: (
      <>
        <Tabs.List>
          <Tabs.Trigger value="react">タブラベル</Tabs.Trigger>
          <Tabs.Trigger value="vue">タブラベル</Tabs.Trigger>
          <Tabs.Trigger value="solid">タブラベル</Tabs.Trigger>
          <Tabs.Trigger value="svelte">タブラベル</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="react">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris.
          </p>
        </Tabs.Content>
        <Tabs.Content value="vue">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p>Ut enim ad minim veniam.</p>
        </Tabs.Content>
        <Tabs.Content value="solid">
          <UnorderedList>
            <List>リスト項目 あ</List>
            <List>リスト項目 い</List>
            <List>リスト項目 う</List>
            <List>リスト項目 え</List>
            <List>リスト項目 お</List>
            <List>リスト項目 か</List>
          </UnorderedList>
        </Tabs.Content>
        <Tabs.Content value="svelte">
          <styled.p mb={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </styled.p>
          <DescriptionList.Root>
            <DescriptionList.Item>
              <DescriptionList.Term>用語あ</DescriptionList.Term>
              <DescriptionList.Description>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </DescriptionList.Description>
            </DescriptionList.Item>
            <DescriptionList.Item>
              <DescriptionList.Term>用語い</DescriptionList.Term>
              <DescriptionList.Description>
                Sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua.
              </DescriptionList.Description>
            </DescriptionList.Item>
          </DescriptionList.Root>
        </Tabs.Content>
      </>
    ),
  },
};

export const Bottom: Story = {
  args: {
    defaultValue: "react",
    placement: "bottom",
    children: (
      <>
        <Tabs.Content value="react">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris.
          </p>
        </Tabs.Content>
        <Tabs.Content value="vue">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p>Ut enim ad minim veniam.</p>
        </Tabs.Content>
        <Tabs.Content value="solid">
          <UnorderedList>
            <List>リスト項目 あ</List>
            <List>リスト項目 い</List>
            <List>リスト項目 う</List>
            <List>リスト項目 え</List>
            <List>リスト項目 お</List>
            <List>リスト項目 か</List>
          </UnorderedList>
        </Tabs.Content>
        <Tabs.Content value="svelte">
          <styled.p mb={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </styled.p>
          <DescriptionList.Root>
            <DescriptionList.Item>
              <DescriptionList.Term>用語あ</DescriptionList.Term>
              <DescriptionList.Description>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </DescriptionList.Description>
            </DescriptionList.Item>
            <DescriptionList.Item>
              <DescriptionList.Term>用語い</DescriptionList.Term>
              <DescriptionList.Description>
                Sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua.
              </DescriptionList.Description>
            </DescriptionList.Item>
          </DescriptionList.Root>
        </Tabs.Content>
        <Tabs.List>
          <Tabs.Trigger value="react">タブラベル</Tabs.Trigger>
          <Tabs.Trigger value="vue">タブラベル</Tabs.Trigger>
          <Tabs.Trigger value="solid">タブラベル</Tabs.Trigger>
          <Tabs.Trigger value="svelte">タブラベル</Tabs.Trigger>
        </Tabs.List>
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

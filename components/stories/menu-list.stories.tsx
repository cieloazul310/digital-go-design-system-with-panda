import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { createListCollection } from "@ark-ui/react/listbox";
import NextLink from "next/link";
import { css } from "styled-system/css";
import * as MenuList from "../src/menu-list";

const meta = {
  title: "Components/メニューリスト",
  component: MenuList.Root,
  args: {
    variant: "standard",
    isCondensed: false,
  },
  argTypes: {
    variant: {
      options: ["standard", "boxed"],
      control: { type: "radio" },
      description: "スタイルを選択します。",
      table: {
        type: { summary: "'standard' | 'boxed'" },
      },
    },
    isCondensed: {
      description: "アイテムのサイズを選択",
      control: { type: "boolean" },
      table: {
        defaultValue: { summary: "false" },
        type: { summary: "boolean" },
      },
    },
  },
} satisfies Meta<typeof MenuList.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

const collection = createListCollection({
  items: [
    "メニューアイテム1",
    "メニューアイテム2",
    "メニューアイテム3",
    "メニューアイテム4",
    "メニューアイテム5",
    "メニューアイテム6",
  ],
});

export const Basic: Story = {
  args: {
    collection,
    children: (
      <>
        <MenuList.Label>カテゴリータイトル</MenuList.Label>
        <MenuList.Content>
          {collection.items.map((item) => (
            <MenuList.Item key={item} item={item}>
              <MenuList.ItemText>{item}</MenuList.ItemText>
              <MenuList.ItemIndicator />
            </MenuList.Item>
          ))}
        </MenuList.Content>
      </>
    ),
  },
};

export const InBox: Story = {
  args: {
    collection,
    variant: "boxed",
    ...css.raw({
      borderWidth: "1px",
      borderColor: "solid-gray.420",
      width: "280px",
      maxHeight: "200px",
      overflowY: "auto",
    }),
    children: (
      <>
        <MenuList.Label>カテゴリータイトル</MenuList.Label>
        <MenuList.Content>
          {collection.items.map((item) => (
            <MenuList.Item key={item} item={item}>
              <MenuList.ItemText>{item}</MenuList.ItemText>
              <MenuList.ItemIndicator />
            </MenuList.Item>
          ))}
        </MenuList.Content>
      </>
    ),
  },
};

export const WithLink: Story = {
  args: {
    collection,
    children: (
      <>
        <MenuList.Label>カテゴリータイトル</MenuList.Label>
        <MenuList.Content>
          {collection.items.map((item) => (
            <MenuList.Item key={item} item={item} asChild>
              <a href="https://cieloazul310.github.io" target="_blank">
                <MenuList.ItemText>{item}</MenuList.ItemText>
                <MenuList.ItemIndicator />
              </a>
            </MenuList.Item>
          ))}
        </MenuList.Content>
      </>
    ),
  },
};

export const WithNextLink: Story = {
  args: {
    collection,
    children: (
      <>
        <MenuList.Label>カテゴリータイトル</MenuList.Label>
        <MenuList.Content>
          {collection.items.map((item) => (
            <MenuList.Item key={item} item={item} asChild>
              <NextLink href={`/${item}`}>
                <MenuList.ItemText>{item}</MenuList.ItemText>
                <MenuList.ItemIndicator />
              </NextLink>
            </MenuList.Item>
          ))}
        </MenuList.Content>
      </>
    ),
  },
};

const groupedCollection = createListCollection({
  items: [
    { label: "React", value: "react", type: "JS" },
    { label: "Solid", value: "solid", type: "JS" },
    { label: "Vue", value: "vue", type: "JS" },
    { label: "Panda", value: "panda", type: "CSS" },
    { label: "Tailwind", value: "tailwind", type: "CSS" },
  ],
  groupBy: (item) => item.type,
});

export const Grouping: Story = {
  args: {
    collection: groupedCollection,
    children: (
      <>
        <MenuList.Label>Select your Frameworks</MenuList.Label>
        <MenuList.Content>
          {groupedCollection.group().map(([type, group]) => (
            <MenuList.ItemGroup key={type}>
              <MenuList.ItemGroupLabel>{type}</MenuList.ItemGroupLabel>
              <ul className={css({ pl: 8 })}>
                {group.map((item) => (
                  <MenuList.Item key={item.value} item={item} asChild>
                    <li>
                      <MenuList.ItemText>{item.label}</MenuList.ItemText>
                      <MenuList.ItemIndicator />
                    </li>
                  </MenuList.Item>
                ))}
              </ul>
            </MenuList.ItemGroup>
          ))}
        </MenuList.Content>
      </>
    ),
  },
};

import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { OrderedList } from "../src/ordered-list";
import { List } from "../src/list";

const meta = {
  title: "Components/リスト/Ol",
  component: OrderedList,
} satisfies Meta<typeof OrderedList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    children: (
      <>
        <List>サンプルサンプル</List>
        <List>サンプルサンプル</List>
        <List>サンプルサンプル</List>
      </>
    ),
  },
};

export const Nested: Story = {
  args: {
    children: (
      <>
        <List>サンプルサンプル</List>
        <List>サンプルサンプル</List>
        <List>
          サンプル
          <OrderedList>
            <List>サンプルサンプル</List>
            <List>サンプルサンプル</List>
            <List>サンプルサンプル</List>
          </OrderedList>
        </List>
        <List>サンプルサンプル</List>
        <List>サンプルサンプル</List>
      </>
    ),
  },
};

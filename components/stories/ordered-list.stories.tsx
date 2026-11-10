import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { List, OrderedList } from "../src/list";

const meta = {
  title: "Components/箇条書きリスト/項番タイプ",
  component: OrderedList,
} satisfies Meta<typeof OrderedList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    children: (
      <>
        <List>
          <span>1.</span>サンプルサンプル
        </List>
        <List>
          <span>2.</span>サンプルサンプル
        </List>
        <List>
          <span>3.</span>サンプルサンプル
        </List>
      </>
    ),
  },
};

export const Nested: Story = {
  args: {
    children: (
      <>
        <List>
          <span>1.</span>サンプルサンプル
        </List>
        <List>
          <span>2.</span>サンプルサンプル
        </List>
        <List>
          サンプル
          <OrderedList>
            <List>
              <span>1.</span>サンプルサンプル
            </List>
            <List>
              <span>2.</span>サンプルサンプル
            </List>
            <List>
              <span>3.</span>サンプルサンプル
            </List>
          </OrderedList>
        </List>
        <List>
          <span>4.</span>サンプルサンプル
        </List>
        <List>
          <span>5.</span>サンプルサンプル
        </List>
      </>
    ),
  },
};

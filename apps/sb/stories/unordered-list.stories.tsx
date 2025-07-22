import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { UnorderedList } from "@cieloazul310/digital-go-react-components/unordered-list";
import { List } from "@cieloazul310/digital-go-react-components/list";

const meta = {
  title: "Components/リスト/Ul",
  component: UnorderedList,
} satisfies Meta<typeof UnorderedList>;

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
          <UnorderedList>
            <List>サンプルサンプル</List>
            <List>サンプルサンプル</List>
            <List>サンプルサンプル</List>
          </UnorderedList>
        </List>
        <List>サンプルサンプル</List>
        <List>サンプルサンプル</List>
      </>
    ),
  },
};

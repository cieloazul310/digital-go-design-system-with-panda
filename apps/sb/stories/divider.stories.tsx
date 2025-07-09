import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Flex } from "@import-map-package/styled-system/jsx";
import { Divider } from "@cieloazul310/digital-go-pandacss/divider";

const meta = {
  title: "Components/ディバイダー",
  component: Divider,
  tags: ["autodocs"],
  argTypes: {
    color: {
      options: ["gray-420", "gray-536", "black"],
      control: { type: "radio" },
      description: "線の色を以下から選択します。",
      table: {
        defaultValue: { summary: "gray-420" },
        type: { summary: "'gray-420', 'gray-536', 'black'" },
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
Default では線の太さは\`1px\`、スタイルは\`solid\`に設定されています。変更したい場合は Tailwind CSS のクラスを使って上書きしてください。`,
      },
    },
  },
} satisfies Meta<typeof Divider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    className: "",
    color: "gray-420",
  },
};

export const Solid: Story = {
  render: () => {
    return (
      <Flex gap={8} direction="column">
        <Divider />
        <Divider color="gray-536" />
        <Divider color="black" />
        <Divider borderWidth="2px" />
        <Divider color="gray-536" borderWidth="2px" />
        <Divider color="black" borderWidth="2px" />
        <Divider borderWidth="3px" />
        <Divider color="gray-536" borderWidth="3px" />
        <Divider color="black" borderWidth="3px" />
        <Divider borderWidth="4px" />
        <Divider color="gray-536" borderWidth="4px" />
        <Divider color="black" borderWidth="4px" />
      </Flex>
    );
  },
};

export const Dash: Story = {
  render: () => {
    return (
      <Flex gap={8} direction="column">
        <Divider borderStyle="dashed" />
        <Divider color="gray-536" borderStyle="dashed" />
        <Divider color="black" borderStyle="dashed" />
        <Divider borderStyle="dashed" borderWidth="2px" />
        <Divider color="gray-536" borderStyle="dashed" borderWidth="2px" />
        <Divider color="black" borderStyle="dashed" borderWidth="2px" />
        <Divider borderStyle="dashed" borderWidth="3px" />
        <Divider color="gray-536" borderStyle="dashed" borderWidth="3px" />
        <Divider color="black" borderStyle="dashed" borderWidth="3px" />
        <Divider borderStyle="dashed" borderWidth="4px" />
        <Divider color="gray-536" borderStyle="dashed" borderWidth="4px" />
        <Divider color="black" borderStyle="dashed" borderWidth="4px" />
      </Flex>
    );
  },
};

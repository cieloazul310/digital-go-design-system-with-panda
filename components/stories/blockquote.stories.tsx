import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Blockquote } from "../src/blockquote";
import { UnorderedList, List } from "../src/list";

const meta = {
  title: "Components/引用ブロック",
  tags: ["autodocs"],
  component: Blockquote,
} satisfies Meta<typeof Blockquote>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    children: (
      <p>
        これは引用文の例です。デジタル庁デザインシステムでは、アクセシビリティファーストの原則に基づいて、すべてのユーザーが利用しやすいサービスの提供を目指しています。
      </p>
    ),
  },
};

export const MultipleParagraphs: Story = {
  args: {
    children: (
      <>
        <p>
          これは引用文の例です。デジタル庁デザインシステムでは、アクセシビリティファーストの原則に基づいて、すべてのユーザーが利用しやすいサービスの提供を目指しています。
        </p>
        <p>これは複数の段落を含めている例です。</p>
        <p>最初と最後の段落のマージンは自動的に調整されます。</p>
      </>
    ),
  },
};

export const WithList: Story = {
  args: {
    children: (
      <>
        <p>
          デジタル庁デザインシステムは、以下の理念を追求して作成されています。
        </p>
        <UnorderedList my={4}>
          <List>アクセシビリティファースト</List>
          <List>行政機関にとって高い汎用性と利便性</List>
          <List>継続的かつ持続可能な改善活動および研究と実践</List>
        </UnorderedList>
        <p>
          これにより、デジタル化の恩恵をすべての人に届けられる日本のデジタル化社会の構築に寄与します。
        </p>
      </>
    ),
  },
};

import type { Meta, StoryObj } from "@storybook/react-vite";
import { createTreeCollection } from "@ark-ui/react/tree-view";
import * as StyledTreeView from "@cieloazul310/digital-go-pandacss/tree-view";
import { forwardRef } from "react";

const TreeView = forwardRef<HTMLDivElement, StyledTreeView.RootProps>(
  (props, ref) => {
    return (
      <StyledTreeView.Root ref={ref} {...props}>
        <StyledTreeView.Label>ラベル</StyledTreeView.Label>
        <StyledTreeView.Tree>
          {/* @ts-expect-error any type node */}
          {props.collection.rootNode.children.map((node, index) => (
            <TreeNode key={node.id} node={node} indexPath={[index]} />
          ))}
        </StyledTreeView.Tree>
      </StyledTreeView.Root>
    );
  },
);

TreeView.displayName = "TreeView";

const TreeNode = (props: StyledTreeView.NodeProviderProps) => {
  const { node, indexPath } = props;
  return (
    <StyledTreeView.NodeProvider
      key={node.id}
      node={node}
      indexPath={indexPath}
    >
      {node.children ? (
        <StyledTreeView.Branch>
          <StyledTreeView.BranchControl>
            <StyledTreeView.BranchText>{node.name}</StyledTreeView.BranchText>
            <StyledTreeView.BranchIndicator />
          </StyledTreeView.BranchControl>
          <StyledTreeView.BranchContent>
            {/* @ts-expect-error any type node */}
            {node.children.map((child, index) => (
              <TreeNode
                key={child.id}
                node={child}
                indexPath={[...indexPath, index]}
              />
            ))}
          </StyledTreeView.BranchContent>
        </StyledTreeView.Branch>
      ) : (
        <StyledTreeView.Item asChild>
          <StyledTreeView.ItemText>{node.name}</StyledTreeView.ItemText>
        </StyledTreeView.Item>
      )}
    </StyledTreeView.NodeProvider>
  );
};

const meta = {
  title: "Components/ツリービュー",
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
  args: {
    variant: "boxed",
    isCondensed: false,
  },
  render: ({ ...props }) => <TreeView {...props} />,
} satisfies Meta<typeof TreeView>;

export default meta;
type Story = StoryObj<typeof TreeView>;

interface Node {
  id: string;
  name: string;
  children?: Node[];
}

const collection = createTreeCollection<Node>({
  nodeToValue: (node) => node.id,
  nodeToString: (node) => node.name,
  rootNode: {
    id: "ROOT",
    name: "",
    children: [
      {
        id: "node_modules",
        name: "node_modules",
        children: [
          { id: "node_modules/zag-js", name: "zag-js" },
          { id: "node_modules/pandacss", name: "panda" },
          {
            id: "node_modules/@types",
            name: "@types",
            children: [
              { id: "node_modules/@types/react", name: "react" },
              { id: "node_modules/@types/react-dom", name: "react-dom" },
            ],
          },
        ],
      },
      {
        id: "src",
        name: "src",
        children: [
          { id: "src/app.tsx", name: "app.tsx" },
          { id: "src/index.ts", name: "index.ts" },
        ],
      },
      { id: "panda.config", name: "panda.config.ts" },
      { id: "package.json", name: "package.json" },
      { id: "renovate.json", name: "renovate.json" },
      { id: "readme.md", name: "README.md" },
    ],
  },
});

export const Basic: Story = {
  args: {
    collection,
    variant: "boxed",
    isCondensed: false,
  },
};

export const WithBorder: Story = {
  args: {
    collection,
    variant: "boxed",
    isCondensed: false,
  },
};

/**
 * source:
 * https://github.com/cschroeter/park-ui/blob/main/components/react/src/components/ui/styled/tree-view.tsx
 */

"use client";
import type { JSX, RefAttributes } from "react";
import { type TreeNode, TreeView } from "@ark-ui/react/tree-view";
import { treeView, type TreeViewVariantProps } from "styled-system/recipes";
import { createStyleContext } from "styled-system/jsx";

const { withProvider, withContext } = createStyleContext(treeView);

export type RootProviderProps<T extends TreeNode> =
  TreeView.RootProviderProps<T> & TreeViewVariantProps;
export const RootProvider = withProvider(TreeView.RootProvider, "root") as {
  <T extends TreeNode>(props: RootProviderProps<T>): JSX.Element;
};

export type RootProps<T extends TreeNode> = TreeView.RootProps<T> &
  RefAttributes<HTMLDivElement> &
  TreeViewVariantProps;
export const Root = withProvider(TreeView.Root, "root") as {
  <T extends TreeNode>(props: RootProps<T>): JSX.Element;
};

export const BranchContent = withContext(
  TreeView.BranchContent,
  "branchContent",
);

export const BranchControl = withContext(
  TreeView.BranchControl,
  "branchControl",
);

export const BranchIndicator = withContext(
  TreeView.BranchIndicator,
  "branchIndicator",
);

export const Branch = withContext(TreeView.Branch, "branch");

export const BranchText = withContext(TreeView.BranchText, "branchText");
/*
export const BranchIndentGuide = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<"div">, TreeView.BranchIndentGuideBaseProps>
>(TreeView.BranchIndentGuide, "branchIndentGuide");
*/
export const BranchTrigger = withContext(
  TreeView.BranchTrigger,
  "branchTrigger",
);

export const ItemIndicator = withContext(
  TreeView.ItemIndicator,
  "itemIndicator",
  { defaultProps: { hidden: false } },
);

export const Item = withContext(TreeView.Item, "item");

export const ItemText = withContext(TreeView.ItemText, "itemText");

export const Label = withContext(TreeView.Label, "label");

export const Tree = withContext(TreeView.Tree, "tree");

export type NodeProviderProps = TreeView.NodeProviderProps<TreeNode>;
export const NodeProvider = TreeView.NodeProvider;

export { TreeViewContext as Context } from "@ark-ui/react/tree-view";

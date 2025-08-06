/**
 * source:
 * https://github.com/cschroeter/park-ui/blob/main/components/react/src/components/ui/styled/tree-view.tsx
 */

"use client";
import { type TreeNode, TreeView } from "@ark-ui/react/tree-view";
import { treeView } from "styled-system/recipes";
import { createStyleContext } from "styled-system/jsx";
import type { ComponentProps } from "styled-system/types";

const { withProvider, withContext } = createStyleContext(treeView);

export type RootProviderProps = ComponentProps<typeof RootProvider>;
export const RootProvider = withProvider(TreeView.RootProvider, "root");

export type RootProps = ComponentProps<typeof Root>;
export const Root = withProvider(TreeView.Root, "root");

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

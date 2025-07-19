import { defineSlotRecipe } from "@pandacss/dev";
import menuItem from "./menu-item";
import { anatomy as treeViewAnatomy } from "@zag-js/tree-view";

export default defineSlotRecipe({
  className: "tree-view",
  slots: treeViewAnatomy.keys(),
  base: {
    root: {},
    label: {
      py: 3,
      pl: 3,
      pr: 6,
      textStyle: "oln-17B-100",
      textWrap: "nowrap",
      display: "block",
    },
    tree: {},
    item: {
      ...menuItem.base,
    },
    itemIndicator: {
      transition: "transform",
      transform: { base: "rotate(0deg)", _open: "rotate(90deg)" },
    },
    itemText: {
      flexGrow: 1,
    },
    branch: {},
    branchControl: { ...menuItem.base },
    branchTrigger: {},
    branchContent: {
      my: 1,
      pl: 8,
    },
    branchIndicator: {
      position: "absolute",
      right: 4,
      transition: "transform",
      transform: { base: "rotate(0deg)", _open: "rotate(90deg)" },
    },
    branchText: {
      flexGrow: 1,
    },
  },
  variants: {
    variant: {
      standard: {
        item: {
          ...menuItem.variants?.variant?.standard,
        },
        branchControl: {
          ...menuItem.variants?.variant?.standard,
        },
      },
      boxed: {
        item: {
          ...menuItem.variants?.variant?.boxed,
        },
        branchControl: {
          ...menuItem.variants?.variant?.boxed,
        },
      },
    },
    isCondensed: {
      true: {
        label: {
          py: 1.5,
          pl: 1.5,
          pr: 4,
        },
        item: {
          ...menuItem.variants?.isCondensed?.true,
        },
        branchControl: {
          ...menuItem.variants?.isCondensed?.true,
        },
      },
      false: {
        item: {
          ...menuItem.variants?.isCondensed?.false,
        },
        branchControl: {
          ...menuItem.variants?.isCondensed?.false,
        },
      },
    },
  },
});

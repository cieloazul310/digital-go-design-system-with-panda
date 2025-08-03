import { defineSlotRecipe } from "@pandacss/dev";
import { anatomy as treeViewAnatomy } from "@zag-js/tree-view";
import menuItem from "./menu-item";

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
      _empty: {
        _before: {
          content: '""',
          display: "block",
          width: "24px",
          height: "24px",
          bg: "black",
          clipPath: "path('M12 19L5 12L12 5L19 12L12 19Z')",
        },
        _selected: {
          _before: {
            clipPath:
              "path('M12 19L5 12L12 5L19 12L12 19ZM12 16.15L16.15 12L12 7.85L7.85 12L12 16.15Z')",
          },
        },
      },
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
      _empty: {
        _before: {
          content: '""',
          display: "block",
          width: "24px",
          height: "24px",
          bg: "black",
          clipPath: "path('M12 19L5 12L12 5L19 12L12 19Z')",
        },
        _selected: {
          _before: {
            clipPath:
              "path('M12 19L5 12L12 5L19 12L12 19ZM12 16.15L16.15 12L12 7.85L7.85 12L12 16.15Z')",
          },
        },
        _open: {
          _before: {
            clipPath:
              "path('M12 19L5 12L12 5L19 12L12 19ZM12 16.15L16.15 12L12 7.85L7.85 12L12 16.15Z')",
          },
        },
      },
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

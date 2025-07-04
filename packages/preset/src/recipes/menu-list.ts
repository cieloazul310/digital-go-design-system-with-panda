import { defineSlotRecipe } from "@pandacss/dev";
import { menuListAnatomy } from "../anatomy";
import menuItem from "./menu-item";

export default defineSlotRecipe({
  className: "menu-list",
  slots: menuListAnatomy.keys(),
  base: {
    root: {},
    label: {
      py: 3,
      pl: 3,
      pr: 6,
      textStyle: "oln-17B-100",
      textWrap: "nowrap",
      display: "block",
      mb: 2,
    },
    content: {},
    item: {
      ...menuItem.base,
    },
    itemGroup: {
      my: 1,
    },
    itemGroupLabel: {
      ...menuItem.base,
      position: "sticky",
      top: 0,
      bg: "white",
    },
    itemText: {},
    itemIndicator: {
      position: "absolute",
      top: "50%",
      right: 4,
      transform: "translateY(-50%)",
    },
  },
  variants: {
    variant: {
      standard: {
        item: {
          ...menuItem.variants?.variant?.standard,
        },
        itemGroupLabel: {
          ...menuItem.variants?.variant?.standard,
        },
      },
      boxed: {
        item: {
          ...menuItem.variants?.variant?.boxed,
        },
        itemGroupLabel: {
          ...menuItem.variants?.variant?.boxed,
        },
      },
    },
    isCondensed: {
      true: {},
    },
  },
  defaultVariants: {
    variant: "standard",
    isCondensed: false,
  },
});

/**
 * reference:
 * https://github.com/digital-go-jp/design-system-example-components-html/tree/main/src/components/description-list
 */
import { defineSlotRecipe } from "@pandacss/dev";

export default defineSlotRecipe({
  className: "description-list",
  slots: ["root", "item", "item-term", "item-marker", "item-description"],
  base: {
    root: {
      /**
       * margin-top: calc(16 / 16 * 1rem);
       * margin-bottom: calc(16 / 16 * 1rem);
       * display: grid;
       * gap: calc(8 / 16 * 1rem) 0;
       * overflow-wrap: anywhere;
       */
      mt: "calc(16 / 16 * 1rem)",
      mb: "calc(16 / 16 * 1rem)",
      display: "grid",
      rowGap: "calc(8 / 16 * 1rem)",
      overflowWrap: "anywhere",
    },
    "item-term": {
      /**
       * font-weight: bold;
       */
      fontWeight: "bold",
    },
    "item-marker": {
      display: "none",
    },
    "item-description": {
      /**
       * margin-left: calc(32 / 16 * 1rem);
       */
      ml: "calc(32 / 16 * 1rem)",
    },
  },
  variants: {
    marker: {
      none: {},
      bullet: {
        "item-term": {
          /**
           * margin-left: calc(32 / 16 * 1rem);
           * display: list-item;
           * list-style-type: disc;
           */
          ml: "calc(32 / 16 * 1rem)",
          display: "list-item",
          listStyleType: "disc",
        },
      },
      custom: {
        "item-marker": {
          display: "inline-block",
          minWidth: "calc(32 / 16 * 1rem)",
          height: "1em",
        },
      },
    },
  },
  defaultVariants: {
    marker: "none",
  },
});

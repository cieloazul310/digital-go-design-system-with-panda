/**
 * reference:
 * https://github.com/digital-go-jp/design-system-example-components-html/tree/main/src/components/description-list
 */
import { defineSlotRecipe } from "@pandacss/dev";

export default defineSlotRecipe({
  className: "description-list",
  slots: ["root", "item", "term", "marker", "description"],
  base: {
    root: {
      /**
       * margin-top: calc(16 / 16 * 1rem);
       * margin-bottom: calc(16 / 16 * 1rem);
       * display: grid;
       * gap: calc(8 / 16 * 1rem) 0;
       * overflow-wrap: anywhere;
       */
      mt: 4,
      mb: 4,
      display: "grid",
      rowGap: 2,
      overflowWrap: "anywhere",
    },
    term: {
      /**
       * font-weight: bold;
       */
      fontWeight: "bold",
    },
    marker: {
      display: "none",
    },
    description: {
      /**
       * margin-left: calc(32 / 16 * 1rem);
       */
      ml: 8,
    },
  },
  variants: {
    marker: {
      none: {},
      bullet: {
        term: {
          /**
           * margin-left: calc(32 / 16 * 1rem);
           * display: list-item;
           * list-style-type: disc;
           */
          ml: 8,
          display: "list-item",
          listStyleType: "disc",
        },
      },
      custom: {
        marker: {
          display: "inline-block",
          minWidth: 8,
          height: "1em",
        },
      },
    },
  },
  defaultVariants: {
    marker: "none",
  },
});

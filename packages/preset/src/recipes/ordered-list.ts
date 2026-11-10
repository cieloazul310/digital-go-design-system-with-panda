/**
 * source:
 * https://github.com/digital-go-jp/design-system-example-components-react/blob/main/src/components/List/List.tsx
 */
import { defineRecipe } from "@pandacss/dev";

export const orderedList = defineRecipe({
  className: "ordered-list",
  base: {
    listStyle: "none",
    "&:where(ul)": {
      mt: 1,
      mb: -1,
    },
    "& > li": {
      pl: 8,
    },
    "& > li > span:first-child": {
      ml: -8,
      display: "inline-block",
      minW: 8,
      whiteSpace: "nowrap",
    },
    "& > li > a:only-child": {
      ml: -8,
      pl: 8,
    },
    "& > li > a:only-child > span:first-child": {
      ml: -8,
      display: "inline-block",
      minW: 8,
      whiteSpace: "nowrap",
      textDecoration: "inherit",
    },
  },
});

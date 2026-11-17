import { defineRecipe } from "@pandacss/dev";

export const unorderedList = defineRecipe({
  className: "unordered-list",
  base: {
    /**
     * pl-8 list-[revert]
     */
    pl: 8,
    listStyle: "revert",
    /**
     * [&:where(ul)]:mt-1 [&:where(ul)]:-mb-1
     */
    "&:where(ul)": {
      mt: 1,
      mb: -1,
    },
  },
});

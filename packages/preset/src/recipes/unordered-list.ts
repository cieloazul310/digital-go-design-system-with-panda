import { defineRecipe } from "@pandacss/dev";

export default defineRecipe({
  className: "unordered-list",
  base: {
    /**
     * pl-8 list-[revert]
     */
    pl: 8,
    listStyle: "revert",
    /**
     * [&_:where(ol,ul)]:mt-1 [&_:where(ol,ul)]:-mb-1
     */
    "&:where(ol,ul)": {
      mt: 1,
      mb: -1,
    },
  },
});

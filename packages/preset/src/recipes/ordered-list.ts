/**
 * source:
 * https://github.com/digital-go-jp/design-system-example-components-react/blob/main/src/components/Ol/Ol.tsx
 */
import { defineRecipe } from "@pandacss/dev";

export default defineRecipe({
  className: "ordered-list",
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

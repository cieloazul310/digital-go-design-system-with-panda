/**
 * source:
 * https://github.com/digital-go-jp/design-system-example-components-react/blob/main/src/components/ErrorText/ErrorText.tsx
 */
import { defineRecipe } from "@pandacss/dev";

export default defineRecipe({
  className: "error-text",
  base: {
    /**
     * text-dns-16N-130 text-error-1
     */
    textStyle: "dns-16N-130",
    color: "error.1",
  },
});

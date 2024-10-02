/**
 * source:
 * https://github.com/digital-go-jp/design-system-example-components/blob/main/src/components/ErrorText/ErrorText.tsx
 */
import { defineRecipe } from "@pandacss/dev";

export default defineRecipe({
  className: "error-text",
  base: {
    textStyle: "dns-16N-130",
    color: "error.1",
  },
});

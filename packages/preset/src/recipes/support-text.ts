/**
 * source:
 * https://github.com/digital-go-jp/design-system-example-components/blob/main/src/components/SupportText/SupportText.tsx
 */
import { defineRecipe } from "@pandacss/dev";

export default defineRecipe({
  className: "support-text",
  base: {
    /**
     * text-std-16N-170 text-solid-gray-700
     */
    textStyle: "dns-16N-170",
    color: "solid-gray.700",
  },
});

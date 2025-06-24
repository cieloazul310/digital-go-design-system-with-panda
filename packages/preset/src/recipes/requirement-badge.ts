/**
 * source:
 * https://github.com/digital-go-jp/design-system-example-components/blob/main/src/components/RequirementBadge/RequirementBadge.tsx
 */
import { defineRecipe } from "@pandacss/dev";

export default defineRecipe({
  className: "requirement-badge",
  base: {
    /**
     * text-oln-16N-100 text-red-800
     */
    textStyle: "oln-16N-100",
    color: "red.800",
  },
  variants: {
    isOptional: {
      true: {
        /**
         * data-[is-optional]:text-solid-gray-800
         */
        color: "solid-gray.800",
      },
    },
  },
  defaultVariants: {
    isOptional: false,
  },
});

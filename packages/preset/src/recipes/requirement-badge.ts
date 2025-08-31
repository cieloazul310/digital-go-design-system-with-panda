/**
 * source:
 * https://github.com/digital-go-jp/design-system-example-components-react/blob/main/src/components/RequirementBadge/RequirementBadge.tsx
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
});

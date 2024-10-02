/**
 * source:
 * https://github.com/digital-go-jp/design-system-example-components/blob/main/src/components/Label/Label.tsx
 */
import { defineRecipe } from "@pandacss/dev";

/**
 * flex w-fit items-center gap-2 text-solid-gray-800
 */
export default defineRecipe({
  className: "label",
  base: {
    display: "flex",
    width: "fit-content",
    alignItems: "center",
    gap: 2,
    color: "solid-gray.800",
  },
  variants: {
    size: {
      lg: { textStyle: "std-18B-160" },
      md: { textStyle: "std-17B-170" },
      sm: { textStyle: "std-16B-170" },
    },
  },
  defaultVariants: {
    size: "lg",
  },
});

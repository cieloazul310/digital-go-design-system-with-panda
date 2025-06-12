/**
 * source:
 * https://github.com/digital-go-jp/design-system-example-components/blob/main/src/components/Label/Label.tsx
 */
import { defineRecipe } from "@pandacss/dev";

export default defineRecipe({
  className: "label",
  base: {
    /**
     * flex w-fit items-center gap-2 text-solid-gray-800
     */
    display: "flex",
    width: "fit-content",
    alignItems: "center",
    gap: 2,
    color: "solid-gray.800",
  },
  variants: {
    size: {
      /**
       * data-[size=sm]:text-std-16B-170 data-[size=md]:text-std-17B-170 data-[size=lg]:text-std-18B-160
       */
      sm: { textStyle: "std-16B-170" },
      md: { textStyle: "std-17B-170" },
      lg: { textStyle: "std-18B-160" },
    },
  },
  defaultVariants: {
    size: "md",
  },
});

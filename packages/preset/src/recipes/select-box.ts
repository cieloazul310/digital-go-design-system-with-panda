/**
 * source:
 * https://github.com/digital-go-jp/design-system-example-components-react/blob/main/src/components/Select/Select.tsx
 */
import { defineRecipe } from "@pandacss/dev";

export default defineRecipe({
  className: "select-box",
  description:
    "セレクトボックスは、複数の選択肢を提供するフォームコントロールです。",
  base: {
    /**
     * w-full pl-4 pr-10 py-[calc(11/16*1rem)]
     * appearance-none rounded-8
     * aria-disabled:pointer-events-none
     */
    width: "full",
    appearance: "none",
    pl: 4,
    pr: 10,
    py: "calc(11 / 16 * 1rem)",
    rounded: 8,
    pointerEvents: { base: "inherit", _disabled: "none" },
    /**
     * bg-white text-oln-16N-100 text-solid-gray-800
     * aria-disabled:text-solid-gray-420
     * aria-disabled:forced-colors:text-[GrayText]
     */
    bg: { base: "white", _disabled: "solid-gray.50" },
    color: { base: "solid-gray.800", _disabled: "solid-gray.420" },
    textStyle: "oln-16N-100",
    /**
     * border border-solid-gray-600 hover:border-black
     * aria-disabled:border-solid-gray-300 aria-disabled:bg-solid-gray-50
     * aria-disabled:forced-colors:border-[GrayText]
     * aria-[invalid=true]:border-error-1aria-[invalid=true]:hover:border-red-1000
     */
    borderWidth: "1px",
    borderColor: {
      base: "solid-gray.900",
      _disabled: "solid-gray.300",
      _invalid: { base: "error.1", _hover: "red.1000" },
    },
    /**
     * remove button style
     */
    textAlign: "start",
    /**
     * focus:outline focus:outline-4 focus:outline-black focus:outline-offset-[calc(2/16*1rem)] focus:ring-[calc(2/16*1rem)] focus:ring-yellow-300
     */
    _focus: {
      outlineStyle: "solid",
      outlineWidth: "4px",
      outlineColor: "black",
      outlineOffset: 0.5,
      focusBox: "calc({spacing.1} / 2)",
    },
  },
  variants: {
    size: {
      /**
       * data-[size=sm]:h-10 data-[size=md]:h-12 data-[size=lg]:h-14
       */
      sm: {
        height: 10,
      },
      md: {
        height: 12,
      },
      lg: {
        height: 14,
      },
    },
  },
});

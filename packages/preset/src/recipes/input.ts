/**
 * source:
 * https://github.com/digital-go-jp/design-system-example-components-react/blob/main/src/components/Input/Input.tsx
 */
import { defineRecipe } from "@pandacss/dev";

export default defineRecipe({
  className: "input",
  description:
    "インプットテキストコンポーネントは、名前や電話番号など、1行以内のテキストを入力する場合に使用します。",
  base: {
    /**
     * max-w-full px-4 py-3 rounded-8
     */
    // minWidth: "80px",
    maxWidth: "full",
    rounded: 8,
    px: 4,
    py: 3,
    /**
     * border border-solid-gray-600 hover:border-black
     * aria-disabled:border-solid-gray-300
     * aria-disabled:forced-colors:border-[GrayText]
     * aria-[invalid=true]:border-error-1 aria-[invalid=true]:hover:border-red-1000
     */
    borderStyle: { base: "solid", _readOnly: "dashed" },
    borderWidth: "1px",
    borderColor: {
      base: "solid-gray.600",
      _hover: "black",
      _disabled: { base: "solid-gray.300", _highContrast: "GrayText" },
      _invalid: { base: "error.1", _hover: "red.1000" },
    },
    /**
     * bg-white text-oln-16N-100 text-solid-gray-800
     * aria-disabled:bg-solid-gray-50 aria-disabled:text-solid-gray-420
     * aria-disabled:forced-colors:text-[GrayText]
     *
     */
    bg: { base: "white", _disabled: "solid-gray.50" },
    color: {
      base: "solid-gray.800",
      _disabled: { base: "solid-gray.420", _highContrast: "GrayText" },
    },
    textStyle: "oln-16N-100",
    /**
     * focus:outline focus:outline-4 focus:outline-black
     * focus:outline-offset-[calc(2/16*1rem)]
     * focus:ring-[calc(2/16*1rem)] focus:ring-yellow-300
     */
    _focus: {
      outlineStyle: "solid",
      outlineWidth: "4px",
      outlineColor: "black",
      outlineOffset: 0.5,
      focusBox: "calc({spacing.1} / 2)",
    },
    /**
     * aria-disabled:pointer-events-none
     */
    pointerEvents: { base: "inherit", _disabled: "none" },
  },
  variants: {
    size: {
      /**
       * data-[size=sm]:h-10 data-[size=md]:h-12 data-[size=lg]:h-14
       */
      sm: { height: 10 },
      md: { height: 12 },
      lg: { height: 14 },
    },
  },
  defaultVariants: {
    size: "lg",
  },
});

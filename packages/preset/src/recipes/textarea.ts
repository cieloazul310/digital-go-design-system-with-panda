/**
 * source:
 * https://github.com/digital-go-jp/design-system-example-components-react/blob/main/src/components/Textarea/Textarea.tsx
 */
import { defineRecipe } from "@pandacss/dev";

export default defineRecipe({
  className: "textarea",
  description:
    "テキストエリアコンポーネントは、1行以上のテキストを入力する場合に使用します。",
  base: {
    /**
     * rounded-8 max-w-full p-4 aria-disabled:pointer-events-none
     */
    rounded: 8,
    p: 4,
    /**
     * text-std-16N-170 bg-white text-solid-gray-800
     * aria-disabled:bg-solid-gray-50 aria-disabled:text-solid-gray-420
     * aria-disabled:forced-colors:text-[GrayText]
     */
    textStyle: "std-16N-170",
    bg: { base: "white", _disabled: "solid-gray.50" },
    color: {
      base: "solid-gray.800",
      _disabled: { base: "solid-gray.420", _highContrast: "GrayText" },
    },
    /**
     * border border-solid-gray-600 hover:border-black
     * aria-disabled:border-solid-gray-300 aria-disabled:forced-colors:border-[GrayText]
     * aria-[invalid=true]:border-error-1 aria-[invalid=true]:hover:border-red-1000
     */
    borderStyle: { base: "solid", _readOnly: "dashed" },
    borderWidth: "1px",
    borderColor: {
      base: "solid-gray.600",
      _hover: "black",
      _disabled: { base: "solid-gray.300", _hover: "GrayText" },
      _invalid: { base: "error.1", _hover: "red.1000" },
    },
    /**
     * focus:outline focus:outline-4 focus:outline-black
     * focus:outline-offset-[calc(2/16*1rem)]
     * focus:ring-[calc(2/16*1rem)] focus:ring-yellow-300
     */
    _focus: {
      outlineStyle: "solid",
      outlineWidth: "4px",
      outlineColor: "black",
      outlineOffset: "calc(2 / 16 * 1rem)",
      focusRing: "calc(2 / 16 * 1rem)",
    },
  },
});

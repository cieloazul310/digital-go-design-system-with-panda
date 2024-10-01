/**
 * source:
 * https://github.com/digital-go-jp/design-system-example-components/blob/main/src/components/Input/Input.tsx
 */
import { defineRecipe } from "@pandacss/dev";

export default defineRecipe({
  className: "input",
  description:
    "インプットテキストコンポーネントは、名前や電話番号など、1行以内のテキストを入力する場合に使用します。",
  base: {
    minWidth: "80px",
    maxWidth: "full",
    rounded: 8,
    px: 4,
    py: 3,
    borderWidth: "1px",
    borderColor: {
      vase: "solid-gray.900",
      _error: "error.1",
      _disabled: "solid-gray.300",
    },
    color: { base: "solid-gray.800", _disabled: "solid-gray.420" },
    bg: { base: "white", _disabled: "solid-gray.50" },
    textStyle: "oln-16N-100",
    _focus: {
      outlineWidth: "4px",
      outlineColor: "black",
      outlineOffset: "calc(2/16*1rem)",
      borderInset: "md",
    },
    /**
     * min-w-80 max-w-full rounded-lg border bg-white px-4 py-3 text-oln-16N-100 text-solid-gray-800
        ${isError ? 'border-error-1' : 'border-solid-gray-900'}
        focus:outline focus:outline-4 focus:outline-black focus:outline-offset-[calc(2/16*1rem)] focus:ring-[calc(2/16*1rem)] focus:ring-yellow-300
        aria-disabled:border-solid-gray-300 aria-disabled:bg-solid-gray-50 aria-disabled:text-solid-gray-420 aria-disabled:pointer-events-none
        ${className ?? ''}
     */
  },
  variants: {
    size: {
      sm: { height: "10" },
      md: { height: "12" },
      lg: { height: "14" },
    },
    error: {
      true: {
        borderColor: "error.1",
      },
    },
  },
  defaultVariants: {
    size: "lg",
    error: false,
  },
});

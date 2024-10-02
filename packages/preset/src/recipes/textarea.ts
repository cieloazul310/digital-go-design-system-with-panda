/**
 * source:
 * https://github.com/digital-go-jp/design-system-example-components/blob/main/src/components/Textarea/Textarea.tsx
 */
import { defineRecipe } from "@pandacss/dev";

export default defineRecipe({
  className: "textarea",
  description:
    "テキストエリアコンポーネントは、1行以上のテキストを入力する場合に使用します。",
  base: {
    rounded: "lg",
    p: 4,
    minWidth: "80px",
    maxWidth: "full",
    height: "auto",
    minHeight: "calc(3lh + 2rem + 2px)",
    maxHeight: "calc(10lh + 2rem + 2px)",
    bg: { base: "white", _disabled: "solid-gray.50" },
    color: { base: "solid-gray.800", _disabled: "solid-gray.420" },
    textStyle: "std-16N-170",
    borderWidth: "1px",
    borderColor: { base: "solid-gray.800", _disabled: "solid-gray.300" },
    _focus: {
      outlineWidth: "4px",
      outlineColor: "black",
      outlineOffset: "calc(2/16*1rem)",
      borderInset: "md",
    },
  },
  variants: {
    invalid: {
      true: {
        borderColor: "error.1",
      },
    },
  },
  defaultVariants: {
    invalid: false,
  },
});

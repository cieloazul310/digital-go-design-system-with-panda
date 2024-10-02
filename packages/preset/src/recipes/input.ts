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
    rounded: "lg",
    px: 4,
    py: 3,
    borderWidth: "1px",
    borderColor: {
      base: "solid-gray.900",
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
  },
  variants: {
    size: {
      sm: { height: "10" },
      md: { height: "12" },
      lg: { height: "14" },
    },
    invalid: {
      true: {
        borderColor: "error.1",
      },
    },
  },
  defaultVariants: {
    size: "lg",
    invalid: false,
  },
});

/**
 * source:
 * https://github.com/digital-go-jp/design-system-example-components/blob/main/src/components/Link/Link.tsx
 */
import { defineRecipe } from "@pandacss/dev";

export default defineRecipe({
  className: "link",
  description:
    "リンクテキストは通常、色や下線などの視覚的な表現で通常のテキストと区別され、URLと関連づけられたテキスト文字列です。この関連付けをハイパーリンクと呼び、これはウェブをウェブたらしめている基本的な概念のひとつです。",
  base: {
    color: {
      base: "blue.1000",
      _visited: "magenta.900",
      _hover: "blue.1000",
      _focusVisible: "blue.1000",
      _active: "orange.700",
    },
    bg: {
      base: "transparent",
      _focusVisible: "yellow.300",
    },
    textDecoration: "underline",
    textDecorationThickness: {
      base: "1px",
      _hover: "calc(3/16*1rem)",
      _active: "1px",
    },
    textUnderlineOffset: "calc(3/16*1rem)",
    outline: {
      _focusVisible: {
        outlineWidth: "4px",
        outlineColor: "black",
        outlineOffset: "calc(2/16*1rem)",
        borderInset: "md",
      },
    },
    /*
    'text-blue-1000 underline underline-offset-[calc(3/16*1rem)]'
    'visited:text-magenta-900'
    'hover:text-blue-1000 hover:decoration-[calc(3/16*1rem)]'
    'focus-visible:rounded focus-visible:outline focus-visible:outline-4 focus-visible:outline-black focus-visible:outline-offset-[calc(2/16*1rem)] focus-visible:bg-yellow-300 focus-visible:text-blue-1000 focus-visible:ring-[calc(2/16*1rem)] focus-visible:ring-yellow-300'
    'active:text-orange-700 active:decoration-1'
    */
  },
});

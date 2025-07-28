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
    /**
     * text-blue-1000 visited:text-magenta-900 hover:text-blue-1000
     * focus-visible:text-blue-1000 active:text-orange-700
     */
    colorPalette: "keyColor",
    color: {
      base: "colorPalette.1000",
      _visited: "magenta.900",
      _hover: "colorPalette.1000",
      _focusVisible: "colorPalette.1000",
      _active: "orange.700",
    },
    /**
     * focus-visible:bg-yellow-300
     */
    bg: {
      base: "transparent",
      _focusVisible: "yellow.300",
    },
    /**
     * underline underline-offset-[calc(3/16*1rem)] hover:decoration-[calc(3/16*1rem)]
     * active:decoration-1
     */
    textDecoration: "underline",
    textDecorationThickness: {
      base: "1px",
      _hover: "calc(3 / 16 * 1rem)",
      _active: "1px",
    },
    textUnderlineOffset: "calc(3 / 16 * 1rem)",
    /**
     * focus-visible:rounded-4
     * focus-visible:outline focus-visible:outline-4
     * focus-visible:outline-black focus-visible:outline-offset-[calc(2/16*1rem)]
     * focus-visible:ring-[calc(2/16*1rem)] focus-visible:ring-yellow-300
     */
    _focusVisible: {
      rounded: 4,
      outlineStyle: "solid",
      outlineWidth: "4px",
      outlineColor: "black",
      outlineOffset: "calc(2 / 16 * 1rem)",
      focusRing: "calc(2 / 16 * 1rem)",
    },
    /**
     * with icon
     */
    "& > svg": {
      display: "inline",
      ml: 1,
      mb: 1,
      width: "1em",
      height: "1em",
    },
  },
});

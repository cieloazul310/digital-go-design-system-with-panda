/**
 * source:
 * https://github.com/digital-go-jp/design-system-example-components/blob/main/src/components/Button/Button.tsx
 */
import { defineRecipe } from "@pandacss/dev";

export default defineRecipe({
  className: "button",
  description:
    "ボタンは、主にアクション実行またはページ遷移のためのトリガーとして使用します。画面内におけるボタンの重要度に応じて使い分け可能な複数のスタイルがあります。",
  base: {
    colorPalette: "keyColor",
    /**
     * underline-offset-[calc(3/16*1rem)]
     */
    textUnderlineOffset: "calc(3 / 16 * 1rem)",
    /**
     * focus-visible:outline focus-visible:outline-4 focus-visible:outline-black
     * focus-visible:outline-offset-[calc(2/16*1rem)]
     * focus-visible:ring-[calc(2/16*1rem)] focus-visible:ring-yellow-300
     */
    _focusVisible: {
      outlineStyle: "solid",
      outlineWidth: "4px",
      outlineColor: "black",
      outlineOffset: "calc(2 / 16 * 1rem)",
      focusRing: "calc(2 / 16 * 1rem)",
    },
    /**
     * aria-disabled:pointer-events-none aria-disabled:forced-colors:border-[GrayText] aria-disabled:forced-colors:text-[GrayText]
     */
    _disabled: {
      pointerEvents: "none",
    },
    /**
     * button default
     */
    display: "inline-flex",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
  },
  variants: {
    variant: {
      "solid-fill": {
        /**
         * text-white aria-disabled:text-solid-gray-50
         * bg-blue-900 hover:bg-blue-1000 active:bg-blue-1200 aria-disabled:bg-solid-gray-300
         */
        bg: {
          base: "colorPalette.900",
          _hover: "colorPalette.1000",
          _active: "colorPalette.1200",
          _disabled: "solid-gray.300",
        },
        color: { base: "white", _disabled: "solid-gray.50" },
        /**
         * border-4 border-double border-transparent
         * hover:underline active:underline
         */
        borderWidth: "4px",
        borderStyle: "double",
        borderColor: "transparent",
        textDecoration: {
          base: "none",
          _hover: "underline",
          _active: "underline",
        },
      },
      outline: {
        /**
         * bg-white hover:bg-blue-200 active:bg-blue-300 aria-disabled:bg-white
         * text-blue-900 hover:text-blue-1000 active:text-blue-1200
         * aria-disabled:text-solid-gray-300
         */
        bg: {
          base: "white",
          _hover: "colorPalette.200",
          _active: "colorPalette.300",
          _disabled: "white",
        },
        color: {
          base: "colorPalette.900",
          _hover: "colorPalette.1000",
          _active: "colorPalette.1200",
          _disabled: "solid-gray.300",
        },
        /**
         * border border-current hover:underline active:underline
         */
        borderWidth: "1px",
        borderColor: "currentcolor",
        textDecoration: {
          base: "none",
          _hover: "underline",
          _active: "underline",
        },
      },
      text: {
        /**
         *
         * hover:bg-blue-50 active:bg-blue-100 focus-visible:bg-yellow-300
         * aria-disabled:bg-transparent aria-disabled:focus-visible:bg-yellow-300
         * text-blue-900 hover:text-blue-1000 active:text-blue-1200
         * aria-disabled:text-solid-gray-300
         */
        bg: {
          base: "transparent",
          _hover: "colorPalette.50",
          _active: "colorPalette.100",
          _focusVisible: { base: "yellow.300", _hover: "yellow.300" },
          _disabled: "transparent",
        },
        color: {
          base: "colorPalette.900",
          _hover: "colorPalette.1000",
          _active: "colorPalette.1200",
          _disabled: "solid-gray.300",
        },
        /**
         * hover:decoration-[calc(3/16*1rem)] underline
         */
        textDecoration: "underline",
        textDecorationThickness: { base: "1px", _hover: "calc(3 / 16 * 1rem)" },
      },
    },
    size: {
      lg: {
        /**
         * lg: 'min-w-[calc(136/16*1rem)] min-h-14 rounded-8 px-4 py-3 text-oln-16B-100'
         */
        minWidth: "calc(136 / 16 * 1rem)",
        minHeight: 14,
        rounded: 8,
        px: 4,
        py: 3,
        textStyle: "oln-16B-100",
      },
      md: {
        /**
         * md: 'min-w-24 min-h-12 rounded-8 px-4 py-2 text-oln-16B-100',
         */
        minWidth: 24,
        minHeight: 12,
        textStyle: "oln-16B-100",
        px: 4,
        py: 2,
        rounded: 8,
      },
      sm: {
        /**
         * sm: 'relative min-w-20 min-h-9 rounded-6 px-3 py-0.5 text-oln-16B-100 after:absolute after:inset-x-0 after:-inset-y-full after:m-auto after:h-[44px]',
         */
        position: "relative",
        minWidth: 20,
        minHeight: 9,
        textStyle: "oln-16B-100",
        py: 0.5,
        rounded: 6,
        _after: {
          position: "absolute",
          insetInline: 0,
          insetBlock: "full",
          m: "auto",
          height: "44px",
        },
      },
      xs: {
        /**
         * xs: 'relative min-w-18 min-h-7 rounded-4 px-2 py-0.5 text-oln-14B-100 after:absolute after:inset-x-0 after:-inset-y-full after:m-auto after:h-[44px]',
         */
        minWidth: 18,
        minHeight: 7,
        textStyle: "oln-14B-100",
        px: 2,
        py: 0.5,
        rounded: 4,
        _after: {
          position: "absolute",
          insetInline: 0,
          insetBlock: "full",
          m: "auto",
          height: "44px",
        },
      },
    },
  },
  defaultVariants: {
    variant: "solid-fill",
    size: "md",
  },
});

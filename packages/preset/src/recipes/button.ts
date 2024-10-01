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
    borderWidth: "1px",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    _focusVisible: {
      outlineWidth: "4px",
      outlineColor: "black",
      outlineOffset: "calc(2/16*1rem)",
      borderInset: "md",
    },
    _disabled: {
      pointerEvents: "none",
    },
  },
  variants: {
    variant: {
      "solid-fill": {
        bg: {
          base: "keyColor.900",
          _hover: "keyColor.1000",
          _active: "keyColor.1200",
          _disabled: "solid-gray.300",
        },
        color: { base: "white", _disabled: "solid-gray.50" },
        borderColor: "transparent",
        textDecoration: {
          base: "none",
          _hover: "underline",
          _active: "underline",
        },
      },
      outline: {
        bg: { base: "white", _hover: "keyColor.200", _active: "keyColor.300" },
        color: {
          base: "keyColor.900",
          _hover: "keyColor.1000",
          _active: "keyColor.1200",
          _disabled: "solid-gray.300",
        },
        borderColor: "keyColor.900",
        textDecoration: {
          base: "none",
          _hover: "underline",
          _active: "underline",
        },
      },
      text: {
        bg: {
          base: "transparent",
          _hover: "keyColor.50",
          _active: "keyColor.100",
          _focusVisible: "yellow.300",
          _disabled: "transparent",
        },
        color: {
          base: "keyColor.900",
          _hover: "keyColor.1000",
          _active: "keyColor.1200",
          _disabled: "solid-gray.300",
        },
        borderColor: "transparent",
        textDecoration: "underline",
      },
    },
    size: {
      lg: {
        minWidth: "136px",
        minHeight: "56px",
        textStyle: "oln-16B-100",
        p: 4,
        rounded: "sm",
      },
      md: {
        minWidth: "96px",
        minHeight: "48px",
        textStyle: "oln-16B-100",
        px: 4,
        py: 3,
        rounded: "sm",
      },
      sm: {
        minWidth: "80px",
        minHeight: "36px",
        textStyle: "oln-16B-100",
        px: 3,
        py: 1.5,
        rounded: "sm",
      },
      xs: {
        minWidth: "72px",
        minHeight: "28px",
        textStyle: "oln-14B-100",
        px: 2,
        py: 1.5,
        rounded: "xs",
      },
    },
  },
  defaultVariants: {
    variant: "solid-fill",
    size: "md",
  },
});

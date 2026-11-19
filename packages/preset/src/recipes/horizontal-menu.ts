/**
 * source:
 * https://github.com/digital-go-jp/design-system-example-components-react/blob/main/src/components/HorizontalMenu/HorizontalMenu.tsx
 */
import { defineRecipe } from "@pandacss/dev";

export const horizontalMenu = defineRecipe({
  className: "horizontal-menu",
  description:
    "水平メニューは、利用者を目的のページへ誘導するためのグローバルナビゲーションです。",
  base: {
    colorPalette: "keyColor",
    textStyle: "dns-16B-130",
    position: "relative",
    display: "flex",
    alignItems: "center",
    gap: 1,
    minHeight: 16,
    px: 5,
    py: 4,
    cursor: "pointer",
    _hover: {
      bg: "solid-gray.50",
      _after: {
        content: '""',
        position: "absolute",
        insetInline: 0,
        bottom: 0,
        borderBottomWidth: "2px",
        borderColor: "black",
      },
    },
    '&[aria-current]:not([aria-current="false"])': {
      bg: "white",
      color: "colorPalette.1000",
      _after: {
        content: '""',
        position: "absolute",
        insetInline: 0,
        bottom: 0,
        borderBottomWidth: "4px",
        borderColor: "colorPalette.900",
      },
      _hover: {
        color: "colorPalette.900",
        textDecoration: "underline",
        textUnderlineOffset: "calc(3 / 16 * 1rem)",
        textDecorationThickness: "calc(1 / 16 * 1rem)",
      },
    },
    _focusVisible: {
      zIndex: 10,
      rounded: 4,
      bg: "yellow.300",
      outlineStyle: "solid",
      outlineWidth: "4px",
      outlineColor: "black",
      outlineOffset: 0.5,
      focusBox: "calc({spacing.1} / 2)",
      '&[aria-current]:not([aria-current="false"])': {
        bg: "white",
      },
    },
    "& > svg": {
      // shrink-0 size-6
      flexShrink: 0,
      width: 6,
      height: 6,
    },
  },
});

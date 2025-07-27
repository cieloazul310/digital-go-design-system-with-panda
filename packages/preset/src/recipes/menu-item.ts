/**
 * reference:
 * https://github.com/digital-go-jp/design-system-example-components/blob/main/src/components/LanguageSelector/parts/MenuItem.tsx
 */
import { defineRecipe } from "@pandacss/dev";

export default defineRecipe({
  className: "menu-item",
  base: {
    /**
     * flex relative items-center bg-white hover:bg-solid-gray-50 text-nowrap
     * text-oln-16N-100 text-solid-gray-800
     * ${isCurrent ? '!text-blue-1000 !bg-blue-100 font-bold' : ''}
     */
    display: "flex",
    position: "relative",
    alignItems: "center",
    textStyle: "dns-16N-130",
    colorPalette: "keyColor",
    bg: {
      base: "transparent",
      _hover: "solid-gray.50",
      _selected: {
        base: "colorPalette.100",
        _hover: "colorPalette.100",
      },
      _checked: {
        base: "colorPalette.100",
        _hover: "colorPalette.100",
      },
      _open: {
        base: "colorPalette.50",
        _hover: "colorPalette.50",
      },
    },
    color: {
      base: "solid-gray.800",
      _selected: "colorPalette.1000",
      _checked: "colorPalette.1000",
      _open: "colorPalette.1000",
    },
    fontWeight: { base: "normal", _selected: "bold", _checked: "bold" },
    /**
     * hover:underline hover:underline-offset-[calc(3/16*1rem)]
     */
    _hover: {
      textDecoration: "underline",
      textUnderlineOffset: "calc(3 / 16 * 1rem)",
    },
    /**
     * py-3 pl-3 pr-6 gap-x-2
     */
    py: 3,
    pl: 3,
    pr: 6,
    columnGap: 2,
    /**
     * focus-visible:outline focus-visible:outline-4 focus-visible:outline-black
     * focus-visible:-outline-offset-4 focus-visible:bg-yellow-300
     * focus-visible:ring-[calc(6/16*1rem)] focus-visible:ring-inset
     * focus-visible:ring-yellow-300
     */
    _focusVisible: {
      // rounded: 4,
      outlineStyle: "solid",
      outlineWidth: "4px",
      outlineColor: "black",
      outlineOffset: "calc(2 / 16 * 1rem)",
      focusRing: "calc(6 / 16 * 1rem)",
    },
  },
  variants: {
    variant: {
      standard: {
        rounded: 4,
      },
      boxed: {
        rounded: {
          base: 0,
          _focusVisible: 4,
        },
      },
    },
    isCondensed: {
      true: {
        /**
         * ${isCondensed ? 'py-1.5 pl-1.5 pr-4 gap-x-1.5'}
         */
        py: 1.5,
        pl: 1.5,
        pr: 4,
        columnGap: 1.5,
      },
    },
  },
  defaultVariants: {
    variant: "standard",
    isCondensed: false,
  },
});

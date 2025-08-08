/**
 * source:
 * https://github.com/digital-go-jp/design-system-example-components/blob/main/src/components/HamburgerMenuButton/HamburgerMenuButton.tsx
 */
import { defineRecipe } from "@pandacss/dev";

export default defineRecipe({
  className: "hamburger-menu-button",
  base: {
    /**
     * flex w-fit items-center text-oln-16N-100 rounded-6 touch-manipulation
     */
    display: "flex",
    width: "fit-content",
    alignItems: "center",
    textStyle: "oln-16N-100",
    rounded: 6,
    /**
     * gap-x-1 px-3 pb-1.5 pt-1
     */
    px: 3,
    pb: 1.5,
    pt: 1,
    touchAction: "manipulation",
    columnGap: 1.5,
    /**
     * hover:bg-solid-gray-50 hover:underline hover:underline-offset-[calc(3/16*1rem)]
     */
    _hover: {
      bg: "solid-gray.50",
      textDecoration: "underline",
      textUnderlineOffset: "calc(3 / 16 * 1rem)",
    },
    /**
     * focus-visible:outline focus-visible:outline-4 focus-visible:outline-black
     * focus-visible:outline-offset-[calc(2/16*1rem)] focus-visible:bg-yellow-300
     * focus-visible:ring-[calc(2/16*1rem)] focus-visible:ring-yellow-300
     */
    _focusVisible: {
      bg: "yellow.300",
      outlineStyle: "solid",
      outlineWidth: "4px",
      outlineColor: "black",
      outlineOffset: "calc(2 / 16 * 1rem)",
      focusRing: "calc(2 / 16 * 1rem)",
    },
    /**
     * override reset
     */
    cursor: "pointer",
  },
});

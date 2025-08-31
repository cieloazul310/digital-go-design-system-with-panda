/**
 * https://github.com/digital-go-jp/design-system-example-components-react/blob/main/src/components/UtilityLink/UtilityLink.tsx
 */
import { defineRecipe } from "@pandacss/dev";

export default defineRecipe({
  className: "utility-link",
  description:
    "ユーティリティリンクはふつうの横並びリンクリストに近いが、それよりもコンパクトに作られています。",
  base: {
    colorPalette: "keyColor",
    /**
     * !text-solid-gray-800 text-dns-16N-130
     * focus-visible:bg-yellow-300 focus-visible:text-blue-1000
     */
    textStyle: "dns-16N-130",
    color: {
      base: "solid-gray.800",
      _focusVisible: "colorPalette.primary.100",
    },
    bg: { base: "transparent", _focusVisible: "yellow.300" },
    /**
     * underline underline-offset-[calc(3/16*1rem)]
     * hover:decoration-[calc(3/16*1rem)]
     */
    textDecoration: "underline",
    textDecorationThickness: {
      base: "1px",
      _hover: "calc(3 / 16 * 1rem)",
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
    display: "inline-flex",
    alignItems: "center",
    gap: 1,
    "& svg": {
      width: "1em",
      height: "1em",
    },
  },
});

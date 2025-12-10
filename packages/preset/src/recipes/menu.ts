/**
 * source:
 * https://github.com/digital-go-jp/design-system-example-components-react/blob/main/src/components/LanguageSelector/parts/Menu.tsx
 * https://github.com/digital-go-jp/design-system-example-components-react/blob/main/src/components/LanguageSelector/parts/MenuItem.tsx
 */
import { defineSlotRecipe, type SystemStyleObject } from "@pandacss/dev";
import { anatomy as menuAnatomy } from "@zag-js/menu";
import menuItem from "./menu-item";

const itemStyle = {
  ...menuItem.base,
} satisfies SystemStyleObject;

export default defineSlotRecipe({
  className: "menu",
  slots: menuAnatomy.keys(),
  base: {
    content: {
      minWidth: "fit-content",
      width: "auto",
      maxHeight: "calc((44 * 6.5 + 16) / 16 * 1rem)",
      py: 2,
      borderWidth: "1px",
      borderColor: "solid-gray.420",
      bg: "white",
      rounded: 8,
      boxShadow: 1,
      /**
     * min-w-fit w-auto py-2 border border-solid-grey-420 bg-white shadow-1 rounded-lg
      has-[>:nth-child(7)]:rounded-r-none
      ${isCondensed ? 'max-h-[calc((32*6.5+16)/16*1rem)]' : 'max-h-[calc((44*6.5+16)/16*1rem)]'}
     */
    },
    itemGroupLabel: {
      ...itemStyle,
      fontWeight: "bold",
    },
    triggerItem: {
      ...itemStyle,
    },
    item: {
      ...itemStyle,
      textDecoration: {
        base: "none",
        _hover: "underline",
      },
      textUnderlineOffset: "calc(3 / 16 * 1rem)",
      _checked: {
        bg: "colorPalette.100",
        color: "colorPalette.primary.100",
        fontWeight: "bold",
      },
      _focusVisible: {
        outlineStyle: "solid",
        outlineWidth: "4px",
        outlineColor: "black",
        outlineOffset: "calc(2 / 16 * 1rem)",
        focusBox: "calc(2 / 16 * 1rem)",
        zIndex: 1,
      },
      /**
     * flex relative items-center bg-white text-nowrap text-oln-16N-1 text-solid-grey-800
          ${isCondensed ? 'py-1.5 pl-1.5 pr-4 gap-x-1.5' : 'py-3 pl-3 pr-6 gap-x-2'}
          ${isCurrent && '!text-blue-1000 !bg-blue-100 font-bold'}
          hover:underline hover:underline-offset-[calc(3/16*1rem)] hover:bg-solid-grey-50
          focus-visible:outline focus-visible:outline-4 focus-visible:outline-black focus-visible:-outline-offset-4 focus-visible:bg-yellow-300 focus-visible:ring-[calc(6/16*1rem)] focus-visible:ring-inset focus-visible:ring-yellow-300
          ${className ?? ''}
     */
    },
  },
  variants: {
    isCondensed: {
      true: {
        content: {
          maxHeight: "calc((32 * 6.5 + 16) / 16 * 1rem)",
        },
        itemGroupLabel: {
          py: 1.5,
          pl: 1.5,
          pr: 4,
          columnGap: 1.5,
        },
        item: {
          py: 1.5,
          pl: 1.5,
          pr: 4,
          columnGap: 1.5,
        },
        triggerItem: {
          py: 1.5,
          pl: 1.5,
          pr: 4,
          columnGap: 1.5,
        },
      },
    },
  },
  defaultVariants: {
    isCondensed: false,
  },
});

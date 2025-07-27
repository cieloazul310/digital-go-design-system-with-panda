/**
 * source:
 * https://github.com/digital-go-jp/design-system-example-components/blob/main/src/components/Radio/Radio.tsx
 */
import { defineSlotRecipe } from "@pandacss/dev";
import { anatomy as radioGroupAnatomy } from "@zag-js/radio-group";
import radio from "./radio";

export default defineSlotRecipe({
  className: "radio-group",
  slots: radioGroupAnatomy.keys(),
  base: {
    root: {
      display: "flex",
      colorPalette: "keyColor",
      _vertical: {
        flexDirection: "column",
        gap: 0,
      },
      _horizonal: {
        flexDirection: "row",
        gap: 4,
      },
    },
    item: {
      ...radio.base?.item,
    },
    itemControl: {
      ...radio.base?.itemControl,
    },
    itemText: {
      ...radio.base?.itemText,
    },
  },
  variants: {
    size: {
      sm: {
        item: {
          ...radio.variants?.size?.sm?.item,
        },
        itemControl: {
          ...radio.variants?.size?.sm?.itemControl,
        },
        itemText: {
          ...radio.variants?.size?.sm?.itemText,
        },
      },
      md: {
        item: {
          ...radio.variants?.size?.md?.item,
        },
        itemControl: {
          ...radio.variants?.size?.md?.itemControl,
        },
        itemText: {
          ...radio.variants?.size?.md?.itemText,
        },
      },
      lg: {
        item: {
          ...radio.variants?.size?.lg?.item,
        },
        itemControl: {
          ...radio.variants?.size?.lg?.itemControl,
        },
        itemText: {
          ...radio.variants?.size?.lg?.itemText,
        },
      },
    },
  },
  defaultVariants: {
    size: "sm",
  },
});

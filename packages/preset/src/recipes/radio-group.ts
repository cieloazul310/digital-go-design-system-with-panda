/**
 * source:
 * https://github.com/digital-go-jp/design-system-example-components/blob/main/src/components/Radio/Radio.tsx
 */
import { defineSlotRecipe } from "@pandacss/dev";
import { anatomy as radioGroupAnatomy } from "@ark-ui/anatomy/radio-group";
import radio from "./radio";

export default defineSlotRecipe({
  className: "radio-group",
  slots: radioGroupAnatomy.keys(),
  base: {
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

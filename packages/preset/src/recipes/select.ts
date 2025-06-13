/**
 * source:
 * https://github.com/digital-go-jp/design-system-example-components/blob/main/src/components/Select/Select.tsx
 */
import { defineSlotRecipe } from "@pandacss/dev";
import { anatomy as selectAnatomy } from "@ark-ui/anatomy/select";
import label from "./label";
import selectBox from "./select-box";
import menu from "./menu";

export default defineSlotRecipe({
  className: "select",
  description:
    "セレクトボックスは、複数の選択肢を提供するフォームコントロールです。",
  slots: selectAnatomy.keys(),
  base: {
    root: {
      display: "flex",
      flexDirection: "column",
      gap: 1.5,
    },
    label: {
      ...label.base,
    },
    control: {
      /**
       * relative min-w-80 max-w-full
       */
      position: "relative",
      minWidth: "80px",
      maxWidth: "full",
    },
    trigger: {
      ...selectBox.base,
      /**
       * adapt to clearTrigger
       */
      pr: 20,
    },
    indicator: {
      /**
       * pointer-events-none absolute right-4 top-1/2 -translate-y-1/2
       */
      pointerEvents: "none",
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      right: 4,
      /**
       * ${props['aria-disabled'] ? 'text-solid-gray-420 forced-colors:text-[GrayText]' : 'text-solid-gray-900 forced-colors:text-[CanvasText]'}
       */
      color: {
        base: { base: "solid-gray.900", _highContrast: "CanvasText" },
        _disabled: { base: "solid-gray.420", _highContrast: "GrayText" },
      },
    },
    clearTrigger: {
      position: "absolute",
      top: "50%",
      right: 12,
      transform: "translateY(-50%)",
    },
    content: {
      ...menu.base?.content,
    },
    itemGroupLabel: {
      textStyle: "oln-16N-1",
      fontWeight: "bold",
      py: 3,
      pl: 3,
      pr: 6,
    },
    item: {
      ...menu.base?.item,
    },
    itemIndicator: {
      pointerEvents: "none",
      position: "absolute",
      right: 4,
      top: "50%",
      transform: "translateY(-50%)",
    },
  },
  variants: {
    size: {
      lg: {
        trigger: {
          ...selectBox.variants?.size?.lg,
        },
        label: { ...label.variants?.size?.lg },
      },
      md: {
        trigger: {
          ...selectBox.variants?.size?.md,
        },
        label: { ...label.variants?.size?.md },
      },
      sm: {
        trigger: {
          ...selectBox.variants?.size?.sm,
        },
        label: { ...label.variants?.size?.sm },
      },
    },
    invalid: {
      true: {
        trigger: {
          ...selectBox.variants?.invalid?.true,
        },
      },
    },
  },
  defaultVariants: {
    size: "lg",
    invalid: false,
  },
});

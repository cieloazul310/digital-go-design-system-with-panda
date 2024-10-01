/**
 * sources:
 * https://github.com/digital-go-jp/design-system-example-components/blob/main/src/components/Label/Label.tsx
 * https://github.com/digital-go-jp/design-system-example-components/blob/main/src/components/ErrorText/ErrorText.tsx
 * https://github.com/digital-go-jp/design-system-example-components/blob/main/src/components/SupportText/SupportText.tsx
 */
import { defineSlotRecipe } from "@pandacss/dev";
import { anatomy as fieldAnatomy } from "@ark-ui/anatomy/field";

const inputText = defineSlotRecipe({
  className: "input-text",
  description:
    "インプットテキストコンポーネントは、名前や電話番号など、1行以内のテキストを入力する場合に使用します。",
  slots: fieldAnatomy.keys(),
  base: {
    root: {
      display: "flex",
      flexDirection: "column",
      gap: 1,
    },
    label: {
      /**
       * flex w-fit items-center gap-2 text-solid-gray-800
       */
      display: "flex",
      width: "fit-content",
      alignItems: "center",
      gap: 2,
      color: "solid-gray.800",
    },
    input: {
      minWidth: "80px",
      maxWidth: "full",
      rounded: 8,
      px: 4,
      py: 3,
      borderWidth: "1px",
      borderColor: {
        vase: "solid-gray.900",
        _error: "error.1",
        _disabled: "solid-gray.300",
      },
      color: { base: "solid-gray.800", _disabled: "solid-gray.420" },
      bg: { base: "white", _disabled: "solid-gray.50" },
      textStyle: "oln-16N-100",
      _focus: {
        outlineWidth: "4px",
        outlineColor: "black",
        outlineOffset: "calc(2/16*1rem)",
        borderInset: "md",
      },
    },
    errorText: {
      textStyle: "dns-16N-130",
      color: "error.1",
    },
    helperText: {
      textStyle: "dns-16N-170",
      color: "solid-gray.700",
    },
  },
  variants: {
    size: {
      lg: {
        label: {
          textStyle: "std-18B-160",
        },
        input: { height: "14" },
      },
      md: {
        label: {
          textStyle: "std-17B-170",
        },
        input: { height: "12" },
      },
      sm: {
        label: {
          textStyle: "std-16B-170",
        },
        input: { height: "10" },
      },
    },
    invalid: {
      true: {
        input: { borderColor: "error.1" },
      },
    },
  },
  defaultVariants: {
    size: "lg",
    invalid: false,
  },
});

export default inputText;

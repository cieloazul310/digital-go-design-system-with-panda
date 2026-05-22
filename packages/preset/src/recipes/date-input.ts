import { defineSlotRecipe } from "@pandacss/dev";
import { anatomy as dateInputAnatomy } from "@zag-js/date-input";
import input from "./input";
import label from "./label";

export default defineSlotRecipe({
  className: "date-input",
  description:
    "日付入力は、日付を分割形式で入力できるフォームコントロールです。",
  slots: dateInputAnatomy.keys(),
  base: {
    root: {
      /**
       * inline-flex h-14 -space-x-1 rounded-8 border border-solid-gray-600 bg-[--bg] p-0.5 pe-0 text-solid-gray-900 [--bg:theme(colors.white)] focus-within:border-black hover:border-solid-gray-900 data-[size=md]:h-12 data-[size=sm]:h-10 data-[readonly]:border-dashed data-[disabled]:border-solid-gray-300 data-[error]:border-error-1 data-[disabled]:text-solid-gray-420 data-[disabled]:[--bg:theme(colors.solid-gray.50)] data-[error]:focus-within:border-red-1000 data-[error]:hover:border-red-1000 data-[error]:hover:data-[readonly]:border-error-1 hover:data-[readonly]:border-solid-gray-600 forced-colors:data-[disabled]:border-[GrayText] forced-colors:data-[disabled]:text-[GrayText] ${className ?? ''}
       */
      display: "flex",
      flexDirection: "column",
      gap: 1.5,
    },
    label: {
      ...label.base,
    },
    control: {
      display: "flex",
      alignItems: "center",
      gap: 2,
    },
    segmentGroup: {
      display: "flex",
      alignItems: "center",
      gap: 1,
      borderWidth: "1px",
      borderStyle: "solid",
      borderColor: "solid-gray.600",
      rounded: 8,
      py: 2,
      px: 3,
      bg: "white",
    },
    segment: {
      ...input.base,
      borderWidth: "0px",
      bg: "transparent",
      px: 0,
      minWidth: 10,
      width: {
        "&[data-type=year]": 16,
        "&[data-type=month]": 11,
        "&[data-type=day]": 11,
      },
      textAlign: "right",
    },
    hiddenInput: {
      display: "none",
    },
  },
  variants: {
    variant: {
      consolidated: {},
      separated: {},
    },
    size: {
      sm: {},
      md: {},
      lg: {},
    },
  },
  defaultVariants: {
    variant: "consolidated",
    size: "lg",
  },
});

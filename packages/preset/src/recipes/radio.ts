/**
 * source:
 * https://github.com/digital-go-jp/design-system-example-components/blob/main/src/components/Radio/Radio.tsx
 */
import { defineSlotRecipe } from "@pandacss/dev";

export default defineSlotRecipe({
  className: "radio",
  slots: ["item", "itemControl", "itemText"],
  base: {
    item: {
      /**
       * flex w-fit items-start py-2
       */
      display: "flex",
      width: "fit-content",
      alignItems: "start",
      py: 2,
    },
    itemControl: {
      /**
       * flex items-center justify-center shrink-0 rounded-full
       * has-[input:hover:not(:focus):not([aria-disabled="true"])]:bg-solid-gray-420
       */
      /*
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
      rounded: "full",
      */
      /**
       * checked:before:bg-blue-900
       * checked:hover:before:bg-blue-1100
       * before:hidden before:size-full
       * before:bg-white before:[clip-path:circle(calc(5/16*100%))]
       * checked:before:block
       * data-[error]:checked:before:bg-error-1
       * data-[error]:checked:hover:before:bg-red-1000
       * aria-disabled:checked:before:!bg-solid-gray-300
       * forced-colors:checked:before:!bg-[Highlight]
       * forced-colors:aria-disabled:checked:before:!bg-[GrayText]
       */
      /**
       * appearance-none size-[calc(5/6*100%)] rounded-full
       */
      appearance: "none",
      rounded: "full",
      /**
       * bg-white aria-disabled:!bg-solid-gray-50
       */
      bg: { base: "white", _disabled: "solid-gray.50" },
      borderColor: {
        /**
         * border-solid-gray-600
         * hover:border-black
         * checked:border-blue-900
         * checked:hover:border-blue-1100
         * forced-colors:!border-[ButtonText] forced-colors:checked:!border-[Highlight]
         */
        base: "solid-gray.600",
        _hover: "black",
        _highContrast: { base: "ButtonText" },
        _checked: {
          base: "blue.900",
          _hover: "blue.1100",
          _highContrast: "Highlight",
        },
        /**
         * data-[error]:border-error-1 data-[error]:hover:border-red-1000
         */
        _invalid: { base: "error.1", _hover: "red.1000" },
        /**
         * aria-disabled:!border-solid-gray-300
         * forced-colors:aria-disabled:!border-[GrayText]
         */
        _disabled: { base: "solid-gray.300", _highContrast: "GrayText" },
      },
      /**
       * focus:outline focus:outline-4 focus:outline-black
       * focus:outline-offset-[calc(2/16*1rem)]
       * focus:ring-[calc(2/16*1rem)] focus:ring-yellow-300
       */
      _focus: {
        outlineWidth: "4px",
        outlineColor: "black",
        outlineOffset: "calc(2 / 16 * 1rem)",
        borderInset: "md",
      },
    },
    itemText: {
      /**
       * text-solid-gray-800
       */
      color: "solid-gray.800",
    },
  },
  variants: {
    size: {
      sm: {
        item: {
          /**
           * data-[size=sm]:gap-1
           */
          gap: 1,
        },
        itemControl: {
          /**
           * data-[size=sm]:size-6 data-[size=md]:size-8 data-[size=lg]:size-11
           */
          width: 6,
          height: 6,
          /**
           * data-[size=sm]:border-[calc(2/16*1rem)]
           */
          borderWidth: "calc(2 / 16 * 1rem)",
        },
        itemText: {
          /**
           * data-[size=sm]:pt-px
           * data-[size=sm]:text-dns-16N-130
           */
          pt: "1px",
          textStyle: "dns-16N-130",
        },
      },
      md: {
        item: {
          /**
           * data-[size=md]:gap-2
           */
          gap: 2,
        },
        itemControl: {
          /**
           * data-[size=md]:size-8
           */
          width: 8,
          height: 8,
          /**
           * data-[size=md]:border-[calc(2/16*1rem)]
           */
          borderWidth: "calc(2 / 16 * 1rem)",
        },
        itemText: {
          /**
           * data-[size=md]:pt-1
           * data-[size=md]:text-dns-16N-130
           */
          pt: 1,
          textStyle: "dns-16N-130",
        },
      },
      lg: {
        item: {
          /**
           * data-[size=lg]:gap-3
           */
          gap: 3,
        },
        itemControl: {
          /**
           * data-[size=lg]:size-11
           */
          width: 11,
          height: 11,
          /**
           * data-[size=lg]:border-[calc(3/16*1rem)]
           */
          borderWidth: "calc(3 / 16 * 1rem)",
        },
        itemText: {
          /**
           * data-[size=lg]:pt-2.5
           * data-[size=lg]:text-dns-17N-130
           */
          pt: 2.5,
          textStyle: "dns-17N-130",
        },
      },
    },
  },
  defaultVariants: {
    size: "sm",
  },
});

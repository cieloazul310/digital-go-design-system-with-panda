/**
 * source:
 * https://github.com/digital-go-jp/design-system-example-components-react/blob/main/src/components/Radio/Radio.tsx
 */
import { defineSlotRecipe } from "@pandacss/dev";
import { anatomy as radioGroupAnatomy } from "@zag-js/radio-group";
import legend from "./legend";

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
    label: {
      ...legend.base,
    },
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
       * appearance-none size-[calc(5/6*100%)] rounded-full
       */
      appearance: "none",
      rounded: "full",
      width: "calc(var(--radio-size) * 5 / 6)",
      height: "calc(var(--radio-size) * 5 / 6)",
      m: "calc(var(--radio-size) / 12)",
      flexShrink: 0,
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
          base: "colorPalette.primary",
          _hover: "colorPalette.primary.200",
          _disabled: { base: "solid-gray.300", _highContrast: "GrayText" },
          _highContrast: "Highlight",
        },
        /**
         * data-[error]:border-error-1 data-[error]:hover:border-red-1000
         */
        _invalid: {
          base: "error.1",
          _hover: "red.1000",
          _disabled: "solid-gray.300",
        },
        /**
         * aria-disabled:!border-solid-gray-300
         * forced-colors:aria-disabled:!border-[GrayText]
         */
        _disabled: { base: "solid-gray.300", _highContrast: "GrayText" },
      },
      /**
       * outline on hover
       * has-[input:hover:not(:focus):not([aria-disabled="true"])]:bg-solid-gray-420
       */
      '&:is(:hover, [data-hover]):not([aria-disabled="true"])': {
        outlineStyle: "solid",
        outlineWidth: "calc(var(--radio-size) / 12)",
        outlineColor: "solid-gray.420",
        _focus: {
          outlineStyle: "solid",
          outlineWidth: "4px",
          outlineColor: "black",
          outlineOffset: "calc(2 / 16 * 1rem)",
          focusRing: "calc(2 / 16 * 1rem)",
        },
      },
      /**
       * focus:outline focus:outline-4 focus:outline-black
       * focus:outline-offset-[calc(2/16*1rem)]
       * focus:ring-[calc(2/16*1rem)] focus:ring-yellow-300
       */
      _focus: {
        outlineStyle: "solid",
        outlineWidth: "4px",
        outlineColor: "black",
        outlineOffset: "calc(2 / 16 * 1rem)",
        focusRing: "calc(2 / 16 * 1rem)",
      },
      _before: {
        /**
         * before:hidden
         * before:size-full
         * before:[clip-path:circle(calc(5/16*100%))]
         * before:bg-white
         */
        content: '""',
        display: "none",
        width: "full",
        height: "full",
        clipPath: "circle(calc(5 / 16 * 100%))",
        bg: "white",
      },
      _checked: {
        /**
         * checked:before:block
         * checked:before:bg-blue-900 checked:hover:before:bg-blue-1100
         * data-[error]:checked:before:bg-error-1
         * data-[error]:checked:hover:before:bg-red-1000
         * aria-disabled:checked:before:!bg-solid-gray-300
         * forced-colors:checked:before:!bg-[Highlight]
         * forced-colors:aria-disabled:checked:before:!bg-[GrayText]
         */
        _before: {
          display: "block",
          bg: {
            base: "colorPalette.primary",
            _hover: "colorPalette.primary.200",
            _highContrast: "Highlight",
          },
        },
        _invalid: {
          _before: {
            bg: {
              base: "error.1",
              _hover: "red.1000",
            },
          },
        },
        _disabled: {
          _before: {
            bg: {
              base: "solid-gray.300",
              _highContrast: "GrayText",
            },
          },
          _invalid: {
            _before: {
              bg: {
                base: "solid-gray.300",
              },
            },
          },
        },
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
        label: {
          ...legend.variants?.size?.sm,
        },
        item: {
          /**
           * data-[size=sm]:gap-1
           */
          gap: 1,
        },
        itemControl: {
          /**
           * data-[size=sm]:size-6
           */
          "--radio-size": "{spacing.6}",
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
        label: {
          ...legend.variants?.size?.md,
        },
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
          "--radio-size": "{spacing.8}",
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
        label: {
          ...legend.variants?.size?.lg,
        },
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
          "--radio-size": "{spacing.11}",
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

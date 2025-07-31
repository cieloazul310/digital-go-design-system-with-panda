import { defineSlotRecipe } from "@pandacss/dev";
import { anatomy as checkboxAnatomy } from "@zag-js/checkbox";

export default defineSlotRecipe({
  className: "checkbox",
  slots: checkboxAnatomy.extendWith("group").keys(),
  base: {
    root: {
      /**
       * flex w-fit items-start py-2
       */
      display: "flex",
      alignItems: "flex-start",
      width: "fit-content",
      py: 2,
      colorPalette: "keyColor",
    },
    control: {
      /**
       * flex items-center justify-center shrink-0 rounded-[calc(1/8*100%)]
       * has-[input:hover:not(:focus):not([aria-disabled="true"])]:bg-solid-gray-420
       */
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
      rounded: "calc(1 / 4 * 100%)",
      outlineStyle: "solid",
      outlineWidth: "2px",
      outlineColor: {
        base: "solid-gray.420",
        _invalid: { base: "error.1", _disabled: "solid-gray.420" },
        _groupHover: { base: "black", _disabled: "solid-gray.420" },
      },
      _disabled: {
        bg: "solid-gray.50",
      },
    },
    indicator: {
      /**
       * appearance-none size-3/4 rounded-[calc(2/18*100%)]
       */
      appearance: "none",
      width: "3/4",
      height: "3/4",
      rounded: "calc(2 / 18 * 100%)",
      zIndex: 1,
      borderColor: {
        /**
         * border-solid-gray-600 hover:border-black
         * forced-colors:!border-[ButtonText]
         */
        base: "solid-gray.600",
        _hover: "black",
        _highContrast: "ButtonText",
        _checked: {
          /**
           * checked:border-blue-900 checked:hover:border-blue-1100
           * forced-colors:checked:!border-[Highlight]
           */
          base: "colorPalette.primary",
          _hover: "colorPalette.primary.200",
          _highContrast: "Highlight",
        },
        _indeterminate: {
          /**
           * indeterminate:border-blue-900 indeterminate:hover:border-blue-1100
           * forced-colors:indeterminate:!border-[Highlight]
           */
          base: "colorPalette.primary",
          _hover: "colorPalette.primary.200",
          _highContrast: "Highlight",
        },
        _invalid: {
          /**
           * data-[error]:border-error-1 data-[error]:hover:border-red-1000
           */
          base: "error.1",
          _disabled: "solid-gray.300",
          _hover: { base: "red.1000", _disabled: "solid-gray.300" },
        },
        _disabled: {
          /**
           * aria-disabled:!border-solid-gray-300
           * forced-colors:aria-disabled:!border-[GrayText]
           */
          base: "solid-gray.300",
          _highContrast: "GrayText",
        },
      },
      bg: {
        /**
         * bg-white
         */
        base: "white",
        /**
         * checked:bg-blue-900 checked:hover:bg-blue-1100
         * forced-colors:checked:!bg-[Highlight]
         */
        _checked: {
          base: "colorPalette.primary",
          _hover: "colorPalette.primary.200",
          _highContrast: "Highlight",
        },
        _indeterminate: {
          /**
           * indeterminate:bg-blue-900 indeterminate:hover:bg-blue-1100
           * forced-colors:indeterminate:!bg-[Highlight]
           */
          base: "colorPalette.primary",
          _hover: "colorPalette.primary.200",
          _highContrast: "Highlight",
        },
        /**
         * data-[error]:indeterminate:bg-error-1
         * data-[error]:indeterminate:hover:bg-red-1000
         * data-[error]:checked:bg-error-1 data-[error]:checked:hover:bg-red-1000
         */
        _invalid: {
          _indeterminate: {
            base: "error.1",
            _hover: "red.1000",
            _disabled: "solid-gray.300",
          },
          _checked: {
            base: "error.1",
            _hover: "red.1000",
            _disabled: "solid-gray.300",
          },
        },
        /**
         * aria-disabled:!bg-solid-gray-50
         * aria-disabled:checked:!bg-solid-gray-300
         * aria-disabled:indeterminate:!bg-solid-gray-300
         * forced-colors:aria-disabled:checked:!bg-[GrayText]
         */
        _disabled: {
          base: "solid-gray.50",
          _checked: "solid-gray.300",
          _indeterminate: "solid-gray.300",
          _highContrast: {
            _checked: "GrayText",
          },
        },
      },
      /**
       * bg-clip-padding
       */
      backgroundClip: "padding-box",
      /**
       * before:hidden checked:before:block indeterminate:before:block
       * before:size-3.5
       * before:bg-white
       * forced-colors:before:!bg-[HighlightText]
       * aria-disabled:before:border-solid-gray-50
       */
      _before: {
        content: '""',
        display: "none",
        width: 3.5,
        height: 3.5,
        bg: { base: "white", _highContrast: "HighlightText" },
        borderColor: { _disabled: "solid-gray.50" },
      },
      /**
       * checked:before:[clip-path:path('M5.6,11.2L12.65,4.15L11.25,2.75L5.6,8.4L2.75,5.55L1.35,6.95L5.6,11.2Z')]
       * indeterminate:before:[clip-path:path('M3.25,7.75H10.75V6.25H3.25V7.75Z')]
       */
      _checked: {
        _before: {
          display: "block",
          clipPath:
            "path('M5.6,11.2L12.65,4.15L11.25,2.75L5.6,8.4L2.75,5.55L1.35,6.95L5.6,11.2Z')",
        },
      },
      _indeterminate: {
        _before: {
          display: "block",
          clipPath: "path('M3.25,7.75H10.75V6.25H3.25V7.75Z')",
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
    },
    label: {
      /**
       * text-solid-gray-800
       * data-[size=sm]:pt-px data-[size=sm]:text-dns-16N-130
       * data-[size=md]:pt-1 data-[size=md]:text-dns-16N-130
       * data-[size=lg]:pt-2.5 data-[size=lg]:text-dns-17N-130
       */
      color: "solid-gray.800",
    },
  },
  variants: {
    size: {
      sm: {
        root: {
          /**
           * data-[size=sm]:gap-1
           */
          gap: 1,
        },
        control: {
          /**
           * data-[size=sm]:size-6
           */
          width: 6,
          height: 6,
          outlineOffset: "-4px",
          boxShadow: {
            _groupHover: {
              base: "inset 0 0 0 2px {colors.solid-gray.420}",
              _disabled: "none",
            },
          },
        },
        indicator: {
          /**
           * data-[size=sm]:border-[calc(2/16*1rem)]
           */
          borderWidth: "calc(2 / 16 * 1rem)",
        },
        label: {
          /**
           * data-[size=sm]:pt-px data-[size=sm]:text-dns-16N-130
           */
          pt: "1px",
          textStyle: "dns-16N-130",
        },
      },
      md: {
        root: {
          /**
           * data-[size=md]:gap-2
           */
          gap: 2,
        },
        control: {
          /**
           * data-[size=md]:size-8
           */
          width: 8,
          height: 8,
          outlineOffset: "-5px",
          boxShadow: {
            _groupHover: {
              base: "inset 0 0 0 4px {colors.solid-gray.420}",
              _disabled: "none",
            },
          },
        },
        indicator: {
          /**
           * data-[size=md]:border-[calc(2/16*1rem)]
           * data-[size=md]:before:origin-top-left
           * data-[size=md]:before:scale-[calc(20/14)]
           */
          borderWidth: "calc(2 / 16 * 1rem)",
          _before: {
            transformOrigin: "top left",
            scale: "calc(20 / 14)",
          },
        },
        label: {
          /**
           * data-[size=md]:pt-1 data-[size=md]:text-dns-16N-130
           */
          pt: 1,
          textStyle: "dns-16N-130",
        },
      },
      lg: {
        root: {
          /**
           * data-[size=lg]:gap-2
           */
          gap: 2,
        },
        control: {
          /**
           * data-[size=lg]:size-11
           */
          width: 11,
          height: 11,
          outlineOffset: "-7px",
          boxShadow: {
            _groupHover: {
              base: "inset 0 0 0 6px {colors.solid-gray.420}",
              _disabled: "none",
            },
          },
        },
        indicator: {
          /**
           * data-[size=lg]:border-[calc(3/16*1rem)]
           * data-[size=lg]:before:origin-top-left
           * data-[size=lg]:before:scale-[calc(27/14)]
           */
          borderWidth: "calc(3 / 16 * 1rem)",
          _before: {
            transformOrigin: "top left",
            scale: "calc(27 / 14)",
          },
        },
        label: {
          /**
           * data-[size=lg]:pt-2.5 data-[size=lg]:text-dns-17N-130
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

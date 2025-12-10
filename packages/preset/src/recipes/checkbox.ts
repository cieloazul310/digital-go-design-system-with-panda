import { defineSlotRecipe } from "@pandacss/dev";
import { anatomy as checkboxAnatomy } from "@zag-js/checkbox";

export default defineSlotRecipe({
  className: "checkbox",
  description:
    "チェックボックスは、複数の項目の中から複数の選択肢を選ぶことを可能にします。また、ひとつの選択肢のオン・オフの切り替えにも用いることができます。",
  slots: checkboxAnatomy.extendWith("group").keys(),
  base: {
    root: {
      display: "flex",
      alignItems: "center",
      width: "fit-content",
      py: 2,
      colorPalette: "keyColor",
    },
    control: {
      /**
       * flex items-center justify-center shrink-0 rounded-[calc(1/8*100%)]
       * has-[input:hover:not(:focus):not([aria-disabled="true"])]:bg-solid-gray-420
       */
      flexShrink: 0,
      rounded: "calc(2 / 18 * 100%)",
      borderWidth: "2px",
      borderColor: {
        base: "solid-gray.420",
        _checked: "colorPalette.primary",
        _invalid: { base: "error.1", _disabled: "solid-gray.420" },
        _groupHover: { base: "black", _disabled: "solid-gray.420" },
      },
      _disabled: {
        bg: "solid-gray.50",
      },
      _groupHover: {
        outlineStyle: { base: "solid", _disabled: "hidden" },
        outlineColor: "solid-gray.420",
        _focus: {
          outlineStyle: "solid",
          outlineWidth: "4px",
          outlineColor: "black",
          outlineOffset: "calc(2 / 16 * 1rem)",
          focusBox: "calc(2 / 16 * 1rem)",
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
        focusBox: "calc(2 / 16 * 1rem)",
      },
    },
    indicator: {
      /**
       * appearance-none size-3/4 rounded-[calc(2/18*100%)]
       */
      appearance: "none",
      width: "full",
      height: "full",
      zIndex: 1,
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
    },
    label: {
      color: "solid-gray.800",
    },
  },
  variants: {
    size: {
      sm: {
        root: {
          gap: 1.5,
        },
        control: {
          width: "calc({spacing.9} / 2)",
          height: "calc({spacing.9} / 2)",
          _groupHover: {
            outlineWidth: "2px",
            _focus: { outlineWidth: "4px" },
          },
        },
        label: {
          textStyle: "dns-16N-130",
        },
      },
      md: {
        root: {
          gap: 2.5,
        },
        control: {
          width: 6,
          height: 6,
          _groupHover: {
            outlineWidth: "4px",
          },
        },
        indicator: {
          _before: {
            transformOrigin: "top left",
            scale: "calc(20 / 14)",
          },
        },
        label: {
          textStyle: "dns-16N-130",
        },
      },
      lg: {
        root: {
          gap: 2.5,
        },
        control: {
          width: 8,
          height: 8,
          _groupHover: {
            outlineWidth: "6px",
            _focus: { outlineWidth: "4px" },
          },
        },
        indicator: {
          _before: {
            transformOrigin: "top left",
            scale: "calc(27 / 14)",
          },
        },
        label: {
          textStyle: "dns-17N-130",
        },
      },
    },
  },
  defaultVariants: {
    size: "sm",
  },
});

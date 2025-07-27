/**
 * source:
 * https://github.com/digital-go-jp/design-system-example-components/blob/main/src/components/Table/Table.stories.tsx
 */
import { defineSlotRecipe } from "@pandacss/dev";
import { tableAnatomy } from "../anatomy";

export default defineSlotRecipe({
  className: "table",
  slots: tableAnatomy.keys(),
  base: {
    root: {
      /**
       * w-full text-std-16N-170
       */
      maxWidth: "full",
      colorPalette: "keyColor",
    },
    head: {
      "& tr": {
        /**
         * border-black bg-solid-gray-50
         */
        borderColor: "black",
        bg: "solid-gray.50",
      },
    },
    body: {
      "& tr": {
        /**
         * border-solid-gray-420
         */
        borderColor: "solid-gray.420",
        /**
         * [&:has(input:checked)]:bg-blue-100
         */
        /*
        "&:has(input:checked)": {
          bg: "colorPalette.100",
        },
        */
      },
    },
    foot: {},
    row: {
      /**
       * border-b
       */
      borderBottomWidth: "1px",
      "tbody > &:has(input:checked)": { bg: "colorPalette.100" },
    },
    header: {
      /**
       * px-4 text-start align-top
       */
      px: 4,
      verticalAlign: "top",
      textAlign: "start",
    },
    cell: {
      /**
       * px-4 align-top
       */
      px: 4,
      verticalAlign: "top",
    },
    caption: {
      mb: 4,
      textStyle: "oln-17B-100",
    },
  },
  variants: {
    dense: {
      false: {
        root: {
          textStyle: "std-16N-170",
        },
        header: {
          /**
           * py-5
           */
          py: 5,
        },
        cell: {
          /**
           * py-5
           */
          py: 5,
        },
      },
      true: {
        root: {
          textStyle: "dns-16N-130",
        },
        header: {
          /**
           * py-2.5
           */
          py: 2.5,
        },
        cell: {
          /**
           * py-2.5
           */
          py: 2.5,
        },
      },
    },
    striped: {
      true: {
        body: {
          "& tr": {
            _even: {
              "&:not(:has(input:checked))": {
                bg: "{colors.colorPalette.50}/25",
              },
            },
          },
        },
      },
    },
    hovered: {
      true: {
        body: {
          "& tr": {
            _hover: {
              bg: "colorPalette.50",
            },
            _even: {
              "&:not(:has(input:checked))": {
                _hover: { bg: "{colors.colorPalette.50}" },
              },
            },
          },
        },
      },
    },
  },
  defaultVariants: {
    dense: false,
    striped: false,
    hovered: false,
  },
});

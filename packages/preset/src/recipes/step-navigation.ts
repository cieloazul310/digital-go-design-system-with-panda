/**
 * reference:
 * https://github.com/digital-go-jp/design-system-example-components-html/tree/main/src/components/step-navigation
 */

import { defineSlotRecipe } from "@pandacss/dev";
import { anatomy as stepNavigationAnatomy } from "@zag-js/steps";

export default defineSlotRecipe({
  className: "step-navigation",
  slots: stepNavigationAnatomy.keys(),
  base: {
    root: {
      /**
       * color: var(--color-neutral-solid-gray-800);
       * font-weight: normal;
       * font-size: calc(16 / 16 * 1rem);
       * font-family: var(--font-family-sans);
       * line-height: 1.7;
       * letter-spacing: 0.02em;
       * overflow-wrap: anywhere;
       */
      overflowWrap: "anywhere",
      colorPalette: "keyColor",
      "--_step-width": "320px",
      "--_step-min-width": "160px",
    },
    list: {
      /**
       * margin: 0;
       * padding: 0;
       * list-style-type: none;
       */
      m: 0,
      p: 0,
      display: "flex",
      _horizontal: {
        flexDirection: "row",
      },
      _vertical: {
        flexDirection: "column",
      },
    },
    item: {
      /**
       * position: relative;
       * box-sizing: border-box;
       */
      position: "relative",
      boxSizing: "border-box",
      _before: {
        /**
         * position: absolute;
         * z-index: -1;
         * content: "";
         */
        position: "absolute",
        zIndex: -1,
        content: '""',
      },
      _after: {
        /**
         * position: absolute;
         * z-index: -1;
         * content: "";
         */
        position: "absolute",
        zIndex: -1,
        content: '""',
      },
      _first: {
        _before: {
          display: "none",
        },
      },
      _last: {
        _after: {
          display: "none",
        },
      },
      _horizontal: {
        /**
         * width: calc(var(--_step-width, 320) / 16 * 1rem);
         * min-width: calc(var(--_step-min-width, 160) / 16 * 1rem);
         * padding: 0 calc(16 / 16 * 1rem);
         */
        width: "calc(var(--_step-width, 320) / 16 * 1rem)",
        minWidth: "calc(var(--_step-min-width, 160) / 16 * 1rem)",
        px: "calc(16 / 16 * 1rem)",
        _before: {
          /**
           * top: calc(var(--_number-size) / 2 + var(--_number-margin));
           * right: 50%;
           * width: 50%;
           * border-bottom: 1px solid;
           */
          top: "calc(var(--_number-size) / 2 + var(--_number-margin))",
          right: "50%",
          width: "50%",
          borderBottomWidth: "1px",
        },
        _after: {
          /**
           * top: calc(var(--_number-size) / 2 + var(--_number-margin));
           * left: 50%;
           * width: 50%;
           * border-bottom: 1px solid;
           */
          top: "calc(var(--_number-size) / 2 + var(--_number-margin))",
          left: "50%",
          width: "50%",
          borderBottomWidth: "1px",
        },
      },
      _vertical: {
        /**
         * flex: 1;
         * padding-bottom: calc(24 / 16 * 1rem);
         */
        flex: 1,
        pb: "calc(24 / 16 * 1rem)",
        _before: {
          /**
           * left: calc(var(--_number-size) / 2 + var(--_number-margin));
           * top: 0;
           * height: calc(32 / 16 * 1rem);
           * border-right: 1px solid;
           */
          left: "calc(var(--_number-size) / 2 + var(--_number-margin))",
          top: 0,
          height: "calc(32 / 16 * 1rem)",
          borderRightWidth: "1px",
        },
        _after: {
          /**
           * left: calc(var(--_number-size) / 2 + var(--_number-margin));
           * bottom: 0;
           * height: calc(100% - calc(32 / 16 * 1rem));
           * border-right: 1px solid;
           */
          left: "calc(var(--_number-size) / 2 + var(--_number-margin))",
          bottom: 0,
          height: "calc(100% - calc(32 / 16 * 1rem))",
          borderRightWidth: "1px",
        },
      },
    },
    indicator: {
      /**
       * position: relative;
       * display: grid;
       * place-content: center;
       * margin: calc(4 / 16 * 1rem);
       * box-sizing: border-box;
       * width: fit-content;
       * height: var(--_number-size);
       * min-width: var(--_number-size);
       * border: 2px solid;
       * border-radius: 50%;
       * background-color: var(--color-neutral-white);
       * padding: 0 calc(2 / 16 * 1rem) calc(2 / 16 * 1rem);
       * font-weight: bold;
       * font-size: calc(20 / 16 * 1rem);
       * line-height: 1.5;
       * letter-spacing: 0.02em;
       * text-decoration: inherit;
       * text-decoration-thickness: inherit;
       */
      position: "relative",
      display: "grid",
      placeContent: "center",
      margin: "calc(4 / 16 * 1rem)",
      boxSizing: "border-box",
      width: "fit-content",
      height: "var(--_number-size)",
      minWidth: "var(--_number-size)",
      color: "colorPalette.primary",
      borderWidth: "2px",
      borderRadius: "full",
      borderColor: "colorPalette.primary",
      bg: "white",
      py: 0,
      px: "calc(2 / 16 * 1rem)",
      fontWeight: "bold",
      fontSize: "calc(20 / 16 * 1rem)",
      lineHeight: 1.5,
      letterSpacing: "0.02em",
      textDecoration: "inherit",
      textDecorationThickness: "inherit",
      _current: {
        /**
         * background-color: var(--color-neutral-solid-gray-800);
         * color: var(--color-neutral-white);
         * border-color: var(--color-neutral-solid-gray-800);
         */
        bg: "colorPalette.primary",
        color: "white",
        borderColor: "colorPalette.primary",
        /**
         * outline: var(--_outline-width) solid var(--color-neutral-solid-gray-800);
         * outline-offset: calc(2 / 16 * 1rem);
         * box-shadow: 0 0 0 calc(2 / 16 * 1rem) var(--color-neutral-white);
         */
        outlineWidth: "var(--_outline-width)",
        outlineStyle: "solid",
        outlineColor: "colorPalette.primary",
        outlineOffset: "calc(2 / 16 * 1rem)",
        boxShadow: "0 0 0 calc(2 / 16 * 1rem) white",
      },
      _complete: {
        bg: "colorPalette.bg",
      },
      _horizontal: {
        /**
         * margin-right: auto;
         * margin-left: auto;
         */
        mr: "auto",
        ml: "auto",
      },
      _vertical: {
        /**
         * flex-shrink: 0;
         */
        flexShrink: 0,
      },
    },
    separator: {},
  },
  variants: {
    size: {
      md: {
        root: {
          root: {
            /**
             * --_number-size: calc(44 / 16 * 1rem);
             * --_number-margin: calc(4 / 16 * 1rem);
             * --_outline-width: calc(2 / 16 * 1rem);
             * --_title-margin: calc(24 / 16 * 1rem);
             * --_description-margin: calc(8 / 16 * 1rem);
             */
            "--_number-size": "calc(44 / 16 * 1rem)",
            "--_number-margin": "calc(4 / 16 * 1rem)",
            "--_outline-width": "calc(2 / 16 * 1rem)",
            "--_title-margin": "calc(24 / 16 * 1rem)",
            "--_description-margin": "calc(8 / 16 * 1rem)",
          },
        },
        indicator: {},
      },
      sm: {
        root: {
          /**
           * --_number-size: calc(32 / 16 * 1rem);
           * --_number-margin: calc(3 / 16 * 1rem);
           * --_outline-width: calc(1 / 16 * 1rem);
           * --_title-margin: calc(16 / 16 * 1rem);
           * --_description-margin: calc(4 / 16 * 1rem);
           */
          "--_number-size": "calc(32 / 16 * 1rem)",
          "--_number-margin": "calc(3 / 16 * 1rem)",
          "--_outline-width": "calc(1 / 16 * 1rem)",
          "--_title-margin": "calc(16 / 16 * 1rem)",
          "--_description-margin": "calc(4 / 16 * 1rem)",
        },
        indicator: {
          /**
           * margin: calc(3 / 16 * 1rem);
           * border-width: 1px;
           * font-size: calc(16 / 16 * 1rem);
           */
          margin: "calc(3 / 16 * 1rem)",
          borderWidth: "1px",
          fontSize: "calc(16 / 16 * 1rem)",
        },
      },
    },
  },
  defaultVariants: {
    size: "md",
  },
});

/**
 * reference:
 * https://github.com/digital-go-jp/design-system-example-components-html/tree/main/src/components/step-navigation
 */

import { defineSlotRecipe } from "@pandacss/dev";
import { anatomy as stepNavigationAnatomy } from "@zag-js/steps";

export default defineSlotRecipe({
  className: "step-navigation",
  slots: stepNavigationAnatomy.extendWith("title", "description").keys(),
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
      textStyle: "std-16N-170",
      overflowWrap: "anywhere",
      colorPalette: "keyColor",
      // "--_step-width": "320",
      // "--_step-min-width": "160",
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
      _last: {
        "& [data-part=separator]": {
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
      },
      _vertical: {
        /**
         * flex: 1;
         * padding-bottom: calc(24 / 16 * 1rem);
         */
        flex: 1,
        pb: "calc(24 / 16 * 1rem)",
      },
    },
    trigger: {
      /**
       * display: block;
       * border: 0;
       * background: none;
       * padding: 0;
       * color: inherit;
       * font: inherit;
       * text-wrap: pretty;
       */
      display: "block",
      borderWidth: 0,
      bg: "none",
      p: 0,
      color: "inherit",
      font: "inherit",
      textWrap: "pretty",
      cursor: "pointer",
      _horizontal: {
        /**
         * width: 100%;
         * text-align: center;
         */
        width: "100%",
        textAlign: "center",
      },
      _vertical: {
        /**
         * position: relative;
         * display: flex;
         * align-items: baseline;
         * column-gap: calc(16 / 16 * 1rem);
         * text-align: left;
         */
        position: "relative",
        display: "flex",
        alignItems: "baseline",
        columnGap: "calc(16 / 16 * 1rem)",
        textAlign: "left",
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
      m: "calc(4 / 16 * 1rem)",
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
      textStyle: "std-20B-150",
      textDecoration: "inherit",
      textDecorationThickness: "inherit",
      _after: {
        content: '""',
      },
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
        _after: {
          /**
           * position: absolute;
           * top: calc(-10 / 16 * 1rem);
           * left: calc(50% + calc(6 / 16 * 1rem));
           * border-radius: 50%;
           * background-color: var(--color-neutral-white);
           */
          position: "absolute",
          top: "calc(-10 / 16 * 1rem)",
          left: "calc(50% + calc(6 / 16 * 1rem))",
          borderRadius: "full",
          bg: "colorPalette.primary",
          width: "36px",
          height: "36px",
          clipPath:
            "path('M18 0C8.064 0 0 8.064 0 18C0 27.936 8.064 36 18 36C27.936 36 36 27.936 36 18C36 8.064 27.936 0 18 0Z M14.4 27L5.4 18L7.938 15.462L14.4 21.906L28.062 8.244L30.6 10.8L14.4 27Z')",
        },
      },
      "[data-orientation=horizontal] > &": {
        /**
         * margin-right: auto;
         * margin-left: auto;
         */
        mr: "auto",
        ml: "auto",
      },
      "[data-orientation=vertical] > &": {
        /**
         * flex-shrink: 0;
         */
        flexShrink: 0,
        mx: "calc(4 / 16 * 1rem)",
      },
    },
    title: {
      /**
       * display: block;
       * font-weight: bold;
       * font-size: calc(18 / 16 * 1rem);
       * line-height: 1.6;
       * letter-spacing: 0.02em;
       * text-decoration-thickness: inherit;
       */
      display: "block",
      // fontWeight: "bold",
      // fontSize: "calc(18 / 16 * 1rem)",
      // lineHeight: 1.6,
      // letterSpacing: "0.02em",
      textStyle: "std-18B-160",
      textDecorationThickness: "inherit",
      "[data-orientation=horizontal] &": {
        /**
         * margin-top: var(--_title-margin);
         */
        mt: "var(--_title-margin)",
      },
      "[data-orientation=vertical] &": {
        /**
         * padding: calc(var(--_number-size) / 2 + var(--_number-margin) - 0.875rem) 0;
         */
        pt: "calc(var(--_number-size) / 2 + var(--_number-margin) - 0.875rem)",
        pb: 0,
      },
    },
    description: {
      /**
       * margin: var(--_description-margin) 0 0;
       */
      mt: "var(--_description-margin)",
      "[data-orientation=horizontal] &": {
        /**
         * text-align: center;
         */
        textAlign: "center",
      },
      "[data-orientation=vertical] &": {
        /**
         * margin-top: calc(
         *   var(--_description-margin) -
         *   (var(--_number-size) / 2 + var(--_number-margin) - 0.875rem)
         * );
         * padding-left: calc(
         *   var(--_number-size) +
         *   var(--_number-margin) +
         *   var(--_number-margin) +
         *   calc(16 / 16 * 1rem)
         * );
         */
        mt: "calc(var(--_description-margin) - (var(--_number-size) / 2 + var(--_number-margin) - 0.875rem))",
        pl: "calc(var(--_number-size) + var(--_number-margin) + var(--_number-margin) + calc(16 / 16 * 1rem))",
      },
    },
    separator: {
      /**
       * position: absolute;
       * z-index: -1;
       * content: "";
       */
      position: "absolute",
      zIndex: -1,
      content: '""',
      borderColor: "colorPalette.primary",
      _horizontal: {
        /**
         * top: calc(var(--_number-size) / 2 + var(--_number-margin));
         * left: 50%;
         * width: 50%;
         * border-bottom: 1px solid;
         */
        top: "calc(var(--_number-size) / 2 + var(--_number-margin))",
        left: "50%",
        width: "100%",
        borderBottomWidth: "1px",
      },
      _vertical: {
        /**
         * left: calc(var(--_number-size) / 2 + var(--_number-margin));
         * bottom: 0;
         * height: calc(100% - calc(32 / 16 * 1rem));
         * border-right: 1px solid;
         */
        left: "calc(var(--_number-size) / 2 + var(--_number-margin))",
        top: "calc(50% - calc((32 / 16 * 1rem) / 2))",
        height: "100%",
        borderRightWidth: "1px",
      },
    },
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
        indicator: {
          _after: {
            transform: "scale(0.5)",
          },
        },
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
          m: "calc(3 / 16 * 1rem)",
          borderWidth: "1px",
          // fontSize: "calc(16 / 16 * 1rem)",
          textStyle: "std-16B-170",
          "[data-orientation=horizontal] > &": {
            /**
             * margin-right: auto;
             * margin-left: auto;
             */
            mr: "auto",
            ml: "auto",
          },
          "[data-orientation=vertical] > &": {
            mx: "calc(4 / 16 * 1rem)",
          },
          _after: {
            transform: "scale(0.33)",
          },
        },
        title: {
          /**
           * font-weight: bold;
           * font-size: calc(16 / 16 * 1rem);
           * line-height: 1.7;
           * letter-spacing: 0.02em;
           */
          textStyle: "std-16B-170",
        },
      },
    },
  },
  defaultVariants: {
    size: "md",
  },
});

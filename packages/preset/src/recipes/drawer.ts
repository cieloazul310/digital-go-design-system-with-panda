/**
 * source:
 * https://github.com/digital-go-jp/design-system-example-components-react/blob/main/src/components/Drawer/Drawer.stories.tsx
 * https://github.com/cschroeter/park-ui/blob/main/packages/preset/src/theme/recipes/drawer.ts
 */
import { anatomy as dialogAnatomy } from "@zag-js/dialog";
import { defineSlotRecipe } from "@pandacss/dev";

const anatomy = dialogAnatomy.extendWith("header", "body", "footer");

export default defineSlotRecipe({
  className: "drawer",
  description:
    "ブラウザ画面の四辺(上下左右端)から展開し、モバイルメニューなどのコンポーネントを格納可能なコンテナです。",
  slots: anatomy.keys(),
  base: {
    backdrop: {
      /**
       * backdrop:bg-opacity-gray-100 forced-colors:backdrop:bg-[#000b]
       */
      backdropFilter: "blur(4px)",
      background: "solid-gray.100/90",
      height: "100vh",
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      zIndex: 10,
      // zIndex: "overlay",
      _open: {
        animation: "backdrop-in",
      },
      _closed: {
        animation: "backdrop-out",
      },
    },
    positioner: {
      alignItems: "center",
      display: "flex",
      height: "100dvh",
      justifyContent: "center",
      position: "fixed",
      top: 0,
      /**
       * w-72
       */
      width: 72,
      zIndex: 1400,
      // zIndex: "modal",
    },
    content: {
      /**
       * m-[unset] max-w-full max-h-[unset] overflow-visible start-auto
       */
      margin: "unset",
      maxWidth: "full",
      maxHeight: "full",
      overflow: "visible",
      insetInlineStart: "auto",
      width: "full",
      /**
       * bg-white shadow-2 border-l-transparent
       */
      borderColor: "transparent",
      background: "white",
      boxShadow: 2,
      /**
       * grid grid-rows-[auto_1fr] h-dvh
       */
      display: "grid",
      gridTemplateRows: "auto 1fr",
      height: "100dvh",
      _hidden: {
        display: "none",
      },
    },
    header: {
      /**
       * flex justify-end py-4 pl-4 pr-8
       */
      display: "flex",
      justifyContent: "start",
      py: 4,
      px: 4,
    },
    title: {
      textStyle: "std-20B-150",
    },
    body: {
      /**
       * overflow-auto
       */
      overflow: "auto",
      px: 4,
      py: 4,
      textStyle: "std-17N-170",
    },
  },
  variants: {
    placement: {
      right: {
        positioner: {
          right: 0,
        },
        content: {
          /**
           * border-l
           */
          borderLeftWidth: "1px",
        },
      },
      left: {
        positioner: {
          left: 0,
        },
        content: {
          /**
           * border-l
           */
          borderRightWidth: "1px",
        },
      },
    },
  },
  defaultVariants: {
    placement: "right",
  },
});

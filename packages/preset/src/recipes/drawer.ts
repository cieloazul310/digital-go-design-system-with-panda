/**
 * source:
 * https://github.com/digital-go-jp/design-system-example-components-react/blob/main/src/components/Drawer/Drawer.stories.tsx
 * https://github.com/cschroeter/park-ui/blob/main/packages/preset/src/theme/recipes/drawer.ts
 */
import { anatomy as drawerAnatomy } from "@zag-js/drawer";
import { defineSlotRecipe } from "@pandacss/dev";

const anatomy = drawerAnatomy.extendWith("header", "body", "footer");

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
        animation: "fade-in 0.5s cubic-bezier(0.32, 0.72, 0, 1)",
      },
      _closed: {
        animation: "fade-out 0.5s cubic-bezier(0.32, 0.72, 0, 1)",
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
      width: {
        base: "full",
        "&[data-swipe-direction=right]": 72,
        "&[data-swipe-direction=left]": 72,
      },
      zIndex: 1400,
      // zIndex: "modal",
      "&[data-swipe-direction=up]": {
        left: 0,
      },
      "&[data-swipe-direction=down]": {
        left: 0,
      },
      "&[data-swipe-direction=right]": {
        right: 0,
      },
      "&[data-swipe-direction=left]": {
        left: 0,
      },
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
      // height: "100dvh",
      height: "full",
      _hidden: {
        display: "none",
      },
      /**
       * transition: transform 0.5s cubic-bezier(0.32, 0.72, 0, 1);
       * animation-duration: 0.5s;
       * animation-timing-function: cubic-bezier(0.32, 0.72, 0, 1);
       */
      transition: "transform 0.5s cubic-bezier(0.32, 0.72, 0, 1)",
      animationDuration: "0.5s",
      animationTimingFunction: "cubic-bezier(0.32, 0.72, 0, 1)",
      borderWidth: {
        base: "0px",
        "&[data-swipe-direction=right]": "0px 0px 0px 1px",
        "&[data-swipe-direction=left]": "0px 1px 0px 0px",
        "&[data-swipe-direction=down]": "1px 0px 0px 0px",
        "&[data-swipe-direction=up]": "0px 0px 1px 0px",
      },
      _open: {
        animationName: {
          "&[data-swipe-direction=up]": "slide-in-top",
          "&[data-swipe-direction=down]": "slide-in-bottom",
          "&[data-swipe-direction=left]": "slide-in-left",
          "&[data-swipe-direction=right]": "slide-in-right",
        },
      },
      _closed: {
        animationName: {
          "&[data-swipe-direction=up]": "slide-out-top",
          "&[data-swipe-direction=down]": "slide-out-bottom",
          "&[data-swipe-direction=left]": "slide-out-left",
          "&[data-swipe-direction=right]": "slide-out-right",
        },
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
});

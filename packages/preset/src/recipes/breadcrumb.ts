/**
 * source:
 * https://github.com/digital-go-jp/design-system-example-components-react/blob/main/src/components/Breadcrumbs/Breadcrumbs.tsx
 */
import { defineSlotRecipe } from "@pandacss/dev";
import { breadcrumbAnatomy } from "../anatomy";
import link from "./link";

export default defineSlotRecipe({
  className: "breadcrumb",
  description:
    "パンくずリストは、ウェブサイトの階層内でユーザーの現在の位置を表示します。",
  slots: breadcrumbAnatomy.keys(),
  base: {
    root: {
      /**
       * icon
       */
      "--icon-size": "16px",
    },
    label: {
      srOnly: true,
      textStyle: "oln-16N-100",
    },
    list: {
      /**
       * inline
       */
      display: "inline",
    },
    item: {
      /**
       * inline break-words text-oln-16N-100
       */
      display: "inline",
      overflowWrap: "break-word",
      textStyle: "oln-16N-100",
    },
    link: {
      /**
       * text-blue-1000 text-oln-16N-100 underline underline-offset-[calc(3/16*1rem)]
       * hover:text-blue-900 hover:decoration-[calc(3/16*1rem)]
       * active:text-orange-700 active:decoration-1
       * focus-visible:rounded-4 focus-visible:outline focus-visible:outline-4
       * focus-visible:outline-black focus-visible:outline-offset-[calc(2/16*1rem)]
       * focus-visible:bg-yellow-300 focus-visible:text-blue-1000
       * focus-visible:ring-[calc(2/16*1rem)] focus-visible:ring-yellow-300
       */
      ...link.base,
      /**
       * icon
       */
      "& svg": {
        display: "inline",
        width: "var(--icon-size)",
        height: "var(--icon-size)",
        mr: 1,
      },
    },
    separator: {
      /**
       * mx-2 inline
       */
      mx: 2,
      display: "inline-flex",
      width: "12px",
      height: "12px",
      "& > svg": {
        width: "full",
        height: "full",
        fill: "none",
      },
    },
  },
});

/**
 * source:
 * https://github.com/digital-go-jp/design-system-example-components-react/blob/main/src/components/Disclosure/Disclosure.tsx
 */
import { defineSlotRecipe } from "@pandacss/dev";
import { anatomy as disclosureAnatomy } from "@zag-js/collapsible";

export default defineSlotRecipe({
  className: "disclosure",
  description:
    "ディスクロージャーは、コンテンツのセクション内の任意の範囲を折りたたむことができるユーザーインターフェースです。※セクション単位で折りたたみ表示をする場合は「アコーディオン」コンポーネントを使用してください。",
  slots: disclosureAnatomy.extendWith("indicator").keys(),
  base: {
    root: {
      /**
       * group/disclosure
       */
      colorPalette: "keyColor",
    },
    trigger: {
      /**
       * group/summary
       * [&::-webkit-details-marker]:hidden
       */
      /**
       * flex w-fit cursor-default list-none items-start justify-start gap-2
       */
      display: "flex",
      width: "fit-content",
      cursor: "default",
      listStyle: "none",
      alignItems: "start",
      justifyContent: "start",
      gap: 2,
      /**
       * remove button style
       */
      textAlign: "start",
      /**
       * hover:underline hover:underline-offset-[calc(3/16*1rem)]
       */
      _hover: {
        textDecoration: "underline",
        textUnderlineOffset: "calc(3 / 16 * 1rem)",
      },
      /**
       * focus-visible:rounded-4 focus-visible:outline focus-visible:outline-4
       * focus-visible:outline-black focus-visible:outline-offset-[calc(2/16*1rem)]
       * focus-visible:bg-yellow-300
       * focus-visible:ring-[calc(2/16*1rem)] focus-visible:ring-yellow-300
       */
      _focusVisible: {
        rounded: 4,
        bg: "yellow.300",
        outlineStyle: "solid",
        outlineWidth: "4px",
        outlineColor: "black",
        outlineOffset: "calc(2 / 16 * 1rem)",
        focusBox: "calc(2 / 16 * 1rem)",
      },
    },
    indicator: {
      flex: "none",
      bg: { base: "colorPalette.primary.100", _groupHover: "white" },
      color: {
        base: "white",
        _groupHover: "colorPalette.primary.100",
        _highContrast: "inherit",
      },
      mt: "calc((1lh - 24px) / 2)",
      width: "24px",
      height: "24px",
      rounded: "full",
      outlineStyle: "solid",
      outlineWidth: "3px",
      outlineOffset: "-3px",
      outlineColor: "colorPalette.primary.100",
      transition: "transform",
      transform: {
        base: "rotate(-180deg)",
        _open: "rotate(0deg)",
      },
    },
    content: {},
  },
});

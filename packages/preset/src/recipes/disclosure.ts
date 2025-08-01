/**
 * source:
 * https://github.com/digital-go-jp/design-system-example-components/blob/main/src/components/Disclosure/Disclosure.tsx
 */
import { defineSlotRecipe } from "@pandacss/dev";
import { disclosureAnatomy } from "../anatomy";

export default defineSlotRecipe({
  className: "disclosure",
  slots: disclosureAnatomy.keys(),
  base: {
    root: {
      /**
       * group/disclosure
       */
      colorPalette: "keyColor",
    },
    summary: {
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
        focusRing: "calc(2 / 16 * 1rem)",
      },
    },
    icon: {
      /**
       * flex-none text-blue-1000 mt-[calc((1lh-24px)/2)]
       * group-open/disclosure:rotate-180
       * forced-colors:text-inherit
       */
      flex: "none",
      color: { base: "colorPalette.primary.100", _highContrast: "inherit" },
      mt: "calc((1lh - 24px) / 2)",
      /**
       * svg
       */
      width: "24px",
      height: "24px",
      rounded: "full",
      bg: { base: "white", _groupHover: "currentColor" },
      outlineStyle: "solid",
      outlineWidth: "3px",
      outlineOffset: "-3px",
      transform: {
        base: "rotate(-180deg)",
        "[data-state=open]>&": "rotate(0deg)",
      },
      transition: "transform",
      _before: {
        content: '""',
        bg: { base: "currentColor", _groupHover: "white" },
        width: "full",
        height: "full",
        rounded: "full",
        outlineStyle: "solid",
        outlineWidth: "3px",
        outlineOffset: "-3px",
        display: "block",
        clipPath:
          "path('M12 15.525L16.925 10.625H7.07502L12 15.525ZM12 22.85C10.4834 22.85 9.06677 22.566 7.75027 21.998C6.43394 21.4298 5.28886 20.6588 4.31502 19.685C3.34119 18.7112 2.57019 17.5661 2.00202 16.2498C1.43402 14.9333 1.15002 13.5167 1.15002 12C1.15002 10.4833 1.43402 9.06675 2.00202 7.75025C2.57019 6.43392 3.34119 5.28883 4.31502 4.315C5.28886 3.34117 6.43394 2.57017 7.75027 2.002C9.06677 1.434 10.4834 1.15 12 1.15C13.5167 1.15 14.9333 1.434 16.2498 2.002C17.5661 2.57017 18.7112 3.34117 19.685 4.315C20.6589 5.28883 21.4299 6.43392 21.998 7.75025C22.566 9.06675 22.85 10.4833 22.85 12C22.85 13.5167 22.566 14.9333 21.998 16.2498C21.4299 17.5661 20.6589 18.7112 19.685 19.685C18.7112 20.6588 17.5661 21.4298 16.2498 21.998C14.9333 22.566 13.5167 22.85 12 22.85Z')",
      },
    },
    content: {},
  },
});

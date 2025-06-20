/**
 * source:
 * https://github.com/digital-go-jp/design-system-example-components/blob/main/src/components/Accordion/Accordion.tsx
 */
import { defineSlotRecipe } from "@pandacss/dev";
import { anatomy as accordionAnatomy } from "@ark-ui/anatomy/accordion";

export default defineSlotRecipe({
  className: "accordion",
  slots: accordionAnatomy.keys(),
  base: {
    item: {
      /**
       * group/accordion border-b border-solid-gray-420
        [--icon-size:calc(20/16*1rem)] desktop:[--icon-size:calc(32/16*1rem)]
        ${className ?? ''}
       */
      borderBottomWidth: "1px",
      borderBottomColor: "solid-gray.420",
      "--icon-size": {
        base: "calc(20 / 16 * 1rem)",
        md: "calc(32 / 16 * 1rem)",
      },
    },
    itemTrigger: {
      /**
       * group/summary relative block cursor-default
       */
      position: "relative",
      display: "block",
      /**
       * hover:bg-solid-gray-50
       * focus-visible:bg-yellow-300
       */
      bg: {
        base: "transparent",
        _hover: "solid-gray.50",
        _focusVisible: { base: "yellow.300", _hover: "yellow.300" },
      },
      /*
       * py-2 pl-[calc(var(--icon-size)+(12/16*1rem))] pr-2
       * desktop:py-3.5 desktop:pl-[calc(var(--icon-size)+(20/16*1rem))] desktop:pr-4
       */
      py: { base: 2, md: 3.5 },
      pl: {
        base: "calc(var(--icon-size) + (12 / 16 * 1rem))",
        md: "calc(var(--icon-size) + (20 / 16 * 1rem))",
      },
      pr: { base: 2, md: 4 },
      cursor: { _hover: "pointer" },
      /**
       * marker:[content:'']
        [&::-webkit-details-marker]:hidden
       */
      "&::marker": { content: '""' },
      /**
       * focus-visible:rounded-4 focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-[calc(2/16*1rem)] focus-visible:outline-black focus-visible:ring-[calc(2/16*1rem)] focus-visible:ring-yellow-300
       */
      _focusVisible: {
        rounded: 4,
        outlineStyle: "solid",
        outlineWidth: "4px",
        outlineColor: "black",
        outlineOffset: "calc(2 / 16 * 1rem)",
        focusRing: "calc(2 / 16 * 1rem)",
      },
      /**
       * remove button style
       */
      textAlign: "start",
      width: "full",
    },
    itemIndicator: {
      /**
       * absolute top-2 left-0.5
       * desktop:top-3.5 desktop:left-1.5
       * size-[var(--icon-size)]
       * mt-[calc((1lh-var(--icon-size))/2)]
       */
      position: "absolute",
      top: { base: 2, md: 3.5 },
      left: { base: 0.5, md: 1.5 },
      width: "var(--icon-size)",
      height: "var(--icon-size)",
      mt: "calc((1lh - var(--icon-size)) / 2)",
      /**
       * inline-flex items-center justify-center
       */
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      /**
       * bg-white text-blue-1000
       */
      bg: "white",
      color: "keyColor.1000",
      /**
       * border border-current rounded-full
          group-hover/summary:outline group-hover/summary:outline-2 group-hover/summary:outline-current
          group-open/accordion:rotate-180
       */
      borderWidth: "1px",
      borderColor: "currentcolor",
      rounded: "full",
      outlineStyle: "solid",
      outlineWidth: { base: "0px", _groupHover: "2px" },
      transformOrigin: "center",
      transitionDuration: "normal",
      transitionProperty: "transform",
      transitionTimingFunction: "default",
      _open: {
        transform: "rotate(-180deg)",
      },
    },
    itemContent: {
      /**
       * pl-[calc(var(--icon-size)+(12/16*1rem))] pr-2 py-4
        desktop:pl-[calc(var(--icon-size)+(20/16*1rem))] desktop:pr-4 desktop:py-6
       */
      pl: {
        base: "calc(var(--icon-size) + (12 / 16 * 1rem))",
        md: "calc(var(--icon-size) + (20 / 16 * 1rem))",
      },
      pr: { base: 2, md: 4 },
      py: { base: 4, md: 6 },
    },
  },
});

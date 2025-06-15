/**
 * source:
 * https://github.com/digital-go-jp/design-system-example-components/tree/main/src/components/NotificationBanner
 * inspired by Park UI
 * https://park-ui.com/react/docs/components/alert
 */
import { defineSlotRecipe } from "@pandacss/dev";
import { notificationBannerAnatomy } from "../anatomy";

export default defineSlotRecipe({
  className: "notification-banner",
  slots: notificationBannerAnatomy.keys(),
  base: {
    root: {
      /**
       * [--icon-size:calc(24/16*1rem)] desktop:[--icon-size:calc(36/16*1rem)]
       */
      "--icon-size": {
        base: "calc(24 / 16 * 1rem)",
        md: "calc(36 / 16 * 1rem)",
      },
      /**
       * p-4 desktop:p-6 border-current
       */
      p: { base: 4, md: 6 },
      borderColor: "currentcolor",
      /**
       * grid grid-cols-[var(--icon-size)_1fr_minmax(0,auto)]
       * gap-x-3 desktop:gap-x-6 gap-y-4
       */
      display: "grid",
      gridTemplateColumns: "var(--icon-size) 1fr minmax(0, auto)",
      columnGap: { base: 3, md: 6 },
      rowGap: 4,
    },
    header: {
      /**
       * grid grid-cols-subgrid col-start-2 -col-end-1 place-items-start
        [&>*:last-child]:-col-end-1
       */
      display: "grid",
      gridTemplateColumns: "subgrid",
      gridColumnStart: 2,
      gridColumnEnd: -1,
      placeItems: "start",
      "& > *:last-child": {
        gridColumnEnd: -1,
      },
    },
    icon: {
      /**
       * mt-[calc(2/16*1rem)] desktop:mt-0
       */
      mt: { base: "calc(2 / 16 * 1rem)", md: 0 },
      /**
       * h-auto max-w-full
       */
      height: "auto",
      maxWidth: "full",
    },
    close: {
      /**
       * inline-flex items-center gap-0.5
       * -mt-2 -mr-3 desktop:mt-0 desktop:mr-0 desktop:px-2 desktop:py-0.5
       */
      display: "inline-flex",
      alignItems: "center",
      gap: 0.5,
      mt: { base: -2, md: 0 },
      mr: { base: -3, md: 0 },
      px: { base: 0, md: 2 },
      py: { base: 0, md: 0.5 },
      /**
       * text-solid-gray-900
       */
      color: "solid-gray.900",
      /**
       * border border-transparent  hover:border-solid-gray-900 rounded-8 focus-visible:border-transparent
       */
      borderWidth: "1px",
      borderColor: {
        base: "transparent",
        _hover: "solid-gray.900",
        _focusVisible: "transparent",
      },
      rounded: 8,
      /**
       * focus-visible:outline focus-visible:outline-4 focus-visible:outline-black focus-visible:outline-offset-[calc(2/16*1rem)]
       * focus-visible:ring-[calc(2/16*1rem)] focus-visible:ring-yellow-300 focus-visible:bg-yellow-300
       *
       */
      _focusVisible: {
        outlineWidth: "4px",
        outlineColor: "black",
        outlineOffset: "calc(2 / 16 * 1rem)",
        borderInset: "md",
      },
    },
    heading: {
      /**
       * text-solid-gray-900 col-start-1 desktop:mt-0.5
       * text-std-17B-170 desktop:text-std-20B-160
       *
       * @todo
       * std-20B-160 doesn't exist and replace it to std-20B-150
       */
      textStyle: { base: "std-17B-170", md: "std-20B-150" },
      color: "solid-gray.900",
      gridColumnStart: 1,
      mt: { base: "auto", md: 0.5 },
    },
    body: {
      /**
       * col-start-1 -col-end-1 desktop:col-start-2 text-std-16N-170 text-solid-gray-800
       */
      gridColumnStart: { base: 1, md: 2 },
      gridColumnEnd: -1,
      textStyle: "std-16N-170",
      color: "solid-gray.800",
    },
  },
  variants: {
    type: {
      success: {
        root: {
          /**
           * text-success-2 [--color-chip-color:currentColor]
           */
          color: "success.2",
          "--color-chip-color": "currentColor",
        },
      },
      error: {
        root: {
          /**
           * text-error-1 [--color-chip-color:currentColor]
           */
          color: "error.1",
          "--color-chip-color": "currentColor",
        },
      },
      warning: {
        root: {
          /**
           * text-warning-yellow-2 [--color-chip-color:theme(colors.yellow.400)]
           */
          color: "warning.yellow.2",
          "--color-chip-color": "{colors.yellow.400}",
        },
      },
      info1: {
        root: {
          /**
           * text-blue-900 [--color-chip-color:currentColor]
           */
          color: "blue.900",
          "--color-chip-color": "currentColor",
        },
      },
      info2: {
        root: {
          /**
           * text-solid-gray-536 [--color-chip-color:currentColor]
           */
          color: "solid-gray.536",
          "--color-chip-color": "currentColor",
        },
      },
    },
    bannerStyle: {
      standard: {
        root: {
          /**
           * border-[3px] rounded-12
           */
          borderWidth: "3px",
          rounded: 12,
        },
      },
      "color-chip": {
        root: {
          /**
           * border-2 !pl-6 desktop:!pl-10
           * shadow-[inset_8px_0_0_0_var(--color-chip-color)]
           * desktop:shadow-[inset_16px_0_0_0_var(--color-chip-color)]
           */
          borderWidth: "2px",
          pl: { base: 6, md: 10 },
          shadow: "inset 16px 0 0 0 var(--color-chip-color)",
        },
      },
    },
  },
  defaultVariants: {
    type: "info1",
    bannerStyle: "standard",
  },
});

/**
 * source:
 * https://github.com/digital-go-jp/design-system-example-components/tree/main/src/components/NotificationBanner
 * inspired by Park UI
 * https://park-ui.com/react/docs/components/alert
 */
import { defineSlotRecipe } from "@pandacss/dev";

export default defineSlotRecipe({
  className: "notification-banner",
  slots: ["root", "header", "heading", "icon", "close", "body", "footer"],
  base: {
    root: {
      display: "grid",
      p: 4,
      columnGap: { base: 3, md: 6 },
      rowGap: { base: 4, md: 6 },
      /**
       * grid grid-cols-[var(--icon-size)_1fr_minmax(0,auto)] border-current p-4 [--icon-size:calc(24/16*1rem)] gap-x-3 gap-y-4
        desktop:gap-x-6 desktop:p-6 desktop:[--icon-size:calc(36/16*1rem)]
        ${bannerStyleClasses[bannerStyle]}
        ${bannerTypeClasses[type]}
       */
    },
    body: {
      gridColumnStart: { base: 1, md: 2 },
      gridColumnEnd: 1,
      textStyle: "std-16N-170",
      color: "gray.800",
      /**
       * col-start-1 -col-end-1 desktop:col-start-2 text-std-16N-170 text-solid-gray-800
       */
    },
    header: {
      display: "grid",
      gridTemplateColumns: "subgrid",
      gridColumnStart: 2,
      gridColumnEnd: 1,
      placeItems: "start",
      "& > *:last-child": {
        gridColumnEnd: 1,
      },
      /**
       * grid grid-cols-subgrid col-start-2 -col-end-1 place-items-start
        [&>*:last-child]:-col-end-1
       */
    },
    heading: {
      textStyle: { base: "std-17B-170", md: "std-20B-160" },
      color: "solid-gray.900",
      gridColumnStart: 1,
      mt: { base: "auto", md: 0.5 },
      /**
       * text-std-17B-170 text-solid-gray-900 col-start-1 desktop:mt-0.5 desktop:text-std-20B-160
       */
    },
    close: {
      display: "inline-flex",
      alignItems: "center",
      gap: 0.5,
      bg: { base: "transpalent", _focusVisible: "yellow.300" },
      mt: { base: 2, md: 0 },
      mr: { base: 3, md: 0 },
      color: "solid-gray.900",
      borderWidth: "1px",
      borderColor: {
        base: "transparent",
        _hover: "solid-gray.900",
        _focusVisible: "transparent",
      },
      rounded: "lg",
      _focusVisible: {
        outlineWidth: "4px",
        outlineColor: "black",
        outlineOffset: "calc(2/16*1rem)",
        borderInset: "md",
      },
      /**
       * inline-flex items-center gap-0.5 -mt-2 -mr-3 text-solid-gray-900 border border-transparent rounded-lg
        desktop:px-2 desktop:py-0.5 desktop:mt-0 desktop:mr-0
        hover:border-solid-gray-900
        focus-visible:outline focus-visible:outline-4 focus-visible:outline-black focus-visible:outline-offset-[calc(2/16*1rem)] focus-visible:ring-[calc(2/16*1rem)] focus-visible:ring-yellow-300 focus-visible:bg-yellow-300 focus-visible:border-transparent
       */
    },
  },
  variants: {
    type: {
      success: {
        root: {
          colorScheme: "success.2",
        },
        /**
         * success: 'text-success-2 [--color-chip-color:currentColor]',
         */
      },
      error: {
        root: {
          colorScheme: "error.1",
        },
        /**
         * error: 'text-error-1 [--color-chip-color:currentColor]',
         */
      },
      warning: {
        root: {
          colorScheme: "warning-yellow.2",
        },
        /**
         * warning: 'text-warning-yellow-2 [--color-chip-color:theme(colors.yellow.400)]',
         */
      },
      info1: {
        root: {
          colorScheme: "blue.900",
        },
        /**
         * info1: 'text-blue-900 [--color-chip-color:currentColor]',
         */
      },
      info2: {
        root: {
          colorScheme: "solid-gray.536",
        },
        /**
         * info2: 'text-solid-gray-536 [--color-chip-color:currentColor]',
         */
      },
    },
    bannerStyle: {
      standard: {
        root: {
          borderWidth: 3,
          rounded: "xl",
        },
        /**
         * standard: ' border-[3px] rounded-xl',
         */
      },
      "color-ship": {
        root: {
          borderWidth: 2,
          pl: { base: 6, md: 10 },
        },
        /**
         * 'color-chip':
            'border-2 !pl-6 shadow-[inset_8px_0_0_0_var(--color-chip-color)] desktop:!pl-10 desktop:shadow-[inset_16px_0_0_0_var(--color-chip-color)]',
         */
      },
    },
  },
  defaultVariants: {
    type: "info1",
    bannerStyle: "standard",
  },
});

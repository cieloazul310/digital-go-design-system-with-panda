/**
 * source:
 * https://github.com/digital-go-jp/design-system-example-components/tree/main/src/components/NotificationBanner
 * inspired by Park UI
 * https://park-ui.com/react/docs/components/alert
 */
import { defineSlotRecipe } from "@pandacss/dev";
import hamburgerMenuButton from "./hamburger-menu-button";
import { notificationBannerAnatomy } from "../anatomy";

export default defineSlotRecipe({
  className: "notification-banner",
  description:
    "サイト/サービス全体に関わる、またはページや要素単位における重要度の高い情報を、ユーザーの操作に関わらず、サイト/サービス側からユーザーへ提示する場合に用いる通知バナーです。通知に対するユーザーアクションを要求することが可能です。メンテナンスを通知したい、ユーザーの対応が必要な情報を通知してアクションさせたい、といった要求に対応することができます。",
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
      "--icon-scale": {
        base: 24 / 36,
        md: 1,
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
      /**
       * icon element
       * instead of icon component
       */
      _before: {
        content: '""',
        display: "block",
        bg: "currentColor",
        width: "36px",
        height: "36px",
        transformOrigin: "left center",
        transform: "scale(var(--icon-scale))",
      },
    },
    close: {
      _before: {
        content: '""',
        display: "block",
        mt: 0.5,
        width: 6,
        height: 6,
        bg: "currentColor",
        clipPath:
          "path('m6.4 18.6-1-1 5.5-5.6-5.6-5.6 1.1-1 5.6 5.5 5.6-5.6 1 1.1L13 12l5.6 5.6-1 1L12 13l-5.6 5.6Z')",
      },
      ...hamburgerMenuButton.base,
      display: "inline-flex",
      gap: 1,
      mr: -3,
      color: "solid-gray.900",
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
    actions: {
      mt: 4,
      display: "flex",
      flexDirection: { base: "column", md: "row" },
      justifyContent: "end",
      gap: { base: 2, md: 4 },
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
        icon: {
          _before: {
            clipPath:
              "path('M18 0C8.064 0 0 8.064 0 18C0 27.936 8.064 36 18 36C27.936 36 36 27.936 36 18C36 8.064 27.936 0 18 0Z M14.4 27L5.4 18L7.938 15.462L14.4 21.906L28.062 8.244L30.6 10.8L14.4 27Z')",
          },
        },
        actions: {
          "& button": {
            colorPalette: "green",
          },
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
        icon: {
          _before: {
            clipPath:
              "path('M10.82 35.3.74 25.22v-14.4L10.82.74h14.4L35.3 10.82v14.4L25.22 35.3h-14.4Zm7.2-14.592 5.472 5.472 2.688-2.688-5.472-5.472 5.472-5.472-2.688-2.688-5.472 5.472-5.472-5.472-2.688 2.688 5.472 5.472-5.472 5.472 2.688 2.688 5.472-5.472Z')",
          },
        },
        actions: {
          "& button": {
            colorPalette: "red",
          },
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
        icon: {
          _before: {
            clipPath:
              "path('M0 34.0909H36L18 3L0 34.0909ZM19.6364 29.1818H16.3636V25.9091H19.6364V29.1818ZM19.6364 22.6364H16.3636V16.0909H19.6364V22.6364Z')",
          },
        },
        actions: {
          "& button": {
            colorPalette: "yellow",
          },
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
        icon: {
          _before: {
            clipPath:
              "path('M18 0C8.064 0 0 8.064 0 18C0 27.936 8.064 36 18 36C27.936 36 36 27.936 36 18C36 8.064 27.936 0 18 0ZM19.8 27H16.2V16.2H19.8V27ZM19.8 12.6H16.2V9H19.8V12.6Z')",
          },
        },
        actions: {
          "& button": {
            colorPalette: "blue",
          },
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
        icon: {
          _before: {
            clipPath:
              "path('M18 0C8.064 0 0 8.064 0 18C0 27.936 8.064 36 18 36C27.936 36 36 27.936 36 18C36 8.064 27.936 0 18 0ZM19.8 27H16.2V16.2H19.8V27ZM19.8 12.6H16.2V9H19.8V12.6Z')",
          },
        },
        actions: {
          "& button": {
            colorPalette: "solid-gray",
          },
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

import { defineSlotRecipe } from "@pandacss/dev";
import { anatomy as progressAnatomy } from "@zag-js/progress";

export default defineSlotRecipe({
  className: "progress",
  description:
    "プログレスインジケーターは、ユーザーのアクションに対して処理進行中であることを通知します。データ取得リクエストの応答を待っていることをユーザーに伝えたいといった要求に対応します。",
  slots: progressAnatomy.keys(),
  base: {
    root: {
      display: "flex",
      alignItems: "center",
      colorPalette: "keyColor",
    },
    track: {
      height: "4px",
      bg: "colorPalette.500",
      rounded: "full",
      overflow: "hidden",
    },
    range: {
      bg: "colorPalette.1200",
      height: "full",
      outlineStyle: "solid",
      outlineWidth: "1px",
      outlineColor: "white",
      rounded: "full",
    },
    circleTrack: {
      stroke: "colorPalette.500",
    },
    circleRange: {
      stroke: "colorPalette.1200",
      strokeLinecap: "round",
    },
    label: {
      textStyle: "std-16N-170",
    },
  },
  variants: {
    layout: {
      vertical: {
        root: {
          flexDirection: "column",
          gap: 4,
          "--size": "48px",
          "--thickness": "4px",
        },
        track: {
          width: "240px",
        },
      },
      horizontal: {
        root: {
          flexDirection: "row",
          gap: 2,
          "--size": "24px",
          "--thickness": "2px",
        },
        track: {
          width: "80px",
        },
      },
    },
  },
  defaultVariants: {
    layout: "vertical",
  },
});

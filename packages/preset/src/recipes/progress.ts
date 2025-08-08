/**
 * references:
 * https://github.com/cschroeter/park-ui/blob/main/packages/preset/src/theme/recipes/progress.ts
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/react/src/theme/recipes/progress.ts
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/react/src/theme/recipes/progress-circle.ts
 */

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
      position: "relative",
    },
    range: {
      bg: "colorPalette.1200",
      height: "full",
      outlineStyle: "solid",
      outlineWidth: "1px",
      outlineColor: "white",
      rounded: "full",
      transition: "width 0.2s ease-in-out",
      "--translate-x": "-100%",
      _indeterminate: {
        "--animate-from-x": "-40%",
        "--animate-to-x": "100%",
        position: "absolute",
        willChange: "left",
        minWidth: "50%",
        animation: "position 1s ease infinite normal none running",
        backgroundImage: `linear-gradient(to right, transparent 0%, var(--track-color) 50%, transparent 100%)`,
      },
    },
    circle: {
      _indeterminate: {
        animation: "spin 2s linear infinite",
      },
    },
    circleTrack: {
      stroke: "colorPalette.500",
    },
    circleRange: {
      stroke: "colorPalette.1200",
      strokeLinecap: "round",
      transitionProperty: "stroke-dashoffset, stroke-dasharray",
      transitionDuration: "0.6s",
      _indeterminate: {
        animation: "circular-progress 1.5s linear infinite",
      },
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

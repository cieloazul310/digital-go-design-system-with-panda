import type { ArgTypes } from "@storybook/nextjs-vite";

export const colorPalette = {
  options: [
    "keyColor",
    "blue",
    "light-blue",
    "cyan",
    "green",
    "lime",
    "yellow",
    "orange",
    "red",
    "magenta",
    "purple",
    "solid-gray",
  ],
  control: { type: "radio" },
  description:
    "コンポーネントの統一的なカラーを設定します。デフォルトではプリセット作成時に指定した`keyColor`となっています。",
  table: {
    defaultValue: { summary: "keyColor" },
    type: {
      summary:
        "'keyColor' | 'blue' | 'light-blue' | 'cyan' | 'green' | 'lime' | 'yellow' | 'orange' | 'red' | 'magenta' | 'purple' | 'solid-gray'",
    },
  },
} satisfies ArgTypes[string];

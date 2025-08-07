import type { ArgTypes } from "@storybook/nextjs-vite";

export const invalid = {
  description: "エラー状態であるかどうかを指定します。",
  control: { type: "boolean" },
  table: {
    defaultValue: { summary: "false" },
    type: { summary: "boolean" },
  },
} satisfies ArgTypes[string];

export const disabled = {
  description:
    "無効化する必要がある場合は `disabled` 属性ではなく `aria-disabled` 属性を使用します。",
  control: { type: "boolean" },
  table: {
    defaultValue: { summary: "false" },
    type: { summary: "boolean" },
  },
} satisfies ArgTypes[string];

export const ariaDisabled = {
  description:
    "無効化する必要がある場合は `disabled` 属性ではなく `aria-disabled` 属性を使用します。",
  control: { type: "boolean" },
  table: {
    defaultValue: { summary: "false" },
    type: { summary: "boolean" },
  },
} satisfies ArgTypes[string];

export const readOnly = {
  control: { type: "boolean" },
  table: {
    defaultValue: { summary: "false" },
    type: { summary: "boolean" },
  },
} satisfies ArgTypes[string];

export const required = {
  control: { type: "boolean" },
  table: {
    defaultValue: { summary: "false" },
    type: { summary: "boolean" },
  },
} satisfies ArgTypes[string];

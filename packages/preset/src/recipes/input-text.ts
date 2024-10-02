/**
 * source:
 * https://github.com/digital-go-jp/design-system-example-components/blob/main/src/components/Input/Input.tsx
 */
import { defineSlotRecipe } from "@pandacss/dev";
import { anatomy as fieldAnatomy } from "@ark-ui/anatomy/field";
import errorText from "./error-text";
import input from "./input";
import label from "./label";
import select from "./select";
import supportText from "./support-text";
import textarea from "./textarea";

const inputText = defineSlotRecipe({
  className: "input-text",
  description:
    "インプットテキストコンポーネントは、名前や電話番号など、1行以内のテキストを入力する場合に使用します。",
  slots: fieldAnatomy.keys(),
  base: {
    root: {
      display: "flex",
      flexDirection: "column",
      gap: 1.5,
    },
    label: {
      ...label.base,
    },
    input: {
      ...input.base,
    },
    textarea: {
      ...textarea.base,
    },
    select: {
      ...select.base?.trigger,
    },
    errorText: {
      ...errorText.base,
    },
    helperText: {
      ...supportText.base,
    },
  },
  variants: {
    size: {
      lg: {
        label: { ...label.variants?.size?.lg },
        input: { ...input.variants?.size?.lg },
        select: { ...select.variants?.size?.lg?.trigger },
      },
      md: {
        label: { ...label.variants?.size?.md },
        input: { ...input.variants?.size?.md },
        select: { ...select.variants?.size?.md?.trigger },
      },
      sm: {
        label: { ...label.variants?.size?.sm },
        input: { ...input.variants?.size?.sm },
        select: { ...select.variants?.size?.sm?.trigger },
      },
    },
    invalid: {
      true: {
        input: { ...input.variants?.invalid?.true },
        textarea: { ...textarea.variants?.invalid?.true },
      },
    },
  },
  defaultVariants: {
    size: "lg",
    invalid: false,
  },
});

export default inputText;

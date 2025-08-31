/**
 * source:
 * https://github.com/digital-go-jp/design-system-example-components-react/blob/main/src/components/Input/Input.tsx
 */
import { defineSlotRecipe } from "@pandacss/dev";
import { fieldAnatomy } from "../anatomy";
import errorText from "./error-text";
import input from "./input";
import label from "./label";
import requirementBadge from "./requirement-badge";
import selectBox from "./select-box";
import supportText from "./support-text";
import textarea from "./textarea";

const field = defineSlotRecipe({
  className: "field",
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
      ...selectBox.base,
    },
    errorText: {
      ...errorText.base,
    },
    supportText: {
      ...supportText.base,
    },
    requirementBadge: {
      ...requirementBadge.base,
    },
  },
  variants: {
    size: {
      lg: {
        label: { ...label.variants?.size?.lg },
        input: { ...input.variants?.size?.lg },
        select: { ...selectBox.variants?.size?.lg },
      },
      md: {
        label: { ...label.variants?.size?.md },
        input: { ...input.variants?.size?.md },
        select: { ...selectBox.variants?.size?.md },
      },
      sm: {
        label: { ...label.variants?.size?.sm },
        input: { ...input.variants?.size?.sm },
        select: { ...selectBox.variants?.size?.sm },
      },
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export default field;

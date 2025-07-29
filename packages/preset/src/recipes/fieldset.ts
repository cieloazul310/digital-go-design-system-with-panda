import { defineSlotRecipe } from "@pandacss/dev";
import { fieldsetAnatomy } from "../anatomy";
import errorText from "./error-text";
import label from "./label";
import supportText from "./support-text";

export default defineSlotRecipe({
  className: "fieldset",
  slots: fieldsetAnatomy.keys(),
  base: {
    legend: {
      ...label.base,
    },
    supportText: {
      ...supportText.base,
    },
    errorText: {
      ...errorText.base,
    },
  },
  variants: {
    size: {
      lg: {
        legend: { ...label.variants?.size?.lg },
      },
      md: {
        legend: { ...label.variants?.size?.md },
      },
      sm: {
        legend: { ...label.variants?.size?.sm },
      },
    },
  },
  defaultVariants: {
    size: "md",
  },
});

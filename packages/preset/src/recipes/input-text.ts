import { defineSlotRecipe } from "@pandacss/dev";
import { anatomy as fieldsetAnatomy } from "@ark-ui/anatomy/fieldset";

const inputText = defineSlotRecipe({
  className: "input-text",
  slots: fieldsetAnatomy.keys(),
  base: {
    errorText: {},
    helperText: {},
  },
  variants: {
    size: {
      lg: {},
      md: {},
      sm: {},
    },
  },
  defaultVariants: {},
});

export default inputText;

import { defineSlotRecipe } from "@pandacss/dev";
import { anatomy as datePickerAnatomy } from "@zag-js/date-picker";
import calendar from "./calendar";
import label from "./label";
import input from "./input";

export default defineSlotRecipe({
  className: "date-picker",
  slots: datePickerAnatomy.extendWith("view").keys(),
  base: {
    ...calendar.base,
    control: {
      display: "flex",
      alignItems: "center",
      gap: 2,
      p: 4,
    },
    content: {
      ...calendar.base?.content,
      colorPalette: "keyColor",
      bg: "white",
      shadow: 1,
    },
    label: {
      ...label.base,
    },
    input: {
      ...input.base,
    },
  },
});

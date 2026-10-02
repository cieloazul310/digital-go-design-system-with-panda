import { defineGlobalStyles } from "@pandacss/dev";

export const globalCss = defineGlobalStyles({
  html: {
    fontSmoothing: "auto",
  },
  "h1, h2, h3, h4, h5, h6": {
    textWrap: "auto",
  },
});

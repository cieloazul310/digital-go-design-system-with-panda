import { defineSemanticTokens } from "@pandacss/dev";

export const semanticTokens = defineSemanticTokens({
  sizes: {
    "common-main-width": {
      value: {
        base: "{sizes.xl}",
        md: "{sizes.2xl}",
        lg: "{sizes.3xl}",
        xl: "{sizes.4xl}",
        "2xl": "{sizes.5xl}",
      },
    },
    "sidebar-width": {
      value: "{spacing.72}",
    },
  },
});

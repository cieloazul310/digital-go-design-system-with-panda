import { defineSemanticTokens } from "@pandacss/dev";
import { createKeyColor } from "@cieloazul310/digital-go-pandacss-utils";

const colors = defineSemanticTokens.colors({
  keyColor: createKeyColor("blue"),
  ring: { value: "{colors.yellow.300}" },
});

export default colors;

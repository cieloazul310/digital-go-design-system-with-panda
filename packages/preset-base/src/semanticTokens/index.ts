import { defineSemanticTokens } from "@pandacss/dev";
import colors from "./colors";

export default defineSemanticTokens({
  colors,
  fontWeights: {
    N: { value: "{fontWeights.400}", description: "400 (normal)" },
    M: { value: "{fontWeights.500}", description: "500" },
    B: { value: "{fontWeights.700}", description: "700 (bold)" },
  },
  radii: {
    sm: { value: "{radii.8}" },
    md: { value: "{radii.16}" },
    lg: { value: "{radii.32}" },
  },
});

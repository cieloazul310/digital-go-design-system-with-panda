/**
 * source:
 * https://github.com/digital-go-jp/design-system-example-components/blob/main/src/components/Divider/Divider.tsx
 */
import { defineRecipe } from "@pandacss/dev";

const divider = defineRecipe({
  className: "divider",
  description:
    "ディバイダーは、異なるセクション、コンポーネント、またはコンテンツのグループ間に設けられる視覚的な区切りで、HTMLのhr要素に相当します。要素間に明確な区切りを設けることで、読みやすさを向上させる役割を果たします。",
  variants: {
    color: {
      "gray-420": {
        borderColor: "solid-gray-420",
      },
      "gray-536": { borderColor: "solid-gray-536" },
      black: { borderColor: "black" },
    },
  },
  defaultVariants: {
    color: "gray-420",
  },
});

export default divider;

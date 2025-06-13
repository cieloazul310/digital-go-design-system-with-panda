/**
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/react/src/anatomy.ts
 */
import { createAnatomy } from "@ark-ui/react/anatomy";

export const breadcrumbAnatomy = createAnatomy("breadcrumb").parts(
  "root",
  "list",
  "item",
  "link",
  "separator",
);

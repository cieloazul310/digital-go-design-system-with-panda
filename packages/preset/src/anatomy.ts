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

export const menuListAnatomy = createAnatomy("menu-list").parts(
  "root",
  "label",
  "content",
  "item",
  "itemGroup",
  "itemGroupLabel",
  "itemText",
  "itemIndicator",
  "input",
);

export const notificationBannerAnatomy = createAnatomy(
  "notification-banner",
).parts("root", "icon", "close", "header", "heading", "body");

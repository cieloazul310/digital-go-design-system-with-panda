/**
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/react/src/anatomy.ts
 */
import { createAnatomy } from "@zag-js/anatomy";

export const breadcrumbAnatomy = createAnatomy("breadcrumb").parts(
  "root",
  "list",
  "item",
  "link",
  "separator",
);

export const cardAnatomy = createAnatomy("card").parts(
  "root",
  "main",
  "image",
  "sub",
  "title",
);

export const disclosureAnatomy = createAnatomy("disclosure").parts(
  "root",
  "summary",
  "icon",
  "content",
);

/**
 * https://github.com/chakra-ui/ark/blob/main/packages/react/src/components/field/field.anatomy.ts
 */
export const fieldAnatomy = createAnatomy("field").parts(
  "root",
  "errorText",
  "supportText",
  "input",
  "label",
  "select",
  "textarea",
  "requirementBadge",
);

/**
 * https://github.com/chakra-ui/ark/blob/main/packages/react/src/components/fieldset/fieldset.anatomy.ts
 */
export const fieldsetAnatomy = createAnatomy("fieldset").parts(
  "root",
  "errorText",
  "supportText",
  "legend",
);

export const inputTextAnatomy = createAnatomy("field").parts(
  "root",
  "errorText",
  "helperText",
  "input",
  "label",
  "select",
  "textarea",
  "requiredIndicator",
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

export const resourceListAnatomy = createAnatomy("resource-list").parts(
  "root",
  "main",
  "action",
  "content",
  "title",
);

export const tableAnatomy = createAnatomy("table").parts(
  "root",
  "head",
  "body",
  "foot",
  "row",
  "header",
  "cell",
  "colgroup",
  "col",
  "caption",
);

export const demoMap = {
  // accordion
  accordion: () => import("@/demo/accordion"),

  // breadcrumb
  breadcrumb: () => import("@/demo/breadcrumb"),

  // button
  button: () => import("@/demo/button"),
  "button-colorpalette": () => import("@/demo/button-colorpalette"),

  // card
  card: () => import("@/demo/card"),
  "card-horizontal": () => import("@/demo/card-horizontal"),
  "card-aslink": () => import("@/demo/card-aslink"),

  // checkbox
  checkbox: () => import("@/demo/checkbox"),
  "checkbox-group": () => import("@/demo/checkbox-group"),
  "checkbox-indeterminate": () => import("@/demo/checkbox-indeterminate"),
  "checkbox-with-fieldset": () => import("@/demo/checkbox-with-fieldset"),

  // disclosure
  disclosure: () => import("@/demo/disclosure"),
  "disclosure-as-details": () => import("@/demo/disclosure-as-details"),

  // divider
  divider: () => import("@/demo/divider"),

  // drawer
  drawer: () => import("@/demo/drawer"),

  "hamburger-menu-button": () => import("@/demo/hamburger-menu-button"),
  "hamburger-menu-button-mobile": () =>
    import("@/demo/hamburger-menu-button-mobile"),

  // resource-list
  "resource-list": () => import("@/demo/resource-list"),
  "resource-list-aslink": () => import("@/demo/resource-list-aslink"),

  // table
  table: () => import("@/demo/table"),
  "table-dense-hovered-striped": () =>
    import("@/demo/table-dense-hovered-striped"),
};

export type DemoVariantMap = keyof typeof demoMap;

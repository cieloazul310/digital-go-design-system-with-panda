export const demoMap = {
  accordion: () => import("@/demo/accordion"),
  button: () => import("@/demo/button"),
  "button-colorpalette": () => import("@/demo/button-colorpalette"),
  card: () => import("@/demo/card"),
  "card-horizontal": () => import("@/demo/card-horizontal"),
  "card-aslink": () => import("@/demo/card-aslink"),
  "resource-list": () => import("@/demo/resource-list"),
  "resource-list-aslink": () => import("@/demo/resource-list-aslink"),
  table: () => import("@/demo/table"),
  "table-dense-hovered-striped": () =>
    import("@/demo/table-dense-hovered-striped"),
};

export type DemoVariantMap = keyof typeof demoMap;

export const demoMap = {
  accordion: () => import("@/demo/accordion"),
  button: () => import("@/demo/button"),
  "button-colorpalette": () => import("@/demo/button-colorpalette"),
};

export type DemoVariantMap = keyof typeof demoMap;

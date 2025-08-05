/**
 * Icon
 * https://github.com/digital-go-jp/design-system-example-components/blob/main/src/components/Breadcrumbs/Breadcrumbs.tsx
 */
"use client";
import { ark } from "@ark-ui/react/factory";
import { breadcrumb } from "styled-system/recipes";
import { createStyleContext } from "styled-system/jsx";
import type { ComponentProps } from "styled-system/types";

const { withProvider, withContext } = createStyleContext(breadcrumb);

export type RootProps = ComponentProps<typeof Root>;
export const Root = withProvider(ark.nav, "root");

export type LabelProps = ComponentProps<typeof Label>;

export const Label = withContext(ark.span, "label");

export type ListProps = ComponentProps<typeof List>;

export const List = withContext(ark.ol, "list");

export type ItemProps = ComponentProps<typeof Item>;

export const Item = withContext(ark.li, "item");

export type LinkProps = ComponentProps<typeof Link>;

export const Link = withContext(ark.a, "link");

const Icon = ({ ...props }: ComponentProps<"svg">) => (
  <ark.svg
    {...props}
    aria-hidden={true}
    fill="none"
    height="12"
    viewBox="0 0 12 12"
    width="12"
  >
    <path
      d="M4.50078 1.2998L3.80078 1.9998L7.80078 5.9998L3.80078 9.9998L4.50078 10.6998L9.20078 5.9998L4.50078 1.2998Z"
      fill="currentColor"
    />
  </ark.svg>
);

export type SeparatorProps = ComponentProps<typeof Separator>;

export const Separator = withContext(Icon, "separator");

/**
 * Icon
 * https://github.com/digital-go-jp/design-system-example-components/blob/main/src/components/Breadcrumbs/Breadcrumbs.tsx
 */

"use client";
import type { Assign, PolymorphicProps } from "@ark-ui/react";
import { ark } from "@ark-ui/react/factory";
import {
  breadcrumb,
  type BreadcrumbVariantProps,
} from "@digital-go-pandacss/styled-system/recipes";
import type {
  ComponentProps,
  HTMLStyledProps,
} from "@digital-go-pandacss/styled-system/types";
import { createStyleContext } from "../utils/create-style-context";

const { withProvider, withContext } = createStyleContext(breadcrumb);

export type RootProps = ComponentProps<typeof Root>;
export const Root = withProvider<
  HTMLDivElement,
  Assign<
    Assign<HTMLStyledProps<"nav">, PolymorphicProps>,
    BreadcrumbVariantProps
  >
>(ark.nav, "root");

export type ListProps = ComponentProps<typeof List>;

export const List = withContext<
  HTMLElement,
  Assign<HTMLStyledProps<"ol">, PolymorphicProps>
>(ark.ol, "list");

export type ItemProps = ComponentProps<typeof Item>;

export const Item = withContext<
  HTMLElement,
  Assign<HTMLStyledProps<"li">, PolymorphicProps>
>(ark.li, "item");

export type LinkProps = ComponentProps<typeof Link>;

export const Link = withContext<
  HTMLAnchorElement,
  Assign<HTMLStyledProps<"a">, PolymorphicProps>
>(ark.a, "link");

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

export const Separator = withContext<
  HTMLElement,
  Assign<HTMLStyledProps<"svg">, PolymorphicProps>
>(Icon, "separator");

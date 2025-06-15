/**
 * Reference:
 * https://github.com/cschroeter/park-ui/blob/main/components/react/src/components/ui/styled/alert.tsx
 */
"use client";
import type { Assign, PolymorphicProps } from "@ark-ui/react";
import { ark } from "@ark-ui/react/factory";
import {
  notificationBanner,
  type NotificationBannerVariantProps,
} from "@import-map-package/styled-system/recipes";
import type {
  ComponentProps,
  HTMLStyledProps,
} from "@import-map-package/styled-system/types";
import { createStyleContext } from "../utils/create-style-context";
import { NotificationBannerIcon } from "./icon";

const { withProvider, withContext } = createStyleContext(notificationBanner);

export type RootProps = ComponentProps<typeof Root>;
export const Root = withProvider<
  HTMLDivElement,
  Assign<
    Assign<HTMLStyledProps<"div">, PolymorphicProps>,
    NotificationBannerVariantProps
  >
>(ark.div, "root");

export const Body = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<"div">, PolymorphicProps>
>(ark.div, "body");

export const Header = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<"div">, PolymorphicProps>
>(ark.div, "header");

export const Heading = withContext<
  HTMLHeadingElement,
  Assign<HTMLStyledProps<"h2">, PolymorphicProps>
>(ark.h2, "heading");

export const Icon = withContext<
  HTMLOrSVGElement,
  Assign<HTMLStyledProps<"svg">, PolymorphicProps>
>(NotificationBannerIcon, "icon");

export const Close = withContext<
  HTMLButtonElement,
  Assign<HTMLStyledProps<"button">, PolymorphicProps>
>(ark.button, "close");

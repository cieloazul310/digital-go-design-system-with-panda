"use client";
import type { Assign, PolymorphicProps } from "@ark-ui/react";
import { Collapsible } from "@ark-ui/react/collapsible";
import { ark } from "@ark-ui/react/factory";
import {
  type DisclosureVariantProps,
  disclosure,
} from "@cieloazul310/styled-system/recipes";
import type {
  ComponentProps,
  HTMLStyledProps,
} from "@cieloazul310/styled-system/types";
import { createStyleContext } from "../utils/create-style-context";

const { withProvider, withContext } = createStyleContext(disclosure);

export type RootProps = ComponentProps<typeof Root>;
export const Root = withProvider<
  HTMLElement,
  Assign<
    Assign<HTMLStyledProps<"details">, PolymorphicProps>,
    DisclosureVariantProps
  >
>(Collapsible.Root, "root");

export type SummaryProps = ComponentProps<typeof Summary>;
export const Summary = withContext<
  HTMLElement,
  Assign<HTMLStyledProps<"summary">, PolymorphicProps>
>(Collapsible.Trigger, "summary");

export type IconProps = ComponentProps<typeof Icon>;
export const Icon = withContext<
  HTMLElement,
  Assign<HTMLStyledProps<"span">, PolymorphicProps>
>(ark.span, "icon");

export type ContentProps = ComponentProps<typeof Content>;
export const Content = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<"div">, PolymorphicProps>
>(Collapsible.Content, "content");

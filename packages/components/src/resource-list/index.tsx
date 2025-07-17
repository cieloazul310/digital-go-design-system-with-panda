/**
 * Reference:
 * https://github.com/cschroeter/park-ui/blob/main/components/react/src/components/ui/styled/alert.tsx
 */
"use client";
import type { Assign, PolymorphicProps } from "@ark-ui/react";
import { ark } from "@ark-ui/react/factory";
import {
  resourceList,
  type ResourceListVariantProps,
} from "@digital-go-pandacss/styled-system/recipes";
import type {
  ComponentProps,
  HTMLStyledProps,
} from "@digital-go-pandacss/styled-system/types";
import { createStyleContext } from "../utils/create-style-context";

const { withProvider, withContext } = createStyleContext(resourceList);

export type RootProps = ComponentProps<typeof Root>;
export const Root = withProvider<
  HTMLDivElement,
  Assign<
    Assign<HTMLStyledProps<"div">, PolymorphicProps>,
    ResourceListVariantProps
  >
>(ark.div, "root");

export const ContentsContainer = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<"div">, PolymorphicProps>
>(ark.div, "contentsContainer");

export const FunctionButton = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<"div">, PolymorphicProps>
>(ark.div, "functionButton");

export const Form = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<"div">, PolymorphicProps>
>(ark.div, "form");

export const FrontIcon = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<"div">, PolymorphicProps>
>(ark.div, "frontIcon");

export const Content = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<"div">, PolymorphicProps>
>(ark.div, "content");

export const Title = withContext<
  HTMLHeadingElement,
  Assign<HTMLStyledProps<"h2">, PolymorphicProps>
>(ark.h2, "title");

export const Label = withContext<
  HTMLSpanElement,
  Assign<HTMLStyledProps<"span">, PolymorphicProps>
>(ark.span, "label");

export const SuportText = withContext<
  HTMLParagraphElement,
  Assign<HTMLStyledProps<"p">, PolymorphicProps>
>(ark.p, "supportText");

export const SubLabel = withContext<
  HTMLSpanElement,
  Assign<HTMLStyledProps<"span">, PolymorphicProps>
>(ark.span, "subLabel");

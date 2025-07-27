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
} from "styled-system/recipes";
import type { ComponentProps, HTMLStyledProps } from "styled-system/types";
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

export const Main = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<"div">, PolymorphicProps>
>(ark.div, "main", { defaultClassName: "group" });

export const Action = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<"div">, PolymorphicProps>
>(ark.div, "action");

export const Content = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<"div">, PolymorphicProps>
>(ark.div, "content");

export const Title = withContext<
  HTMLHeadingElement,
  Assign<HTMLStyledProps<"h2">, PolymorphicProps>
>(ark.h2, "title");

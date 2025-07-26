"use client";
import type { Assign, PolymorphicProps } from "@ark-ui/react";
import { ark } from "@ark-ui/react/factory";
import { card, type CardVariantProps } from "styled-system/recipes";
import type { ComponentProps, HTMLStyledProps } from "styled-system/types";
import { createStyleContext } from "../utils/create-style-context";

const { withProvider, withContext } = createStyleContext(card);

export type RootProps = ComponentProps<typeof Root>;
export const Root = withProvider<
  HTMLDivElement,
  Assign<Assign<HTMLStyledProps<"div">, PolymorphicProps>, CardVariantProps>
>(ark.div, "root", { defaultClassName: "group" });

export const Main = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<"div">, PolymorphicProps>
>(ark.div, "main");

export const Image = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<"div">, PolymorphicProps>
>(ark.div, "image");

export const Sub = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<"div">, PolymorphicProps>
>(ark.div, "sub");

export const Title = withContext<
  HTMLHeadingElement,
  Assign<HTMLStyledProps<"h2">, PolymorphicProps>
>(ark.h2, "title");

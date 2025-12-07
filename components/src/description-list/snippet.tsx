"use client";
import { ark } from "@ark-ui/react/factory";
import { descriptionList } from "styled-system/recipes";
import { createStyleContext } from "styled-system/jsx";
import type { ComponentProps } from "styled-system/types";

const { withProvider, withContext } = createStyleContext(descriptionList);

export type RootProps = ComponentProps<typeof Root>;
export const Root = withProvider(ark.dl, "root");

export const Item = withContext(ark.div, "item");

export const ItemTerm = withContext(ark.dt, "item-term");

export const ItemMarker = withContext(ark.span, "item-marker");

export const ItemDescription = withContext(ark.dd, "item-description");

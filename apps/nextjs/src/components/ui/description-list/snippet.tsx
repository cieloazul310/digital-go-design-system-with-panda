// Generated from Custom Source Directory
"use client";
import { ark } from "@ark-ui/react/factory";
import { descriptionList } from "styled-system/recipes";
import { createStyleContext } from "styled-system/jsx";
import type { ComponentProps } from "styled-system/types";

const { withProvider, withContext } = createStyleContext(descriptionList);

export type RootProps = ComponentProps<typeof Root>;
export const Root = withProvider(ark.dl, "root");

export const Item = withContext(ark.div, "item");

export const Term = withContext(ark.dt, "term");

export const Marker = withContext(ark.span, "marker");

export const Description = withContext(ark.dd, "description");

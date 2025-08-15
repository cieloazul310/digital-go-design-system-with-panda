"use client";
import { ark } from "@ark-ui/react/factory";
import { emergencyBanner } from "styled-system/recipes";
import { createStyleContext } from "styled-system/jsx";
import type { ComponentProps } from "styled-system/types";

const { withProvider, withContext } = createStyleContext(emergencyBanner);

export type RootProps = ComponentProps<typeof Root>;
export const Root = withProvider(ark.div, "root");

export const Heading = withContext(ark.h2, "heading");

export const Body = withContext(ark.div, "body");

export const Action = withContext(ark.div, "action");

export const Button = withContext(ark.button, "button");

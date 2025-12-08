"use client";
import { Steps } from "@ark-ui/react/steps";
import { stepNavigation } from "styled-system/recipes";
import { createStyleContext } from "styled-system/jsx";
import type { ComponentProps } from "styled-system/types";

const { withRootProvider, withProvider, withContext } =
  createStyleContext(stepNavigation);

export type RootProviderProps = ComponentProps<typeof RootProvider>;
export const RootProvider = withRootProvider(Steps.RootProvider);

export type RootProps = ComponentProps<typeof Root>;
export const Root = withProvider(Steps.Root, "root");

export const List = withContext(Steps.List, "list");

export const Item = withContext(Steps.Item, "item");

export const Trigger = withContext(Steps.Trigger, "trigger");

export const Indicator = withContext(Steps.Indicator, "indicator");

export const Separator = withContext(Steps.Separator, "separator");

export { StepsContext as Context } from "@ark-ui/react/steps";

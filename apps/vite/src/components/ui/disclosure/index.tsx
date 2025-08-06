"use client";
import { Collapsible } from "@ark-ui/react/collapsible";
import { ark } from "@ark-ui/react/factory";
import { disclosure } from "styled-system/recipes";
import { createStyleContext } from "styled-system/jsx";
import type { ComponentProps } from "styled-system/types";

const { withProvider, withContext } = createStyleContext(disclosure);

export type RootProviderProps = ComponentProps<typeof RootProvider>;
export const RootProvider = withProvider(Collapsible.RootProvider, "root");

export type RootProps = ComponentProps<typeof Root>;
export const Root = withProvider(Collapsible.Root, "root");

export type SummaryProps = ComponentProps<typeof Summary>;
export const Summary = withContext(Collapsible.Trigger, "summary", {
  defaultProps: { className: "group" },
});

export type IconProps = ComponentProps<typeof Icon>;
export const Icon = withContext(ark.span, "icon");

export type ContentProps = ComponentProps<typeof Content>;
export const Content = withContext(Collapsible.Content, "content");

export { CollapsibleContext as Context } from "@ark-ui/react/collapsible";

export type { CollapsibleOpenChangeDetails as OpenChangeDetails } from "@ark-ui/react/collapsible";

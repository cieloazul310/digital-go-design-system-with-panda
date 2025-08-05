/**
 * reference:
 * https://github.com/cschroeter/park-ui/blob/main/components/react/src/components/ui/styled/accordion.tsx
 */
"use client";
import { Accordion } from "@ark-ui/react/accordion";
import { accordion } from "styled-system/recipes";
import { createStyleContext } from "styled-system/jsx";
import type { ComponentProps } from "styled-system/types";

const { withRootProvider, withProvider, withContext } =
  createStyleContext(accordion);

export type RootProviderProps = ComponentProps<typeof RootProvider>;
export const RootProvider = withRootProvider(Accordion.RootProvider);

export type RootProps = ComponentProps<typeof Root>;
export const Root = withProvider(Accordion.Root, "root");

export const ItemContent = withContext(Accordion.ItemContent, "itemContent");

export const ItemIndicator = withContext(
  Accordion.ItemIndicator,
  "itemIndicator",
);

export const Item = withContext(Accordion.Item, "item");

export const ItemTrigger = withContext(Accordion.ItemTrigger, "itemTrigger", {
  defaultProps: { className: "group" },
});

export {
  AccordionContext as Context,
  AccordionItemContext as ItemContext,
} from "@ark-ui/react/accordion";

export type {
  AccordionFocusChangeDetails as FocusChangeDetails,
  AccordionValueChangeDetails as ValueChangeDetails,
} from "@ark-ui/react/accordion";

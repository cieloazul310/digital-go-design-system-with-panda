/**
 * reference:
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/react/src/components/select/select.tsx
 */
"use client";
import type { JSX, RefAttributes } from "react";
import type { CollectionItem } from "@ark-ui/react/select";
import { Select } from "@ark-ui/react/select";
import { select, type SelectVariantProps } from "styled-system/recipes";
import { createStyleContext } from "styled-system/jsx";

const { withProvider, withContext } = createStyleContext(select);

export type RootProviderProps<T extends CollectionItem> =
  Select.RootProviderProps<T> & SelectVariantProps;
export const RootProvider = withProvider(Select.RootProvider, "root") as {
  <T extends CollectionItem>(props: RootProviderProps<T>): JSX.Element;
};

export type RootProps<T extends CollectionItem> = Select.RootProps<T> &
  RefAttributes<HTMLDivElement> &
  SelectVariantProps;
export const Root = withProvider(Select.Root, "root") as {
  <T extends CollectionItem>(props: RootProps<T>): JSX.Element;
};

export const ClearTrigger = withContext(Select.ClearTrigger, "clearTrigger");

export const Content = withContext(Select.Content, "content");

export const Control = withContext(Select.Control, "control");

export const Indicator = withContext(Select.Indicator, "indicator");

export const ItemGroupLabel = withContext(
  Select.ItemGroupLabel,
  "itemGroupLabel",
);

export const ItemGroup = withContext(Select.ItemGroup, "itemGroup");

export const ItemIndicator = withContext(Select.ItemIndicator, "itemIndicator");

export const Item = withContext(Select.Item, "item");

export const ItemText = withContext(Select.ItemText, "itemText");

export const Label = withContext(Select.Label, "label");

export const List = withContext(Select.List, "list");

export const Positioner = withContext(Select.Positioner, "positioner");

export const Trigger = withContext(Select.Trigger, "trigger");

export const ValueText = withContext(Select.ValueText, "valueText");

export {
  SelectContext as Context,
  SelectHiddenSelect as HiddenSelect,
} from "@ark-ui/react/select";

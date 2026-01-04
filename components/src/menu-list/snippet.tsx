"use client";
import type { JSX, RefAttributes } from "react";
import { Listbox, type CollectionItem } from "@ark-ui/react/listbox";
import { menuList, type MenuListVariantProps } from "styled-system/recipes";
import { createStyleContext } from "styled-system/jsx";

const { withProvider, withContext } = createStyleContext(menuList);

export type RootProviderProps<T extends CollectionItem> =
  Listbox.RootProviderProps<T> & MenuListVariantProps;
export const RootProvider = withProvider(Listbox.RootProvider, "root") as {
  <T extends CollectionItem>(props: RootProviderProps<T>): JSX.Element;
};

export type RootProps<T extends CollectionItem> = Listbox.RootProps<T> &
  RefAttributes<HTMLDivElement> &
  MenuListVariantProps;
export const Root = withProvider(Listbox.Root, "root") as {
  <T extends CollectionItem>(props: RootProps<T>): JSX.Element;
};

export const Label = withProvider(Listbox.Label, "label");

export const Content = withContext(Listbox.Content, "content");

export const Item = withContext(Listbox.Item, "item");

export const ItemGroup = withContext(Listbox.ItemGroup, "itemGroup");

export const ItemGroupLabel = withContext(
  Listbox.ItemGroupLabel,
  "itemGroupLabel",
);

export const ItemText = withContext(Listbox.ItemText, "itemText");

export const ItemIndicator = withContext(
  Listbox.ItemIndicator,
  "itemIndicator",
);

export { ListboxContext as Context } from "@ark-ui/react/listbox";

export type {
  ListboxHighlightChangeDetails as HighlightChangeDetails,
  ListboxScrollToIndexDetails as ScrollToIndexDetails,
  ListboxSelectionDetails as SelectionDetails,
  ListboxValueChangeDetails as ValueChangeDetails,
} from "@ark-ui/react/listbox";

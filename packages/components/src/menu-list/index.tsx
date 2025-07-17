"use client";
import type { Assign } from "@ark-ui/react";
import { Listbox, type CollectionItem } from "@ark-ui/react/listbox";
import {
  menuList,
  type MenuListVariantProps,
} from "@digital-go-pandacss/styled-system/recipes";
import type {
  ComponentProps,
  HTMLStyledProps,
} from "@digital-go-pandacss/styled-system/types";
import { createStyleContext } from "../utils/create-style-context";

const { withProvider, withContext } = createStyleContext(menuList);

export type RootProviderProps = ComponentProps<typeof RootProvider>;
export const RootProvider = withProvider<
  HTMLDivElement,
  Assign<
    Assign<
      HTMLStyledProps<"div">,
      Listbox.RootProviderBaseProps<CollectionItem>
    >,
    MenuListVariantProps
  >
>(Listbox.RootProvider, "root");

export type RootProps = ComponentProps<typeof Root>;
export const Root = withProvider<
  HTMLDivElement,
  Assign<
    Assign<HTMLStyledProps<"div">, Listbox.RootBaseProps<CollectionItem>>,
    MenuListVariantProps
  >
>(Listbox.Root, "root");

export const Label = withProvider<
  HTMLLabelElement,
  Assign<
    Assign<HTMLStyledProps<"label">, Listbox.LabelProps>,
    MenuListVariantProps
  >
>(Listbox.Label, "label");

export const Content = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<"div">, Listbox.ContentProps>
>(Listbox.Content, "content");

export const Item = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<"div">, Listbox.ItemBaseProps>
>(Listbox.Item, "item");

export const ItemGroup = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<"div">, Listbox.ItemGroupProps>
>(Listbox.ItemGroup, "itemGroup");

export const ItemGroupLabel = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<"div">, Listbox.ItemGroupLabelProps>
>(Listbox.ItemGroupLabel, "itemGroupLabel");

export const ItemText = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<"div">, Listbox.ItemTextProps>
>(Listbox.ItemText, "itemText");

export const ItemIndicator = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<"div">, Listbox.ItemIndicatorBaseProps>
>(Listbox.ItemIndicator, "itemIndicator");

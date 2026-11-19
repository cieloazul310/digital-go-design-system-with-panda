"use client";
import { Menu } from "@ark-ui/react/menu";
import { menu } from "styled-system/recipes";
import { createSlotRecipeContext } from "styled-system/jsx";
import type { ComponentProps } from "styled-system/types";

const { withRootProvider, withContext } = createSlotRecipeContext(menu);

export type RootProviderProps = ComponentProps<typeof RootProvider>;
export const RootProvider = withRootProvider(Menu.RootProvider);

export type RootProps = ComponentProps<typeof Root>;
export const Root = withRootProvider(Menu.Root);

export const Arrow = withContext(Menu.Arrow, "arrow");

export const ArrowTip = withContext(Menu.ArrowTip, "arrowTip");

export const CheckboxItem = withContext(Menu.CheckboxItem, "item");

export const Content = withContext(Menu.Content, "content");

export const ContextTrigger = withContext(
  Menu.ContextTrigger,
  "contextTrigger",
);

const Chevron = (
  <svg
    width={16}
    height={16}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden={true}
  >
    <path d="M12 17L3 8L4 7L12 15L20 7L21 8L12 17Z" />
  </svg>
);

export const Indicator = withContext(Menu.Indicator, "indicator", {
  defaultProps: { children: Chevron },
});

export const ItemGroupLabel = withContext(
  Menu.ItemGroupLabel,
  "itemGroupLabel",
);

export const ItemGroup = withContext(Menu.ItemGroup, "itemGroup");

export const ItemIndicator = withContext(Menu.ItemIndicator, "itemIndicator");

export const Item = withContext(Menu.Item, "item");

export const ItemText = withContext(Menu.ItemText, "itemText");

export const Positioner = withContext(Menu.Positioner, "positioner");

export const RadioItemGroup = withContext(Menu.RadioItemGroup, "itemGroup");

export const RadioItem = withContext(Menu.RadioItem, "item");

export const Separator = withContext(Menu.Separator, "separator");

export const TriggerItem = withContext(Menu.TriggerItem, "triggerItem");

export const Trigger = withContext(Menu.Trigger, "trigger");

export { MenuContext as Context } from "@ark-ui/react/menu";

export type {
  MenuHighlightChangeDetails as HighlightChangeDetails,
  MenuOpenChangeDetails as OpenChangeDetails,
  MenuSelectionDetails as SelectionDetails,
  MenuValueChangeDetails as ValueChangeDetails,
} from "@ark-ui/react/menu";

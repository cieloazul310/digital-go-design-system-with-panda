// Generated from Custom Source Directory
"use client";
import { Switch } from "@ark-ui/react/switch";
import { createSlotRecipeContext } from "styled-system/jsx";
import { switchRecipe } from "styled-system/recipes";
import type { ComponentProps } from "styled-system/types";

const { withProvider, withContext } = createSlotRecipeContext(switchRecipe);

export type RootProps = ComponentProps<typeof Root>;
export const Root = withProvider(Switch.Root, "root", {
  defaultProps: { className: "group" },
});

export type RootProviderProps = ComponentProps<typeof RootProvider>;
export const RootProvider = withProvider(Switch.RootProvider, "root");

export const Control = withContext(Switch.Control, "control");

export const Thumb = withContext(Switch.Thumb, "thumb");

export const Label = withContext(Switch.Label, "label");

export const HiddenInput = Switch.HiddenInput;

export { SwitchContext as Context } from "@ark-ui/react/switch";

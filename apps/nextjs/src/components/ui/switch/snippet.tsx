// Generated from Custom Source Directory
"use client";
import { Switch as ArkSwitch } from "@ark-ui/react/switch";
import { createSlotRecipeContext } from "styled-system/jsx";
import { switchRecipe } from "styled-system/recipes";
import type { ComponentProps } from "styled-system/types";

const { withProvider, withContext } = createSlotRecipeContext(switchRecipe);

export type RootProps = ComponentProps<typeof Root>;
export const Root = withProvider(ArkSwitch.Root, "root", {
  defaultProps: { className: "group" },
});

export type RootProviderProps = ComponentProps<typeof RootProvider>;
export const RootProvider = withProvider(ArkSwitch.RootProvider, "root");

export const Control = withContext(ArkSwitch.Control, "control");

export const Thumb = withContext(ArkSwitch.Thumb, "thumb");

export const Label = withContext(ArkSwitch.Label, "label");

export const HiddenInput = ArkSwitch.HiddenInput;

export { SwitchContext as Context } from "@ark-ui/react/switch";

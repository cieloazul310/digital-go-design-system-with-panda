"use client";
import { Fieldset } from "@ark-ui/react/fieldset";
import { fieldset } from "styled-system/recipes";
import { createStyleContext } from "styled-system/jsx";
import type { ComponentProps } from "styled-system/types";

const { withProvider, withContext } = createStyleContext(fieldset);

export type RootProviderProps = ComponentProps<typeof RootProvider>;
export const RootProvider = withProvider(Fieldset.RootProvider, "root");

export type RootProps = ComponentProps<typeof Root>;
export const Root = withProvider(Fieldset.Root, "root");

export const ErrorText = withContext(Fieldset.ErrorText, "errorText");

export const SupportText = withContext(Fieldset.HelperText, "supportText");

export const Legend = withContext(Fieldset.Legend, "legend");

export { FieldsetContext as Context } from "@ark-ui/react/fieldset";

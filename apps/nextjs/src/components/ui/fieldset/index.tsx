"use client";
import type { Assign } from "@ark-ui/react";
import { Fieldset } from "@ark-ui/react/fieldset";
import { type FieldsetVariantProps, fieldset } from "styled-system/recipes";
import type { ComponentProps, HTMLStyledProps } from "styled-system/types";
import { createStyleContext } from "../utils/create-style-context";

const { withProvider, withContext } = createStyleContext(fieldset);

export type RootProviderProps = ComponentProps<typeof RootProvider>;
export const RootProvider = withProvider<
  HTMLDivElement,
  Assign<
    Assign<HTMLStyledProps<"div">, Fieldset.RootProviderBaseProps>,
    FieldsetVariantProps
  >
>(Fieldset.RootProvider, "root");

export type RootProps = ComponentProps<typeof Root>;
export const Root = withProvider<
  HTMLDivElement,
  Assign<
    Assign<HTMLStyledProps<"div">, Fieldset.RootBaseProps>,
    FieldsetVariantProps
  >
>(Fieldset.Root, "root");

export const ErrorText = withContext<
  HTMLSpanElement,
  Assign<HTMLStyledProps<"span">, Fieldset.ErrorTextBaseProps>
>(Fieldset.ErrorText, "errorText");

export const SupportText = withContext<
  HTMLSpanElement,
  Assign<HTMLStyledProps<"span">, Fieldset.HelperTextBaseProps>
>(Fieldset.HelperText, "supportText");

export const Legend = withContext<
  HTMLLabelElement,
  Assign<HTMLStyledProps<"legend">, Fieldset.LegendBaseProps>
>(Fieldset.Legend, "legend");

export { FieldsetContext as Context } from "@ark-ui/react/fieldset";

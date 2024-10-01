"use client";
import type { Assign } from "@ark-ui/react";
import { Field } from "@ark-ui/react/field";
// import { styled } from "@import-map-package/styled-system/jsx";
import {
  type InputTextVariantProps,
  inputText,
  // input,
  // textarea,
} from "@import-map-package/styled-system/recipes";
import type {
  ComponentProps,
  HTMLStyledProps,
} from "@import-map-package/styled-system/types";
import { createStyleContext } from "../utils/create-style-context";

const { withProvider, withContext } = createStyleContext(inputText);

export type RootProviderProps = ComponentProps<typeof RootProvider>;
export const RootProvider = withProvider<
  HTMLDivElement,
  Assign<
    Assign<HTMLStyledProps<"div">, Field.RootProviderBaseProps>,
    InputTextVariantProps
  >
>(Field.RootProvider, "root");

export type RootProps = ComponentProps<typeof Root>;
export const Root = withProvider<
  HTMLDivElement,
  Assign<
    Assign<HTMLStyledProps<"div">, Field.RootBaseProps>,
    InputTextVariantProps
  >
>(Field.Root, "root");

export const ErrorText = withContext<
  HTMLSpanElement,
  Assign<HTMLStyledProps<"span">, Field.ErrorTextBaseProps>
>(Field.ErrorText, "errorText");

export const HelperText = withContext<
  HTMLSpanElement,
  Assign<HTMLStyledProps<"span">, Field.HelperTextBaseProps>
>(Field.HelperText, "helperText");

export const Label = withContext<
  HTMLLabelElement,
  Assign<HTMLStyledProps<"label">, Field.LabelBaseProps>
>(Field.Label, "label");

export const Select = withContext<
  HTMLSelectElement,
  Assign<HTMLStyledProps<"select">, Field.SelectBaseProps>
>(Field.Select, "select");

export const Input = withContext<
  HTMLInputElement,
  Assign<HTMLStyledProps<"input">, Field.SelectBaseProps>
>(Field.Select, "input");
/*
export type InputProps = ComponentProps<typeof Input>;
export const Input = styled(Field.Input, input);

export type TextareaProps = ComponentProps<typeof Textarea>;
export const Textarea = styled(Field.Textarea, textarea);
*/
export { FieldContext as Context } from "@ark-ui/react/field";

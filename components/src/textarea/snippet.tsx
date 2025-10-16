import type { ComponentProps } from "react";
import { ark } from "@ark-ui/react/factory";
import { styled } from "styled-system/jsx";
import { textarea, type TextareaVariantProps } from "styled-system/recipes";

export type TextareaProps = ComponentProps<typeof textarea> &
  TextareaVariantProps;

export const Textarea = styled(ark.textarea, textarea);

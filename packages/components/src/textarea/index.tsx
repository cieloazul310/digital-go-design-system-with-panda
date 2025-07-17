import { ark } from "@ark-ui/react/factory";
import { styled } from "@digital-go-pandacss/styled-system/jsx";
import {
  textarea,
  type TextareaVariantProps,
} from "@digital-go-pandacss/styled-system/recipes";

export type TextareaProps = TextareaVariantProps;

export const Textarea = styled(ark.textarea, textarea);

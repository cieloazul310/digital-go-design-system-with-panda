import { ark } from "@ark-ui/react/factory";
import { styled } from "@cieloazul310/styled-system/jsx";
import {
  textarea,
  type TextareaVariantProps,
} from "@cieloazul310/styled-system/recipes";

export type TextareaProps = TextareaVariantProps;

export const Textarea = styled(ark.textarea, textarea);

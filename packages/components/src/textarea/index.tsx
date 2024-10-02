import { ark } from "@ark-ui/react/factory";
import { styled } from "@import-map-package/styled-system/jsx";
import {
  textarea,
  type TextareaVariantProps,
} from "@import-map-package/styled-system/recipes";

export type TextareaProps = TextareaVariantProps;

export const Textarea = styled(ark.textarea, textarea);

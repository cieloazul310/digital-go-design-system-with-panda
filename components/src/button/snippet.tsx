/**
 * source:
 * https://github.com/cschroeter/park-ui/blob/main/components/react/src/components/ui/styled/button.tsx
 */
import { ark } from "@ark-ui/react/factory";
import { styled } from "styled-system/jsx";
import { button, type ButtonVariantProps } from "styled-system/recipes";
import type { HTMLStyledProps } from "styled-system/types";

export interface ButtonProps
  extends ButtonVariantProps,
    HTMLStyledProps<"button"> {}

export const Button = styled(ark.button, button);

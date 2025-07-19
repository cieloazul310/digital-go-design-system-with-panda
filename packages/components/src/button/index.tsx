/**
 * source:
 * https://github.com/cschroeter/park-ui/blob/main/components/react/src/components/ui/styled/button.tsx
 */
import type { PropsWithChildren } from "react";
import { ark } from "@ark-ui/react/factory";
import { styled } from "@cieloazul310/styled-system/jsx";
import {
  button,
  type ButtonVariantProps,
} from "@cieloazul310/styled-system/recipes";

export interface ButtonProps extends ButtonVariantProps, PropsWithChildren {}

export const Button = styled(ark.button, button);

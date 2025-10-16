/**
 * source:
 * https://github.com/cschroeter/park-ui/blob/main/components/react/src/components/ui/styled/button.tsx
 */
import type { PropsWithChildren } from "react";
import { ark } from "@ark-ui/react/factory";
import { styled } from "styled-system/jsx";
import { button, type ButtonVariantProps } from "styled-system/recipes";

export interface ButtonProps extends ButtonVariantProps, PropsWithChildren {}

export const Button = styled(ark.button, button);

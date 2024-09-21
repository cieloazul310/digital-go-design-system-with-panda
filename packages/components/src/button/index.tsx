import type { PropsWithChildren } from "react";
import { ark } from "@ark-ui/react/factory";
import { styled } from "@import-map-package/styled-system/jsx";
import {
  button,
  type ButtonVariantProps,
} from "@import-map-package/styled-system/recipes";

export interface ButtonProps extends ButtonVariantProps, PropsWithChildren {}

export const Button = styled(ark.button, button);

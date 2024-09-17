import { PropsWithChildren } from "react";
import {
  button,
  type ButtonVariantProps,
} from "@import-map-package/styled-system/recipes";

export interface ButtonProps extends ButtonVariantProps, PropsWithChildren {}

export const Button = ({ children, ...props }: ButtonProps) => {
  return <button className={button(props)}>{children}</button>;
};

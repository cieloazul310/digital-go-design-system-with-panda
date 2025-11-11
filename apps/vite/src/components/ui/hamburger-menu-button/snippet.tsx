// Generated from Custom Source Directory
import { ark } from "@ark-ui/react/factory";
import { styled } from "styled-system/jsx";
import {
  hamburgerMenuButton,
  type HamburgerMenuButtonVariantProps,
} from "styled-system/recipes";
import type { HTMLStyledProps } from "styled-system/jsx";

export interface HamburgerMenuButtonProps
  extends HamburgerMenuButtonVariantProps,
    HTMLStyledProps<"button"> {}

export const HamburgerMenuButton = styled(ark.button, hamburgerMenuButton);

export * from "./close-icon";
export * from "./close-with-label-icon";
export * from "./hamburger-icon";
export * from "./hamburger-with-label-icon";

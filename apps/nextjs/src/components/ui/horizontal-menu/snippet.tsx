// Generated from Custom Source Directory
import { ark } from "@ark-ui/react/factory";
import {
  horizontalMenu,
  type HorizontalMenuVariantProps,
} from "styled-system/recipes";
import { styled } from "styled-system/jsx";
import type { HTMLStyledProps } from "styled-system/types";

export interface HorizontalMenuProps
  extends HorizontalMenuVariantProps, HTMLStyledProps<"button"> {}

export const HorizontalMenu = styled(ark.button, horizontalMenu);

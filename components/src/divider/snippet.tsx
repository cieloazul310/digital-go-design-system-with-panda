import { ark } from "@ark-ui/react/factory";
import { styled } from "styled-system/jsx";
import {
  digitalGoDivider,
  type DigitalGoDividerVariantProps,
} from "styled-system/recipes";
import type { HTMLStyledProps } from "styled-system/jsx";

export interface DividerProps
  extends DigitalGoDividerVariantProps,
    Omit<HTMLStyledProps<"hr">, "color"> {}

export const Divider = styled(ark.hr, digitalGoDivider);

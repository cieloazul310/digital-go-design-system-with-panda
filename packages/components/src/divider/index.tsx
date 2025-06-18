import type { PropsWithChildren } from "react";
import { ark } from "@ark-ui/react/factory";
import { styled } from "@import-map-package/styled-system/jsx";
import {
  digitalGoDivider,
  type DigitalGoDividerVariantProps,
} from "@import-map-package/styled-system/recipes";

export interface DividerProps
  extends DigitalGoDividerVariantProps,
    PropsWithChildren {}

export const Divider = styled(ark.hr, digitalGoDivider);

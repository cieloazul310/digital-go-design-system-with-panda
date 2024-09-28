import type { PropsWithChildren } from "react";
import { ark } from "@ark-ui/react/factory";
import { styled } from "@import-map-package/styled-system/jsx";
import {
  divider,
  type DividerVariantProps,
} from "@import-map-package/styled-system/recipes";

export interface DividerProps extends DividerVariantProps, PropsWithChildren {}

export const Divider = styled(ark.hr, divider);

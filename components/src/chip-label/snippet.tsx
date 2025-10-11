// Generated from Custom Source Directory
import type { PropsWithChildren } from "react";
import { ark } from "@ark-ui/react/factory";
import { styled } from "styled-system/jsx";
import { chipLabel, type ChipLabelVariantProps } from "styled-system/recipes";

export interface ChipLabelProps
  extends ChipLabelVariantProps,
    PropsWithChildren {}

export const ChipLabel = styled(ark.span, chipLabel);

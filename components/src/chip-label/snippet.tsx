import { ark } from "@ark-ui/react/factory";
import { styled } from "styled-system/jsx";
import { chipLabel, type ChipLabelVariantProps } from "styled-system/recipes";
import type { HTMLStyledProps } from "styled-system/jsx";

export interface ChipLabelProps
  extends ChipLabelVariantProps,
    HTMLStyledProps<"span"> {}

export const ChipLabel = styled(ark.span, chipLabel);

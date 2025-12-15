import { ark } from "@ark-ui/react/factory";
import { styled } from "styled-system/jsx";
import { blockquote, type BlockquoteVariantProps } from "styled-system/recipes";
import type { HTMLStyledProps } from "styled-system/types";

export interface BlockquoteProps
  extends BlockquoteVariantProps, HTMLStyledProps<"blockquote"> {}

export const Blockquote = styled(ark.blockquote, blockquote);

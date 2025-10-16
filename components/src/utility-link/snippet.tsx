/**
 * source:
 * https://github.com/cschroeter/park-ui/blob/main/components/react/src/components/ui/styled/link.tsx
 */
import { ark } from "@ark-ui/react/factory";
import { styled } from "styled-system/jsx";
import { utilityLink } from "styled-system/recipes";
import type { ComponentProps } from "styled-system/types";

export type UtilityLinkProps = ComponentProps<typeof UtilityLink>;
export const UtilityLink = styled(ark.a, utilityLink);

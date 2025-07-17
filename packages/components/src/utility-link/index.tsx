/**
 * source:
 * https://github.com/cschroeter/park-ui/blob/main/components/react/src/components/ui/styled/link.tsx
 */
import { ark } from "@ark-ui/react/factory";
import { styled } from "@digital-go-pandacss/styled-system/jsx";
import { utilityLink } from "@digital-go-pandacss/styled-system/recipes";
import type { ComponentProps } from "@digital-go-pandacss/styled-system/types";

export type UtilityLinkProps = ComponentProps<typeof UtilityLink>;
export const UtilityLink = styled(ark.a, utilityLink);

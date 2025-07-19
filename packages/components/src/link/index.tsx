/**
 * source:
 * https://github.com/cschroeter/park-ui/blob/main/components/react/src/components/ui/styled/link.tsx
 */
import { ark } from "@ark-ui/react/factory";
import { styled } from "@cieloazul310/styled-system/jsx";
import { link } from "@cieloazul310/styled-system/recipes";
import type { ComponentProps } from "@cieloazul310/styled-system/types";

export type LinkProps = ComponentProps<typeof Link>;
export const Link = styled(ark.a, link);

/**
 * source:
 * https://github.com/cschroeter/park-ui/blob/main/components/react/src/components/ui/styled/link.tsx
 */
import { ark } from "@ark-ui/react/factory";
import { styled } from "@import-map-package/styled-system/jsx";
import { link } from "@import-map-package/styled-system/recipes";
import type { ComponentProps } from "@import-map-package/styled-system/types";

export type LinkProps = ComponentProps<typeof Link>;
export const Link = styled(ark.a, link);

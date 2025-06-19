import { ark } from "@ark-ui/react/factory";
import { styled } from "@import-map-package/styled-system/jsx";
import { list } from "@import-map-package/styled-system/recipes";
import type { ComponentProps } from "@import-map-package/styled-system/types";

export type ListProps = ComponentProps<typeof List>;
export const List = styled(ark.li, list);

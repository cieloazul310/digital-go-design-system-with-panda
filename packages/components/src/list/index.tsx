import { ark } from "@ark-ui/react/factory";
import { styled } from "@cieloazul310/styled-system/jsx";
import { list } from "@cieloazul310/styled-system/recipes";
import type { ComponentProps } from "@cieloazul310/styled-system/types";

export type ListProps = ComponentProps<typeof List>;
export const List = styled(ark.li, list);

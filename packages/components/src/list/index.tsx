import { ark } from "@ark-ui/react/factory";
import { styled } from "@digital-go-pandacss/styled-system/jsx";
import { list } from "@digital-go-pandacss/styled-system/recipes";
import type { ComponentProps } from "@digital-go-pandacss/styled-system/types";

export type ListProps = ComponentProps<typeof List>;
export const List = styled(ark.li, list);

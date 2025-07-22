import { ark } from "@ark-ui/react/factory";
import { styled } from "styled-system/jsx";
import { list } from "styled-system/recipes";
import type { ComponentProps } from "styled-system/types";

export type ListProps = ComponentProps<typeof List>;
export const List = styled(ark.li, list);

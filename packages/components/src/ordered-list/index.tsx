import { ark } from "@ark-ui/react/factory";
import { styled } from "@digital-go-pandacss/styled-system/jsx";
import { orderedList } from "@digital-go-pandacss/styled-system/recipes";
import type { ComponentProps } from "@digital-go-pandacss/styled-system/types";

export type OrderedListProps = ComponentProps<typeof OrderedList>;
export const OrderedList = styled(ark.ol, orderedList);

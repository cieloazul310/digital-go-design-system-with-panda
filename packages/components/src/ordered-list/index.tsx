import { ark } from "@ark-ui/react/factory";
import { styled } from "@cieloazul310/styled-system/jsx";
import { orderedList } from "@cieloazul310/styled-system/recipes";
import type { ComponentProps } from "@cieloazul310/styled-system/types";

export type OrderedListProps = ComponentProps<typeof OrderedList>;
export const OrderedList = styled(ark.ol, orderedList);

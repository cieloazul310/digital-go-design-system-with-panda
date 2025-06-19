import { ark } from "@ark-ui/react/factory";
import { styled } from "@import-map-package/styled-system/jsx";
import { orderedList } from "@import-map-package/styled-system/recipes";
import type { ComponentProps } from "@import-map-package/styled-system/types";

export type OrderedListProps = ComponentProps<typeof OrderedList>;
export const OrderedList = styled(ark.ol, orderedList);

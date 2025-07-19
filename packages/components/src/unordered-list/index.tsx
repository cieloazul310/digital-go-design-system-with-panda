import { ark } from "@ark-ui/react/factory";
import { styled } from "@cieloazul310/styled-system/jsx";
import { unorderedList } from "@cieloazul310/styled-system/recipes";
import type { ComponentProps } from "@cieloazul310/styled-system/types";

export type UnorderedListProps = ComponentProps<typeof UnorderedList>;
export const UnorderedList = styled(ark.ul, unorderedList);

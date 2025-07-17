import { ark } from "@ark-ui/react/factory";
import { styled } from "@digital-go-pandacss/styled-system/jsx";
import { unorderedList } from "@digital-go-pandacss/styled-system/recipes";
import type { ComponentProps } from "@digital-go-pandacss/styled-system/types";

export type UnorderedListProps = ComponentProps<typeof UnorderedList>;
export const UnorderedList = styled(ark.ul, unorderedList);

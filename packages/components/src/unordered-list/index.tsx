import { ark } from "@ark-ui/react/factory";
import { styled } from "@import-map-package/styled-system/jsx";
import { unorderedList } from "@import-map-package/styled-system/recipes";
import type { ComponentProps } from "@import-map-package/styled-system/types";

export type UnorderedListProps = ComponentProps<typeof UnorderedList>;
export const UnorderedList = styled(ark.ul, unorderedList);

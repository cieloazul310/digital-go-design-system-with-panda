/**
 * source:
 * https://github.com/cschroeter/park-ui/blob/main/components/react/src/components/ui/styled/table.tsx
 */
"use client";
import type { Assign, PolymorphicProps } from "@ark-ui/react";
import { ark } from "@ark-ui/react/factory";
import {
  type TableVariantProps,
  table,
} from "@import-map-package/styled-system/recipes";
import type { HTMLStyledProps } from "@import-map-package/styled-system/types";
import { createStyleContext } from "../utils/create-style-context";

const { withProvider, withContext } = createStyleContext(table);

export interface RootProps
  extends Assign<HTMLStyledProps<"table">, PolymorphicProps>,
    TableVariantProps {}
export const Root = withProvider<HTMLTableElement, RootProps>(
  ark.table,
  "root",
);

export const Head = withContext<
  HTMLTableSectionElement,
  Assign<HTMLStyledProps<"thead">, PolymorphicProps>
>(ark.thead, "head");

export const Body = withContext<
  HTMLTableSectionElement,
  Assign<HTMLStyledProps<"tbody">, PolymorphicProps>
>(ark.tbody, "body");

export const Foot = withContext<
  HTMLTableSectionElement,
  Assign<HTMLStyledProps<"tfoot">, PolymorphicProps>
>(ark.tfoot, "foot");

export const Row = withContext<
  HTMLTableRowElement,
  Assign<HTMLStyledProps<"tr">, PolymorphicProps>
>(ark.tr, "row");

export const Header = withContext<
  HTMLTableCellElement,
  Assign<HTMLStyledProps<"th">, PolymorphicProps>
>(ark.th, "header");

export const Cell = withContext<
  HTMLTableCellElement,
  Assign<HTMLStyledProps<"td">, PolymorphicProps>
>(ark.td, "cell");

export const Caption = withContext<
  HTMLTableCaptionElement,
  Assign<HTMLStyledProps<"caption">, PolymorphicProps>
>(ark.caption, "caption");

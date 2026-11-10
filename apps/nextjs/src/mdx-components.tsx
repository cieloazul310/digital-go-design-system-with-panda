import type { MDXComponents } from "mdx/types";
import { isValidElement, type ComponentProps } from "react";
import { css } from "styled-system/css";
import { List, OrderedList, UnorderedList } from "@/components/ui/list";
import { Divider } from "@/components/ui/divider";
import { Table } from "@/components/ui/table";
import {
  Paragraph,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Pre,
  Code,
} from "@/components/article";
import { shortcodes } from "@/components/shortcodes";
import { Link } from "@/components/link";
import { DemoViewer } from "@/components/demo-viewer";

type MarkdownOrderedListProps = ComponentProps<typeof OrderedList> & {
  start?: number;
};

type MarkdownListItemProps = ComponentProps<typeof List> & {
  value?: number;
};

function MarkdownOrderedList({
  children,
  start = 1,
  ...props
}: MarkdownOrderedListProps) {
  const items = Array.isArray(children) ? children : [children];
  const numberedChildren = items.map((child, index) => {
    if (!isValidElement<MarkdownListItemProps>(child)) {
      return child;
    }

    const { children: itemChildren, value, ...itemProps } = child.props;
    const number = value ?? start + index;
    const ListItem = child.type;

    return (
      <ListItem key={child.key ?? `ordered-list-item-${number}`} {...itemProps}>
        <span>{number}.</span>
        {itemChildren}
      </ListItem>
    );
  });

  return <OrderedList {...props}>{numberedChildren}</OrderedList>;
}

export function useMDXComponents(
  components: MDXComponents = {},
): MDXComponents {
  return {
    p: Paragraph,
    a: Link,
    h2: Heading2,
    h3: Heading3,
    h4: Heading4,
    h5: Heading5,
    ol: MarkdownOrderedList,
    ul: UnorderedList,
    li: List,
    hr: Divider,
    table: (props) => (
      <div className={css({ overflowX: "auto" })}>
        <Table.Root striped {...props} />
      </div>
    ),
    thead: (props) => <Table.Head {...props} />,
    tbody: (props) => <Table.Body {...props} />,
    tr: (props) => <Table.Row {...props} />,
    th: (props) => <Table.Header {...props} />,
    td: (props) => <Table.Cell {...props} />,
    pre: Pre,
    code: Code,
    DemoViewer,
    ...shortcodes,
    ...components,
  };
}

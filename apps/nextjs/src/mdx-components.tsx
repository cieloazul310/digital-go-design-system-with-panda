import type { MDXComponents } from "mdx/types";
import { OrderedList } from "@cieloazul310/digital-go-pandacss/ordered-list";
import { UnorderedList } from "@cieloazul310/digital-go-pandacss/unordered-list";
import { List } from "@cieloazul310/digital-go-pandacss/list";
import { Divider } from "@cieloazul310/digital-go-pandacss/divider";
import * as Table from "@cieloazul310/digital-go-pandacss/table";
import { Paragraph, Heading2, Heading3 } from "@/components/article";
import { Link } from "@/components/link";

export function useMDXComponents(
  components: MDXComponents = {},
): MDXComponents {
  return {
    p: Paragraph,
    a: Link,
    h2: Heading2,
    h3: Heading3,
    ol: OrderedList,
    ul: UnorderedList,
    li: List,
    hr: Divider,
    table: (props: Table.RootProps) => <Table.Root striped {...props} />,
    thead: (props) => <Table.Head {...props} />,
    tbody: (props) => <Table.Body {...props} />,
    tr: (props) => <Table.Row {...props} />,
    th: (props) => <Table.Header {...props} />,
    td: (props) => <Table.Cell {...props} />,
    ...components,
  };
}

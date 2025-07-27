import type { MDXComponents } from "mdx/types";
import { OrderedList } from "@/components/ui/ordered-list";
import { UnorderedList } from "@/components/ui/unordered-list";
import { List } from "@/components/ui/list";
import { Divider } from "@/components/ui/divider";
import * as Table from "@/components/ui/table";
import { css } from "styled-system/css";
import {
  Paragraph,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Pre,
  Code,
} from "@/components/article";
import { Link } from "@/components/link";
import { DemoViewer } from "@/components/demo-viewer";

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
    ol: OrderedList,
    ul: UnorderedList,
    li: List,
    hr: Divider,
    table: (props: Table.RootProps) => (
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
    ...components,
  };
}

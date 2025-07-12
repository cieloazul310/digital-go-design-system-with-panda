import type { MDXComponents } from "mdx/types";
import { OrderedList } from "@cieloazul310/digital-go-pandacss/ordered-list";
import { UnorderedList } from "@cieloazul310/digital-go-pandacss/unordered-list";
import { List } from "@cieloazul310/digital-go-pandacss/list";
import { Divider } from "@cieloazul310/digital-go-pandacss/divider";
import { Paragraph } from "@/components/article";
import { Link } from "@/components/link";

export function useMDXComponents(
  components: MDXComponents = {},
): MDXComponents {
  return {
    p: Paragraph,
    a: Link,
    ol: OrderedList,
    ul: UnorderedList,
    li: List,
    hr: Divider,
    ...components,
  };
}

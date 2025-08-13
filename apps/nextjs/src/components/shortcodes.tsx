import type { PropsWithChildren } from "react";
import { styled } from "styled-system/jsx";
import type {
  ComponentProps,
  JsxHTMLProps,
  JsxStyleProps,
} from "styled-system/types";
import { Disclosure } from "@/components/ui/disclosure";

export const LeadingText = (
  props: JsxHTMLProps<ComponentProps<"p">, JsxStyleProps>,
) => (
  <styled.p
    textStyle={{ base: "std-18N-160", md: "std-20N-150" }}
    my={4}
    mb={{ md: 6 }}
    {...props}
  />
);

export const Details = ({
  children,
  summary,
}: PropsWithChildren<{ summary: string }>) => (
  <Disclosure.Root asChild>
    <details>
      <Disclosure.Summary asChild>
        <summary>
          <Disclosure.Indicator />
          {summary}
        </summary>
      </Disclosure.Summary>
      {children}
    </details>
  </Disclosure.Root>
);

export const shortcodes = {
  LeadingText,
  Details,
};

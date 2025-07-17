import { styled } from "@cieloazul310/styled-system/jsx";
import type {
  ComponentProps,
  JsxHTMLProps,
  JsxStyleProps,
} from "@cieloazul310/styled-system/types";

export const Paragraph = (
  props: JsxHTMLProps<ComponentProps<"p">, JsxStyleProps>,
) => <styled.p my={4} mb={{ md: 6 }} {...props} />;

/**
 * text-std-24B-150 md:text-std-32B-150 mt-10 mb-6 md:mt-16
 */
export const Heading2 = (
  props: JsxHTMLProps<ComponentProps<"h2">, JsxStyleProps>,
) => (
  <styled.h2
    textStyle={{ base: "std-24B-150", md: "std-32B-150" }}
    mt={{ base: 10, md: 16 }}
    mb={6}
    {...props}
  />
);

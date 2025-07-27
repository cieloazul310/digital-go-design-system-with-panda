import * as Disclosure from "@/components/ui/disclosure";
import { css } from "styled-system/css";
import { styled } from "styled-system/jsx";
import type {
  ComponentProps,
  JsxHTMLProps,
  JsxStyleProps,
} from "styled-system/types";

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

/**
 *
 * text-std-22B-150 md:text-std-24B-150 mt-8 mb-4 md:mt-12 md:mb-6
 */
export const Heading3 = (
  props: JsxHTMLProps<ComponentProps<"h3">, JsxStyleProps>,
) => (
  <styled.h3
    textStyle={{ base: "std-22B-150", md: "std-24B-150" }}
    mt={{ base: 8, md: 12 }}
    mb={{ base: 4, md: 6 }}
    {...props}
  />
);

/**
 * text-std-18B-160 md:text-std-20B-150 mb-4 mt-6 md:mt-10
 */
export const Heading4 = (
  props: JsxHTMLProps<ComponentProps<"h4">, JsxStyleProps>,
) => (
  <styled.h4
    textStyle={{ base: "std-18B-160", md: "std-20B-150" }}
    mt={{ base: 6, md: 10 }}
    mb={4}
    {...props}
  />
);

/**
 *
 * text-std-18B-160 mt-4
 */
export const Heading5 = (
  props: JsxHTMLProps<ComponentProps<"h5">, JsxStyleProps>,
) => <styled.h5 textStyle="std-18B-160" mt={4} {...props} />;

export const Details = ({ children, ...props }: Disclosure.RootProps) => (
  <Disclosure.Root asChild {...props}>
    <details>{children}</details>
  </Disclosure.Root>
);

export const Summary = ({ children, ...props }: Disclosure.SummaryProps) => (
  <Disclosure.Summary asChild {...props}>
    <summary>
      <Disclosure.Icon />
      {children}
    </summary>
  </Disclosure.Summary>
);

export const Pre = (
  props: JsxHTMLProps<ComponentProps<"pre">, JsxStyleProps>,
) => {
  return (
    <styled.pre
      bg="solid-gray.100"
      textStyle="mono-16N-150"
      rounded={8}
      overflowX="auto"
      p={8}
      {...props}
    />
  );
};

export const Code = (
  props: JsxHTMLProps<ComponentProps<"code">, JsxStyleProps>,
) => (
  <styled.code
    className={css({
      ":not(pre) > &": {
        color: "keyColor.1200",
        bg: "keyColor.50",
        px: 1,
        rounded: 2,
      },
    })}
    {...props}
  />
);

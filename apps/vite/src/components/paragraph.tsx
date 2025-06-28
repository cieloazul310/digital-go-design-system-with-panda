import { styled } from "@import-map-package/styled-system/jsx";
import type { ComponentProps } from "@import-map-package/styled-system/types";

export const Paragraph = (props: ComponentProps<"p">) => (
  <styled.p my={4} mb={{ md: 6 }} {...props} />
);

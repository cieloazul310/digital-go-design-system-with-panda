import { ark } from "@ark-ui/react/factory";
import { styled } from "@cieloazul310/styled-system/jsx";
import {
  input,
  type InputVariantProps,
} from "@cieloazul310/styled-system/recipes";

export type InputProps = InputVariantProps;

export const Input = styled(ark.input, input);

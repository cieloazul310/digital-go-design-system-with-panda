import { ark } from "@ark-ui/react/factory";
import { styled } from "@digital-go-pandacss/styled-system/jsx";
import {
  input,
  type InputVariantProps,
} from "@digital-go-pandacss/styled-system/recipes";

export type InputProps = InputVariantProps;

export const Input = styled(ark.input, input);

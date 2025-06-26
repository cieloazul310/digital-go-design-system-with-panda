import { ark } from "@ark-ui/react/factory";
import { styled } from "@import-map-package/styled-system/jsx";
import {
  input,
  type InputVariantProps,
} from "@import-map-package/styled-system/recipes";

export type InputProps = InputVariantProps;

export const Input = styled(ark.input, input);

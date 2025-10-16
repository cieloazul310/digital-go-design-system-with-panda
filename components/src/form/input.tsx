import { ark } from "@ark-ui/react/factory";
import { styled } from "styled-system/jsx";
import { input, type InputVariantProps } from "styled-system/recipes";

export type InputProps = InputVariantProps;

export const Input = styled(ark.input, input);

/**
 * source:
 * https://github.com/digital-go-jp/design-system-example-components-react/blob/main/src/components/DateInput/DateInput.tsx
 */

"use client";
import { DateInput } from "@ark-ui/react/date-input";
import { dateInput } from "styled-system/recipes";
import type { ComponentProps } from "styled-system/types";
import { createStyleContext } from "styled-system/jsx";

const { withProvider, withContext } = createStyleContext(dateInput);

export type RootProviderProps = ComponentProps<typeof RootProvider>;
export const RootProvider = withProvider(DateInput.RootProvider, "root");

export type RootProps = ComponentProps<typeof Root>;
export const Root = withProvider(DateInput.Root, "root", {
  defaultProps: {
    locale: "ja-JP",
  },
});

export const Label = withContext(DateInput.Label, "label");
export const Control = withContext(DateInput.Control, "control");
export const SegmentGroup = withContext(DateInput.SegmentGroup, "segmentGroup");
export const Segment = withContext(DateInput.Segment, "segment");
export const HiddenInput = withContext(DateInput.HiddenInput, "hiddenInput");

export {
  DateInputContext as Context,
  DateInputSegmentContext as SegmentContext,
} from "@ark-ui/react/date-input";

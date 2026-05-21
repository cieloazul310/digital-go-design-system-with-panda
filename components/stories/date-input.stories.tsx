import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { DateInput } from "../src/date-input";

const meta = {
  title: "Components/日付入力",
  component: DateInput.Root,
  tags: ["autodocs"],
} satisfies Meta<typeof DateInput.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    children: (
      <>
        <DateInput.Label>日付</DateInput.Label>
        <DateInput.Control>
          <DateInput.SegmentGroup>
            <DateInput.SegmentContext>
              {(segment) => <DateInput.Segment segment={segment} />}
            </DateInput.SegmentContext>
          </DateInput.SegmentGroup>
          <DateInput.HiddenInput />
        </DateInput.Control>
      </>
    ),
  },
};

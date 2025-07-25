import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import * as RadioGroup from "../src/radio";
import { Legend } from "../src/form/legend";
import { RequirementBadge } from "../src/form/requirement-badge";
import { SupportText } from "../src/form/support-text";

const meta = {
  title: "Components/ラジオボタン",
  component: RadioGroup.Root,
  tags: ["autodocs"],
  argTypes: {
    size: {
      type: "string",
      description: "チェックボックスのサイズを以下から選択します。",
      control: { type: "radio" },
      options: ["sm", "md", "lg"],
      table: {
        defaultValue: { summary: "sm" },
        type: { summary: "'sm' | 'md' | 'lg'" },
      },
    },
    orientation: {
      type: "string",
      control: { type: "radio" },
      options: ["vertical", "horizontal"],
      table: {
        defaultValue: { summary: "vertical" },
        type: { summary: "'vertical' | 'horizontal'" },
      },
    },
    disabled: {
      description:
        "無効化する必要がある場合は `disabled` 属性ではなく `aria-disabled` 属性を使用します。",
      control: { type: "boolean" },
      table: {
        defaultValue: { summary: "false" },
        type: { summary: "boolean" },
      },
    },
  },
} satisfies Meta<typeof RadioGroup.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    size: "sm",
    disabled: false,
    orientation: "vertical",
  },
  render: ({ ...props }) => (
    <fieldset>
      <Legend>
        ラベル<RequirementBadge>※必須</RequirementBadge>
      </Legend>
      <SupportText mt="2" id="stacked-support-text">
        サポートテキスト
      </SupportText>
      <RadioGroup.Root mt="1" defaultValue="hoge" {...props}>
        <RadioGroup.Item aria-describedby="stacked-support-text" value="hoge">
          <RadioGroup.ItemControl />
          <RadioGroup.ItemText>選択肢1</RadioGroup.ItemText>
          <RadioGroup.ItemHiddenInput />
        </RadioGroup.Item>
        <RadioGroup.Item aria-describedby="stacked-support-text" value="hige">
          <RadioGroup.ItemControl />
          <RadioGroup.ItemText>選択肢2</RadioGroup.ItemText>
          <RadioGroup.ItemHiddenInput />
        </RadioGroup.Item>
        <RadioGroup.Item aria-describedby="stacked-support-text" value="huge">
          <RadioGroup.ItemControl />
          <RadioGroup.ItemText>選択肢3</RadioGroup.ItemText>
          <RadioGroup.ItemHiddenInput />
        </RadioGroup.Item>
      </RadioGroup.Root>
    </fieldset>
  ),
};

export const Inline: Story = {
  args: {
    size: "sm",
    "aria-disabled": false,
    orientation: "horizontal",
  },
  render: ({ ...props }) => (
    <fieldset>
      <Legend>
        ラベル<RequirementBadge>※必須</RequirementBadge>
      </Legend>
      <SupportText mt="2" id="inline-support-text">
        サポートテキスト
      </SupportText>
      <RadioGroup.Root mt="1" flexWrap="wrap" defaultValue="hoge" {...props}>
        <RadioGroup.Item aria-describedby="inline-support-text" value="hoge">
          <RadioGroup.ItemControl />
          <RadioGroup.ItemText>選択肢1</RadioGroup.ItemText>
          <RadioGroup.ItemHiddenInput />
        </RadioGroup.Item>
        <RadioGroup.Item aria-describedby="inline-support-text" value="hige">
          <RadioGroup.ItemControl />
          <RadioGroup.ItemText>選択肢2</RadioGroup.ItemText>
          <RadioGroup.ItemHiddenInput />
        </RadioGroup.Item>
        <RadioGroup.Item aria-describedby="inline-support-text" value="huge">
          <RadioGroup.ItemControl />
          <RadioGroup.ItemText>選択肢3</RadioGroup.ItemText>
          <RadioGroup.ItemHiddenInput />
        </RadioGroup.Item>
      </RadioGroup.Root>
    </fieldset>
  ),
};

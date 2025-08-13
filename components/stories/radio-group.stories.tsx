import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { css } from "styled-system/css";
import { radioGroup } from "styled-system/recipes";
import { RadioGroup } from "../src/radio-group";
import { Fieldset } from "../src/fieldset";
import { Legend } from "../src/form/legend";
import { RequirementBadge } from "../src/form/requirement-badge";
import { SupportText } from "../src/form/support-text";
import { colorPalette } from "./utils/color-palette";
import { disabled, ariaDisabled, readOnly } from "./utils/arg-types";

const meta = {
  title: "Components/ラジオボタン",
  component: RadioGroup.Root,
  tags: ["autodocs"],
  argTypes: {
    size: {
      type: "string",
      description: "チェックボックスのサイズを以下から選択します。",
      control: { type: "radio" },
      options: radioGroup.variantMap.size,
      table: {
        defaultValue: { summary: "sm" },
        type: { summary: `${radioGroup.variantMap.size.join(" | ")}` },
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
    disabled,
    "aria-disabled": ariaDisabled,
    readOnly,
    colorPalette,
  },
  args: {
    size: "sm",
    disabled: false,
    "aria-disabled": false,
    readOnly: false,
    orientation: "vertical",
    colorPalette: "keyColor",
  },
} satisfies Meta<typeof RadioGroup.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    children: (
      <RadioGroup.Item aria-describedby="stacked-support-text" value="hoge">
        <RadioGroup.ItemControl />
        <RadioGroup.ItemText>選択肢</RadioGroup.ItemText>
        <RadioGroup.ItemHiddenInput />
      </RadioGroup.Item>
    ),
  },
};

export const Standalone: Story = {
  args: {
    children: (
      <RadioGroup.Item aria-describedby="stacked-support-text" value="hoge">
        <RadioGroup.ItemControl />
        <RadioGroup.ItemHiddenInput />
      </RadioGroup.Item>
    ),
  },
};

export const Stacked: Story = {
  render: ({ ...args }) => (
    <>
      <Legend>
        ラベル<RequirementBadge>※必須</RequirementBadge>
      </Legend>
      <SupportText mt="2" id="stacked-support-text">
        サポートテキスト
      </SupportText>
      <RadioGroup.Root {...args}>
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
    </>
  ),
};

export const Inline: Story = {
  args: {
    orientation: "horizontal",
  },
  render: ({ ...args }) => (
    <>
      <Legend>
        ラベル<RequirementBadge>※必須</RequirementBadge>
      </Legend>
      <SupportText mt="2" id="stacked-support-text">
        サポートテキスト
      </SupportText>
      <RadioGroup.Root mt="1" flexWrap="wrap" defaultValue="hoge" {...args}>
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
    </>
  ),
};

export const Errored: Story = {
  render: ({ ...args }) => (
    <div className={css({ display: "flex", flexDirection: "column", gap: 16 })}>
      <Fieldset.Root invalid>
        <Fieldset.Legend>
          ラベル<RequirementBadge>※必須</RequirementBadge>
        </Fieldset.Legend>
        <Fieldset.SupportText id="stacked-support-text">
          サポートテキスト
        </Fieldset.SupportText>
        <RadioGroup.Root
          mt={2}
          defaultValue="選択肢2"
          {...args}
          orientation="vertical"
        >
          {["選択肢1", "選択肢2", "選択肢3"].map((value) => (
            <RadioGroup.Item invalid key={value} value={value}>
              <RadioGroup.ItemControl />
              <RadioGroup.ItemHiddenInput />
              <RadioGroup.ItemText>{value}</RadioGroup.ItemText>
            </RadioGroup.Item>
          ))}
        </RadioGroup.Root>
        <Fieldset.ErrorText>＊エラーテキストが入ります</Fieldset.ErrorText>
      </Fieldset.Root>
      <Fieldset.Root invalid>
        <Fieldset.Legend>
          ラベル<RequirementBadge>※必須</RequirementBadge>
        </Fieldset.Legend>
        <Fieldset.SupportText id="stacked-support-text">
          サポートテキスト
        </Fieldset.SupportText>
        <RadioGroup.Root
          mt={2}
          defaultValue="選択肢2"
          {...args}
          orientation="horizontal"
        >
          {["選択肢1", "選択肢2", "選択肢3"].map((value) => (
            <RadioGroup.Item invalid key={value} value={value}>
              <RadioGroup.ItemControl />
              <RadioGroup.ItemHiddenInput />
              <RadioGroup.ItemText>{value}</RadioGroup.ItemText>
            </RadioGroup.Item>
          ))}
        </RadioGroup.Root>
        <Fieldset.ErrorText>＊エラーテキストが入ります</Fieldset.ErrorText>
      </Fieldset.Root>
    </div>
  ),
};

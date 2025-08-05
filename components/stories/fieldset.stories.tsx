import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { fn } from "storybook/test";
import { css } from "styled-system/css";
import { fieldset } from "styled-system/recipes";
import * as Fieldset from "../src/fieldset";
import * as Field from "../src/field";
import * as Checkbox from "../src/checkbox";
import * as RadioGroup from "../src/radio-group";

const meta = {
  title: "Components/フィールドセット",
  component: Fieldset.Root,
  argTypes: {
    size: {
      options: fieldset.variantMap.size,
      control: "inline-radio",
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
    invalid: { control: "boolean" },
  },
  args: {
    size: "lg",
    disabled: false,
    invalid: false,
    onChange: fn(),
  },
} satisfies Meta<typeof Fieldset.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    children: (
      <>
        <Fieldset.Legend>凡例</Fieldset.Legend>
        <Fieldset.SupportText>サポートテキスト</Fieldset.SupportText>
        <Fieldset.ErrorText>エラーテキスト</Fieldset.ErrorText>
        <div
          className={css({
            mt: 8,
            display: "flex",
            flexDirection: "column",
            gap: 8,
          })}
        >
          <Field.Root>
            <Field.Label>
              市区町村<Field.RequirementBadge>※必須</Field.RequirementBadge>
            </Field.Label>
            <Field.Input width="300px" />
          </Field.Root>
          <Field.Root>
            <Field.Label>
              電話番号<Field.RequirementBadge>※必須</Field.RequirementBadge>
            </Field.Label>
            <Field.SupportText>ハイフンなし</Field.SupportText>
            <Field.Input width="200px" />
            <Field.ErrorText>Field Error Text</Field.ErrorText>
          </Field.Root>
          <Fieldset.Root>
            <Fieldset.Legend>好きな食べ物</Fieldset.Legend>
            <Fieldset.SupportText>複数回答可</Fieldset.SupportText>
            <Checkbox.Group>
              {["カレー", "ラーメン", "パスタ"].map((value) => (
                <Checkbox.Root key={value} value={value}>
                  <Checkbox.Control>
                    <Checkbox.Indicator />
                  </Checkbox.Control>
                  <Checkbox.HiddenInput />
                  <Checkbox.Label>{value}</Checkbox.Label>
                </Checkbox.Root>
              ))}
            </Checkbox.Group>
          </Fieldset.Root>
          <Field.Root>
            <Field.Label>
              あなたは上記の条件に当てはまりますか？
              <Field.RequirementBadge>※必須</Field.RequirementBadge>
            </Field.Label>
            <RadioGroup.Root>
              <RadioGroup.Item value="yes">
                <RadioGroup.ItemControl />
                <RadioGroup.ItemHiddenInput />
                <RadioGroup.ItemText>はい</RadioGroup.ItemText>
              </RadioGroup.Item>
              <RadioGroup.Item value="no">
                <RadioGroup.ItemControl />
                <RadioGroup.ItemHiddenInput />
                <RadioGroup.ItemText>いいえ</RadioGroup.ItemText>
              </RadioGroup.Item>
              <RadioGroup.Item value="not">
                <RadioGroup.ItemControl />
                <RadioGroup.ItemHiddenInput />
                <RadioGroup.ItemText>どちらとも言えない</RadioGroup.ItemText>
              </RadioGroup.Item>
            </RadioGroup.Root>
          </Field.Root>
        </div>
      </>
    ),
  },
};

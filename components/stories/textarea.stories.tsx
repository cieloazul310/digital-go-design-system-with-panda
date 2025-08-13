import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { useState } from "react";
import { css } from "styled-system/css";
import { Container } from "styled-system/jsx";
import { Field } from "../src/field";
import { Fieldset } from "../src/fieldset";
import { Textarea } from "../src/textarea";
import { RadioGroup } from "../src/radio-group";
import { Button } from "../src/button";
import { disabled, ariaDisabled, readOnly, required } from "./utils/arg-types";

const meta = {
  title: "Components/テキストエリア",
  tags: ["autodocs"],
  component: Textarea,
  argTypes: {
    disabled,
    "aria-disabled": ariaDisabled,
    readOnly,
    required,
  },
  args: {
    disabled: false,
    "aria-disabled": false,
    readOnly: false,
    required: false,
  },
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Plain: Story = {
  args: {
    name: "plain-textarea",
    disabled: false,
    placeholder: "",
    rows: 6,
    ...css.raw({
      width: "320px",
    }),
  },
};

export const WithField: Story = {
  args: {
    placeholder:
      "Ark UIのFieldコンポーネントを使用するとラベルやサポートテキストとテキストエリアがidによって自動的に関連付けられる",
  },
  render: ({ ...args }) => (
    <Field.Root>
      <Field.Label>ラベル</Field.Label>
      <Field.SupportText>サポートテキスト</Field.SupportText>
      <Field.Textarea {...args} />
      <Field.ErrorText>エラーテキスト</Field.ErrorText>
    </Field.Root>
  ),
};

export const CountExample: Story = {
  render: () => {
    const [text, setText] = useState("");
    const maxLength = 100;

    return (
      <Container maxWidth="xl">
        <form>
          <Fieldset.Root
            className={css({
              display: "flex",
              flexDirection: "column",
              gap: 4,
            })}
          >
            <Field.Root required>
              <Field.Label>
                どこに問題がありましたか
                <Field.RequirementBadge>※必須</Field.RequirementBadge>
              </Field.Label>
              <Field.SupportText>
                当てはまるものがない場合はその他を選択してください
              </Field.SupportText>
              <RadioGroup.Root>
                <RadioGroup.Item value="search">
                  <RadioGroup.ItemControl />
                  <RadioGroup.ItemHiddenInput />
                  <RadioGroup.ItemText>検索機能</RadioGroup.ItemText>
                </RadioGroup.Item>
                <RadioGroup.Item value="survey">
                  <RadioGroup.ItemControl />
                  <RadioGroup.ItemHiddenInput />
                  <RadioGroup.ItemText>アンケート機能</RadioGroup.ItemText>
                </RadioGroup.Item>
                <RadioGroup.Item value="others">
                  <RadioGroup.ItemControl />
                  <RadioGroup.ItemHiddenInput />
                  <RadioGroup.ItemText>その他</RadioGroup.ItemText>
                </RadioGroup.Item>
              </RadioGroup.Root>
            </Field.Root>
            <Field.Root invalid={text.length > maxLength}>
              <Field.Label>
                詳しい状況を教えてください
                <Field.RequirementBadge>※必須</Field.RequirementBadge>
              </Field.Label>
              <Field.SupportText>{maxLength}字以内</Field.SupportText>
              <Field.Textarea
                rows={4}
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
              <div className={css({ display: "flex", justifyContent: "end" })}>
                <Field.ErrorText flexGrow={1}>
                  入力できる文字数を超えています。
                </Field.ErrorText>
                <Field.SupportText
                  className={
                    text.length > maxLength
                      ? css({ color: "error.1" })
                      : undefined
                  }
                  flexShrink={0}
                >
                  {text.length} / {maxLength}
                </Field.SupportText>
              </div>
            </Field.Root>
            <Button>送信</Button>
          </Fieldset.Root>
        </form>
      </Container>
    );
  },
};

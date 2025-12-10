import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { css } from "styled-system/css";
import { container } from "styled-system/patterns";
import { stepNavigation } from "styled-system/recipes";
import { StepNavigation } from "../src/step-navigation";
import { Fieldset } from "../src/fieldset";
import { Field } from "../src/field";
import { colorPalette } from "./utils/color-palette";
import { Button } from "../src/button";

const meta = {
  title: "Components/ステップナビゲーション",
  tags: ["autodocs"],
  component: StepNavigation.Root,
  argTypes: {
    size: {
      type: "string",
      control: { type: "radio" },
      options: stepNavigation.variantMap.size,
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
    colorPalette,
  },
  args: {
    size: "md",
    orientation: "horizontal",
    colorPalette: "keyColor",
  },
} satisfies Meta<typeof StepNavigation.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

const items = [
  {
    value: "first",
    title: "ステップのタイトル",
    description: "ステップの説明が入ります。",
  },
  {
    value: "second",
    title: "ステップのタイトル",
    description: "ステップの説明が入ります。",
  },
  {
    value: "third",
    title: "ステップのタイトル",
    description: "ステップの説明が入ります。",
  },
];

export const Basic: Story = {
  args: {
    count: items.length,
    children: (
      <>
        <StepNavigation.List>
          {items.map((item, index) => (
            <StepNavigation.Item key={index} index={index}>
              <StepNavigation.Trigger>
                <StepNavigation.Indicator>{index + 1}</StepNavigation.Indicator>
                <StepNavigation.Title>{item.title}</StepNavigation.Title>
              </StepNavigation.Trigger>
              <StepNavigation.Description>
                {item.description}
              </StepNavigation.Description>
              <StepNavigation.Separator />
            </StepNavigation.Item>
          ))}
        </StepNavigation.List>
      </>
    ),
  },
};

export const Vertical: Story = {
  args: {
    count: items.length,
    orientation: "vertical",
    children: (
      <>
        <StepNavigation.List>
          {items.map((item, index) => (
            <StepNavigation.Item key={index} index={index}>
              <StepNavigation.Trigger>
                <StepNavigation.Indicator>{index + 1}</StepNavigation.Indicator>
                <StepNavigation.Title>{item.title}</StepNavigation.Title>
              </StepNavigation.Trigger>
              <StepNavigation.Description>
                {item.description}
              </StepNavigation.Description>
              <StepNavigation.Separator />
            </StepNavigation.Item>
          ))}
        </StepNavigation.List>
      </>
    ),
  },
};

const cardExample = [
  {
    value: "first",
    title: "基本情報入力",
    description: "氏名・生年月日・住所など、申請に必要な基本情報を入力します。",
  },
  {
    value: "second",
    title: "利用規約の確認",
    description: "本サービスの利用規約を確認し、同意します。",
  },
  {
    value: "third",
    title: "本人確認",
    description: "身分証明書などを用いて本人確認を行います。",
  },
  {
    value: "fourth",
    title: "顔写真の登録",
    description: "カードに印字される顔写真を撮影またはアップロードします。",
  },
  {
    value: "fifth",
    title: "申請情報の入力",
    description: "受取方法や交付場所など、申請に関する詳細情報を入力します。",
  },
  {
    value: "sixth",
    title: "申請情報の確認",
    description: "入力内容を確認し、間違いがなければ申請を完了します。",
  },
];

export const WithoutLink: Story = {
  args: {
    count: cardExample.length,
    orientation: "vertical",
    colorPalette: "solid-gray",
    step: -1,
  },
  render: ({ ...args }) => (
    <>
      <header
        className={css({
          width: "full",
          px: 20,
          py: 4,
          display: "flex",
          alignItems: "center",
          borderColor: "solid-gray.420",
          borderBottomWidth: "1px",
        })}
      >
        <h1 className={css({ textStyle: "std-28B-150" })}>カード交付申請</h1>
      </header>
      <article className={container({ maxWidth: "2xl" })}>
        <hgroup
          className={css({
            display: "flex",
            flexDirection: "column",
            gap: 4,
            mt: 12,
            mb: 8,
          })}
        >
          <h2 className={css({ textStyle: "std-32N-150" })}>カード交付申請</h2>
          <p>申請は以下の6つの手順で行います。</p>
        </hgroup>
        <StepNavigation.Root {...args} mb={4}>
          <StepNavigation.List>
            {cardExample.map(({ value, title, description }, index) => (
              <StepNavigation.Item key={value} index={index}>
                <StepNavigation.Trigger>
                  <StepNavigation.Indicator>
                    {index + 1}
                  </StepNavigation.Indicator>
                  <StepNavigation.Title>{title}</StepNavigation.Title>
                </StepNavigation.Trigger>
                <StepNavigation.Description>
                  {description}
                </StepNavigation.Description>
                <StepNavigation.Separator />
              </StepNavigation.Item>
            ))}
          </StepNavigation.List>
        </StepNavigation.Root>
        <Button>申請をはじめる</Button>
      </article>
    </>
  ),
};

export const WithoutDescription: Story = {
  args: {
    count: cardExample.length,
    orientation: "horizontal",
    colorPalette: "solid-gray",
    size: "sm",
    step: 0,
    className: css({
      "--_step-width": { base: 60, sm: 240, md: 320 },
      "--_step-min-width": { base: 60, sm: 160 },
    }),
  },
  render: ({ ...args }) => (
    <>
      <header
        className={css({
          width: "full",
          px: 6,
          py: 4,
          display: "flex",
          alignItems: "center",
          borderColor: "solid-gray.420",
          borderBottomWidth: "1px",
        })}
      >
        <h1 className={css({ textStyle: "std-28B-150" })}>カード交付申請</h1>
      </header>
      <StepNavigation.Root {...args} my={8}>
        <StepNavigation.List>
          {cardExample.map(({ value, title }, index) => (
            <StepNavigation.Item key={value} index={index}>
              <StepNavigation.Trigger>
                <StepNavigation.Indicator>{index + 1}</StepNavigation.Indicator>
                <StepNavigation.Title srOnly={{ base: true, sm: false }}>
                  {title}
                </StepNavigation.Title>
              </StepNavigation.Trigger>
              <StepNavigation.Separator />
            </StepNavigation.Item>
          ))}
        </StepNavigation.List>
      </StepNavigation.Root>
      <article className={container({ maxWidth: "2xl" })}>
        <hgroup
          className={css({
            display: "flex",
            flexDirection: "column",
            gap: 4,
            mt: 12,
            mb: 8,
          })}
        >
          <h2 className={css({ textStyle: "std-32N-150" })}>
            <span className={css({ mr: 2 })}>
              1<small className={css({ textStyle: "std-22N-150" })}>/6</small>
            </span>
            基本情報入力
          </h2>
          <p>
            申請に必要な基本情報を入力します。氏名や住所などの内容は、本人確認やカード送付に使用されます。正確な情報を入力し、誤りがないようご確認ください。
          </p>
        </hgroup>
        <Fieldset.Root>
          <div
            className={css({
              mt: 8,
              display: "flex",
              flexDirection: "column",
              gap: 8,
            })}
          >
            <Field.Root required>
              <Field.Label>
                氏名<Field.RequirementBadge>※必須</Field.RequirementBadge>
              </Field.Label>
              <Field.Input maxWidth="420px" />
            </Field.Root>
            <Field.Root required>
              <Field.Label>
                生年月日<Field.RequirementBadge>※必須</Field.RequirementBadge>
              </Field.Label>
              <Field.SupportText>例：2025年01月20日</Field.SupportText>
              <Field.Input maxWidth="224px" />
              <Field.ErrorText>Field Error Text</Field.ErrorText>
            </Field.Root>
            <Field.Root required>
              <Field.Label>
                メールアドレス
                <Field.RequirementBadge>※必須</Field.RequirementBadge>
              </Field.Label>
              <Field.Input maxWidth="420px" placeholder="email@example.com" />
              <Field.ErrorText>Field Error Text</Field.ErrorText>
            </Field.Root>
            <Field.Root required>
              <Field.Label>
                住所
                <Field.RequirementBadge>※必須</Field.RequirementBadge>
              </Field.Label>
              <Field.Input
                maxWidth="full"
                placeholder="東京都新宿区新宿字恐山"
              />
              <Field.ErrorText>Field Error Text</Field.ErrorText>
            </Field.Root>
            <Field.Root required>
              <Field.Label>
                職業
                <Field.RequirementBadge>※必須</Field.RequirementBadge>
              </Field.Label>
              <Field.Input maxWidth="420px" placeholder="賢者" />
              <Field.ErrorText>Field Error Text</Field.ErrorText>
            </Field.Root>
          </div>
        </Fieldset.Root>
        <div
          className={css({
            mt: 8,
            width: "full",
            display: "flex",
            flexDirection: { base: "column-reverse", sm: "row" },
            gap: 4,
          })}
        >
          <Button
            variant="outline"
            flexGrow={1}
            maxWidth={{ base: "full", sm: "50%" }}
          >
            戻る
          </Button>
          <Button flexGrow={1} maxWidth={{ base: "full", sm: "50%" }}>
            次のステップへ
          </Button>
        </div>
      </article>
    </>
  ),
};

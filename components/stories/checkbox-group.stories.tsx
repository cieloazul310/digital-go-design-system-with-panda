import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { useState } from "react";
import { css } from "styled-system/css";
import * as Fieldset from "../src/fieldset";
import { RequirementBadge } from "../src/form";
import * as Checkbox from "../src/checkbox";
import { colorPalette } from "./utils/color-palette";

const meta = {
  title: "Components/チェックボックス/グループ",
  tags: ["autodocs"],
  component: Checkbox.Group,
  argTypes: {
    invalid: {
      description: "エラー状態であるかどうかを指定します。",
      control: { type: "boolean" },
      table: {
        defaultValue: { summary: "false" },
        type: { summary: "boolean" },
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
    "aria-disabled": {
      description:
        "無効化する必要がある場合は `disabled` 属性ではなく `aria-disabled` 属性を使用します。",
      control: { type: "boolean" },
      table: {
        defaultValue: { summary: "false" },
        type: { summary: "boolean" },
      },
    },
    colorPalette,
  },
  args: {
    invalid: false,
    disabled: false,
    "aria-disabled": false,
    colorPalette: "keyColor",
  },
} satisfies Meta<typeof Checkbox.Group>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Stacked: Story = {
  render: ({ ...args }) => (
    <Fieldset.Root invalid={args.invalid} disabled={args.disabled}>
      <Fieldset.Legend>
        ラベル<RequirementBadge>※必須</RequirementBadge>
      </Fieldset.Legend>
      <Fieldset.SupportText id="stacked-support-text">
        サポートテキスト
      </Fieldset.SupportText>
      <Checkbox.Group {...args} defaultValue={["選択肢2"]}>
        <div
          className={css({
            mt: 2,
            display: "flex",
            flexDirection: "column",
            gap: 2,
          })}
        >
          {["選択肢1", "選択肢2", "選択肢3"].map((value) => (
            <Checkbox.Root
              colorPalette={args.colorPalette}
              value={value}
              key={value}
            >
              <Checkbox.Control>
                <Checkbox.Indicator />
              </Checkbox.Control>
              <Checkbox.HiddenInput />
              <Checkbox.Label>{value}</Checkbox.Label>
            </Checkbox.Root>
          ))}
        </div>
        <Fieldset.ErrorText>エラーテキスト</Fieldset.ErrorText>
      </Checkbox.Group>
    </Fieldset.Root>
  ),
};

export const Inline: Story = {
  render: ({ ...args }) => (
    <Fieldset.Root invalid={args.invalid} disabled={args.disabled}>
      <Fieldset.Legend>
        ラベル<RequirementBadge>※必須</RequirementBadge>
      </Fieldset.Legend>
      <Fieldset.SupportText id="stacked-support-text">
        サポートテキスト
      </Fieldset.SupportText>
      <Checkbox.Group {...args} defaultValue={["選択肢2"]}>
        <div
          className={css({
            mt: 2,
            display: "flex",
            flexWrap: "wrap",
            columnGap: 4,
          })}
        >
          {["選択肢1", "選択肢2", "選択肢3"].map((value) => (
            <Checkbox.Root
              colorPalette={args.colorPalette}
              value={value}
              key={value}
            >
              <Checkbox.Control>
                <Checkbox.Indicator />
              </Checkbox.Control>
              <Checkbox.HiddenInput />
              <Checkbox.Label>{value}</Checkbox.Label>
            </Checkbox.Root>
          ))}
        </div>
        <Fieldset.ErrorText>エラーテキスト</Fieldset.ErrorText>
      </Checkbox.Group>
    </Fieldset.Root>
  ),
};

export const Errored: Story = {
  render: ({ ...args }) => (
    <Fieldset.Root
      className={css({ display: "flex", flexDirection: "column", gap: 16 })}
      invalid={args.invalid}
      disabled={args.disabled}
    >
      <Checkbox.Group {...args} defaultValue={["選択肢2"]}>
        <Fieldset.Legend>
          ラベル<RequirementBadge>※必須</RequirementBadge>
        </Fieldset.Legend>
        <Fieldset.SupportText id="stacked-support-text">
          サポートテキスト
        </Fieldset.SupportText>
        <div
          className={css({
            mt: 2,
            display: "flex",
            flexDirection: "column",
            gap: 2,
          })}
        >
          {["選択肢1", "選択肢2", "選択肢3"].map((value) => (
            <Checkbox.Root
              colorPalette={args.colorPalette}
              key={value}
              value={value}
            >
              <Checkbox.Control>
                <Checkbox.Indicator />
              </Checkbox.Control>
              <Checkbox.HiddenInput />
              <Checkbox.Label>{value}</Checkbox.Label>
            </Checkbox.Root>
          ))}
        </div>
        <Fieldset.ErrorText>＊エラーテキストが入ります</Fieldset.ErrorText>
      </Checkbox.Group>
      <Checkbox.Group {...args} defaultValue={["選択肢2"]}>
        <Fieldset.Legend>
          ラベル<RequirementBadge>※必須</RequirementBadge>
        </Fieldset.Legend>
        <Fieldset.SupportText id="stacked-support-text">
          サポートテキスト
        </Fieldset.SupportText>
        <div
          className={css({
            mt: 2,
            display: "flex",
            flexWrap: "wrap",
            columnGap: 4,
          })}
        >
          {["選択肢1", "選択肢2", "選択肢3"].map((value) => (
            <Checkbox.Root key={value} value={value}>
              <Checkbox.Control>
                <Checkbox.Indicator />
              </Checkbox.Control>
              <Checkbox.HiddenInput />
              <Checkbox.Label>{value}</Checkbox.Label>
            </Checkbox.Root>
          ))}
        </div>
        <Fieldset.ErrorText>＊エラーテキストが入ります</Fieldset.ErrorText>
      </Checkbox.Group>
    </Fieldset.Root>
  ),
  args: {
    invalid: true,
  },
};

export const Disabled: Story = {
  render: ({ ...args }) => (
    <Fieldset.Root
      className={css({ display: "flex", flexDirection: "column", gap: 16 })}
      invalid={args.invalid}
      disabled={args.disabled}
    >
      <Checkbox.Group {...args} defaultValue={["選択肢2"]}>
        <Fieldset.Legend>
          ラベル<RequirementBadge>※必須</RequirementBadge>
        </Fieldset.Legend>
        <Fieldset.SupportText id="stacked-support-text">
          〜の理由により、この項目は無効化されています。
        </Fieldset.SupportText>
        <div
          className={css({
            mt: 2,
            display: "flex",
            flexDirection: "column",
            gap: 2,
          })}
        >
          {["選択肢1", "選択肢2", "選択肢3"].map((value) => (
            <Checkbox.Root
              colorPalette={args.colorPalette}
              key={value}
              value={value}
            >
              <Checkbox.Control>
                <Checkbox.Indicator />
              </Checkbox.Control>
              <Checkbox.HiddenInput />
              <Checkbox.Label>{value}</Checkbox.Label>
            </Checkbox.Root>
          ))}
        </div>
        <Fieldset.ErrorText>＊エラーテキストが入ります</Fieldset.ErrorText>
      </Checkbox.Group>
      <Checkbox.Group {...args} defaultValue={["選択肢2"]}>
        <Fieldset.Legend>
          ラベル<RequirementBadge>※必須</RequirementBadge>
        </Fieldset.Legend>
        <Fieldset.SupportText id="stacked-support-text">
          〜の理由により、この項目は無効化されています。
        </Fieldset.SupportText>
        <div
          className={css({
            mt: 2,
            display: "flex",
            flexWrap: "wrap",
            columnGap: 4,
          })}
        >
          {["選択肢1", "選択肢2", "選択肢3"].map((value) => (
            <Checkbox.Root key={value} value={value}>
              <Checkbox.Control>
                <Checkbox.Indicator />
              </Checkbox.Control>
              <Checkbox.HiddenInput />
              <Checkbox.Label>{value}</Checkbox.Label>
            </Checkbox.Root>
          ))}
        </div>
        <Fieldset.ErrorText>＊エラーテキストが入ります</Fieldset.ErrorText>
      </Checkbox.Group>
    </Fieldset.Root>
  ),
  args: {
    disabled: true,
  },
};

export const Indeterminate: Story = {
  render: ({ ...args }) => {
    const options = [
      "サッカー",
      "バスケットボール",
      "テニス",
      "スイミング",
      "ヨガ",
    ];
    const [selected, setSelected] = useState(["サッカー"]);
    const onCheckedChange = () => {
      if (selected.length === options.length) {
        setSelected([]);
      } else {
        setSelected(options);
      }
    };
    const onValueChange = (values: string[]) => {
      setSelected(values);
    };

    return (
      <Fieldset.Root invalid={args.invalid} disabled={args.disabled}>
        <Checkbox.Root
          colorPalette={args.colorPalette}
          invalid={args.invalid}
          disabled={args.disabled}
          onCheckedChange={onCheckedChange}
          checked={
            selected.length === options.length
              ? true
              : selected.length === 0
                ? false
                : "indeterminate"
          }
        >
          <Checkbox.Control>
            <Checkbox.Indicator />
            <Checkbox.Indicator indeterminate />
          </Checkbox.Control>
          <Checkbox.HiddenInput />
          <Checkbox.Label>すべてのスポーツ</Checkbox.Label>
        </Checkbox.Root>
        <Checkbox.Group
          {...args}
          value={selected}
          onValueChange={onValueChange}
        >
          <div
            className={css({
              mt: 6,
              display: "flex",
              flexDirection: "column",
              gap: 2,
            })}
          >
            {options.map((value) => (
              <Checkbox.Root
                colorPalette={args.colorPalette}
                value={value}
                key={value}
              >
                <Checkbox.Control>
                  <Checkbox.Indicator />
                </Checkbox.Control>
                <Checkbox.HiddenInput />
                <Checkbox.Label>{value}</Checkbox.Label>
              </Checkbox.Root>
            ))}
          </div>
          <Fieldset.ErrorText>エラーテキスト</Fieldset.ErrorText>
        </Checkbox.Group>
      </Fieldset.Root>
    );
  },
};

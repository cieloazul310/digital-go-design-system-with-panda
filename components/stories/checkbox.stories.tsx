import type { Meta, StoryObj } from "@storybook/nextjs-vite";
// import{ type ChangeEvent, useEffect, useRef, useState } from "react";
import { css } from "styled-system/css";
import { ErrorText, Legend, RequirementBadge, SupportText } from "../src/form";
import * as Checkbox from "../src/checkbox";

const meta = {
  title: "Components/チェックボックス",
  tags: ["autodocs"],
  component: Checkbox.Root,
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
  },
} satisfies Meta<typeof Checkbox.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    size: "sm",
    disabled: false,
    invalid: false,
    children: (
      <>
        <Checkbox.Control>
          <Checkbox.Indicator />
        </Checkbox.Control>
        <Checkbox.HiddenInput />
        <Checkbox.Label>選択肢</Checkbox.Label>
      </>
    ),
  },
};

export const Standalone: Story = {
  args: {
    size: "sm",
    "aria-disabled": false,
    invalid: false,
    "aria-label": "名前を指定してください",
    children: (
      <>
        <Checkbox.Control>
          <Checkbox.Indicator />
        </Checkbox.Control>
        <Checkbox.HiddenInput />
      </>
    ),
  },
};

export const Stacked: Story = {
  render: ({ ...args }) => (
    <Checkbox.Group defaultValue={["選択肢2"]} asChild>
      <fieldset>
        <Legend>
          ラベル<RequirementBadge>※必須</RequirementBadge>
        </Legend>
        <SupportText textStyle="std-16N-170" id="stacked-support-text">
          サポートテキスト
        </SupportText>
        <div
          className={css({
            mt: 2,
            display: "flex",
            flexDirection: "column",
            gap: 2,
          })}
        >
          {["選択肢1", "選択肢2", "選択肢3"].map((value) => (
            <Checkbox.Root {...args} key={value} value={value}>
              <Checkbox.Control>
                <Checkbox.Indicator />
              </Checkbox.Control>
              <Checkbox.HiddenInput />
              <Checkbox.Label>{value}</Checkbox.Label>
            </Checkbox.Root>
          ))}
        </div>
      </fieldset>
    </Checkbox.Group>
  ),
  args: {
    size: "sm",
    invalid: false,
    "aria-disabled": false,
  },
};

export const Inline: Story = {
  render: ({ ...args }) => (
    <Checkbox.Group defaultValue={["選択肢2"]} asChild>
      <fieldset>
        <Legend>
          ラベル<RequirementBadge>※必須</RequirementBadge>
        </Legend>
        <SupportText textStyle="std-16N-170" id="stacked-support-text">
          サポートテキスト
        </SupportText>
        <div
          className={css({
            mt: 2,
            display: "flex",
            flexWrap: "wrap",
            columnGap: 4,
          })}
        >
          {["選択肢1", "選択肢2", "選択肢3"].map((value) => (
            <Checkbox.Root {...args} key={value} value={value}>
              <Checkbox.Control>
                <Checkbox.Indicator />
              </Checkbox.Control>
              <Checkbox.HiddenInput />
              <Checkbox.Label>{value}</Checkbox.Label>
            </Checkbox.Root>
          ))}
        </div>
      </fieldset>
    </Checkbox.Group>
  ),
  args: {
    size: "sm",
    invalid: false,
    "aria-disabled": false,
  },
};

export const Errored: Story = {
  render: ({ ...args }) => {
    return (
      <div
        className={css({ display: "flex", flexDirection: "column", gap: 16 })}
      >
        <Checkbox.Group defaultValue={["選択肢2"]} asChild>
          <fieldset>
            <Legend>
              ラベル<RequirementBadge>※必須</RequirementBadge>
            </Legend>
            <SupportText textStyle="std-16N-170" id="stacked-support-text">
              サポートテキスト
            </SupportText>
            <div
              className={css({
                mt: 2,
                display: "flex",
                flexDirection: "column",
                gap: 2,
              })}
            >
              {["選択肢1", "選択肢2", "選択肢3"].map((value) => (
                <Checkbox.Root {...args} key={value} value={value}>
                  <Checkbox.Control>
                    <Checkbox.Indicator />
                  </Checkbox.Control>
                  <Checkbox.HiddenInput />
                  <Checkbox.Label>{value}</Checkbox.Label>
                </Checkbox.Root>
              ))}
            </div>
            <ErrorText>＊エラーテキストが入ります</ErrorText>
          </fieldset>
        </Checkbox.Group>
        <Checkbox.Group defaultValue={["選択肢2"]} asChild>
          <fieldset>
            <Legend>
              ラベル<RequirementBadge>※必須</RequirementBadge>
            </Legend>
            <SupportText textStyle="std-16N-170" id="stacked-support-text">
              サポートテキスト
            </SupportText>
            <div
              className={css({
                mt: 2,
                display: "flex",
                flexWrap: "wrap",
                columnGap: 4,
              })}
            >
              {["選択肢1", "選択肢2", "選択肢3"].map((value) => (
                <Checkbox.Root {...args} key={value} value={value}>
                  <Checkbox.Control>
                    <Checkbox.Indicator />
                  </Checkbox.Control>
                  <Checkbox.HiddenInput />
                  <Checkbox.Label>{value}</Checkbox.Label>
                </Checkbox.Root>
              ))}
            </div>
            <ErrorText>＊エラーテキストが入ります</ErrorText>
          </fieldset>
        </Checkbox.Group>
      </div>
    );
  },
  args: {
    size: "sm",
    invalid: true,
    "aria-disabled": false,
  },
};

/*
export const Disabled: Story = {
  render: ({ ...args }) => {
    return (
      <div className="flex flex-col gap-16">
        <fieldset>
          <Legend>
            ラベル<RequirementBadge>※必須</RequirementBadge>
          </Legend>
          <SupportText className="mt-2" id="disabled-1-support-text">
            〜の理由により、この項目は無効化されています。
          </SupportText>
          <div className="mt-1 flex flex-col">
            <Checkbox aria-describedby="disabled-1-support-text" {...args}>
              選択肢1
            </Checkbox>
            <Checkbox
              aria-describedby="disabled-1-support-text"
              defaultChecked
              {...args}
            >
              選択肢2
            </Checkbox>
            <Checkbox aria-describedby="disabled-1-support-text" {...args}>
              選択肢3
            </Checkbox>
          </div>
        </fieldset>
        <fieldset>
          <Legend>
            ラベル<RequirementBadge>※必須</RequirementBadge>
          </Legend>
          <SupportText className="mt-2" id="disabled-2-support-text">
            〜の理由により、この項目は無効化されています。
          </SupportText>
          <div className="mt-1 flex flex-wrap gap-x-4">
            <Checkbox aria-describedby="disabled-2-support-text" {...args}>
              選択肢1
            </Checkbox>
            <Checkbox
              aria-describedby="disabled-2-support-text"
              defaultChecked
              {...args}
            >
              選択肢2
            </Checkbox>
            <Checkbox aria-describedby="disabled-2-support-text" {...args}>
              選択肢3
            </Checkbox>
          </div>
        </fieldset>
      </div>
    );
  },
  args: {
    size: "sm",
    isError: false,
    "aria-disabled": "true",
  },
  argTypes: {
    "aria-disabled": {
      table: {
        disable: true,
      },
    },
  },
};

export const Indeterminate: Story = {
  render: ({ ...args }) => {
    const checkAll = useRef<HTMLInputElement>(null);
    const [checks, setChecks] = useState([false, true, false, false, true]);
    const options = [
      "サッカー",
      "バスケットボール",
      "テニス",
      "スイミング",
      "ヨガ",
    ];

    useEffect(() => {
      if (!checkAll.current) return;
      const allChecked = checks.every(Boolean);
      const noneChecked = checks.every((v) => !v);
      checkAll.current.checked = allChecked;
      checkAll.current.indeterminate = !allChecked && !noneChecked;
    });

    const handleCheckAllChange = (e) => {
      if (!checkAll.current) return;
      const checked = checkAll.current.indeterminate || e.target.checked;
      checkAll.current.checked = checked;
      setChecks(checks.map(() => checked));
    };

    const handleIndividualChange =
      (index: number) => (e: ChangeEvent<HTMLInputElement>) => {
        const newChecks = [...checks];
        newChecks[index] = e.target.checked;
        setChecks(newChecks);
      };

    return (
      <>
        <Checkbox ref={checkAll} onChange={handleCheckAllChange} {...args}>
          すべてのスポーツ
        </Checkbox>
        <div className="mt-6 flex flex-col gap-2">
          {options.map((option, index) => (
            <Checkbox
              key={option}
              checked={checks[index]}
              onChange={handleIndividualChange(index)}
              {...args}
            >
              {option}
            </Checkbox>
          ))}
        </div>
      </>
    );
  },
  args: {
    size: "sm",
    isError: false,
    "aria-disabled": false,
  },
};
*/

import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Fragment } from "react";
import NextLink from "next/link";
import {
  CheckCircle2Icon,
  CircleXIcon,
  TriangleAlert,
  InfoIcon,
  Circle,
} from "lucide-react";
import { css } from "styled-system/css";
import { chipLabel, link } from "styled-system/recipes";
import { Flex, HStack, styled } from "styled-system/jsx";
import { ChipLabel } from "../src/chip-label";
import { Table } from "../src/table";
import { colorPalette } from "./utils/color-palette";

const meta = {
  title: "Components/チップラベル",
  component: ChipLabel,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      options: chipLabel.variantMap.variant,
      control: { type: "radio" },
      description:
        "チップラベルのスタイルを、塗りボタン（`solid-fill`）、アウトラインボタン（`outline`）、テキストボタン（`text`）、アウトライン+塗り(`ghost`)の4種類から選択します。",
      table: {
        type: { summary: `${chipLabel.variantMap.variant.join(" | ")}` },
      },
    },
    colorPalette,
  },
  args: {
    variant: "text",
    colorPalette: "keyColor",
  },
} satisfies Meta<typeof ChipLabel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    children: (
      <>
        <CheckCircle2Icon />
        ラベル
      </>
    ),
  },
};

export const Notification: Story = {
  render: ({ variant, ...args }) => (
    <HStack gap={8}>
      <ChipLabel {...args} colorPalette="green" variant={variant}>
        <CheckCircle2Icon />
        成功
      </ChipLabel>
      <ChipLabel {...args} colorPalette="red" variant={variant}>
        <CircleXIcon />
        失敗
      </ChipLabel>
      <ChipLabel {...args} colorPalette="yellow" variant={variant}>
        <TriangleAlert />
        注意
      </ChipLabel>
      <ChipLabel {...args} colorPalette="solid-gray" variant={variant}>
        <InfoIcon />
        情報
      </ChipLabel>
    </HStack>
  ),
};

export const Styling: Story = {
  args: {
    ...css.raw({
      rounded: "full",
    }),
    variant: "outlined",
  },
  render: ({ ...args }) => (
    <Flex gap={4}>
      <div
        className={css({ display: "inline-flex", gap: 4, flexWrap: "wrap" })}
      >
        <ChipLabel {...args} colorPalette="red">
          <Circle />
          可燃ごみ
        </ChipLabel>
        <ChipLabel {...args} colorPalette="yellow">
          <Circle />
          不燃ごみ
        </ChipLabel>
        <ChipLabel {...args} colorPalette="green">
          <Circle />
          資源ごみ
        </ChipLabel>
        <ChipLabel {...args} colorPalette="blue">
          <Circle />
          プラスチック
        </ChipLabel>
        <ChipLabel {...args} colorPalette="purple">
          <Circle />
          ビン・缶・ペットボトル
        </ChipLabel>
        <ChipLabel {...args} colorPalette="blue">
          <Circle />
          粗大ごみ
        </ChipLabel>
      </div>
    </Flex>
  ),
};

export const WithoutIcon: Story = {
  args: {
    ...css.raw({
      rounded: 0,
    }),
    variant: "solid-fill",
  },
  render: ({ ...args }) => (
    <Flex gap={4}>
      <div
        className={css({ display: "inline-flex", gap: 4, flexWrap: "wrap" })}
      >
        <ChipLabel {...args} colorPalette="green">
          提出済
        </ChipLabel>
        <ChipLabel {...args} colorPalette="blue">
          審査中
        </ChipLabel>
        <ChipLabel {...args} colorPalette="lime">
          承認済
        </ChipLabel>
        <ChipLabel {...args} colorPalette="purple">
          保留中
        </ChipLabel>
        <ChipLabel {...args} colorPalette="orange">
          手続き中止申請
        </ChipLabel>
        <ChipLabel {...args} colorPalette="red">
          却下
        </ChipLabel>
      </div>
    </Flex>
  ),
};

export const WithTableOne: Story = {
  render: ({ ...args }) => {
    const data = [
      {
        id: "kyousou",
        title: "共創プロジェクト",
        manager: "デジ田 太郎",
        status: "下書き",
        tags: ["エンジニアリング", "開発"],
        date: new Date("2023-09-23"),
      },
      {
        id: "management",
        title: "組織戦略プロジェクト",
        manager: "デジ濱 実",
        status: "公開済み",
        tags: ["デザイン", "開発"],
        date: new Date("2023-10-07"),
      },
      {
        id: "improvement",
        title: "業務改善プロジェクト",
        manager: "デジ山 ひかり",
        status: "下書き",
        tags: ["エンジニアリング", "開発"],
        date: new Date("2023-11-08"),
      },
      {
        id: "training",
        title: "人材育成プロジェクト",
        manager: "出而足 長一郎",
        status: "公開済み",
        tags: ["デザイン", "開発"],
        date: new Date("2023-11-13"),
      },
      {
        id: "management",
        title: "組織戦略プロジェクト",
        manager: "電磁 多留子",
        status: "公開予約中",
        tags: ["エンジニアリング"],
        date: new Date("2028-12-2"),
      },
    ];
    const chip = (status: string) => {
      if (status === "下書き") {
        return (
          <ChipLabel {...args} variant="solid-fill" colorPalette="solid-gray">
            {status}
          </ChipLabel>
        );
      }
      if (status === "公開済み") {
        return (
          <ChipLabel {...args} variant="ghost" colorPalette="lime">
            {status}
          </ChipLabel>
        );
      }
      if (status === "公開予約中") {
        return (
          <ChipLabel {...args} variant="ghost" colorPalette="yellow">
            {status}
          </ChipLabel>
        );
      }
      return null;
    };

    return (
      <div className={css({ overflowX: "auto" })}>
        <Table.Root dense>
          <colgroup>
            <styled.col
              borderRightWidth="1px"
              borderColor="solid-gray.420"
              minWidth={32}
            />
            <styled.col
              borderRightWidth="1px"
              borderColor="solid-gray.420"
              minWidth={32}
            />
            <styled.col borderRightWidth="1px" borderColor="solid-gray.420" />
            <styled.col
              borderRightWidth="1px"
              borderColor="solid-gray.420"
              minWidth={48}
            />
            <styled.col
              borderRightWidth="1px"
              borderColor="solid-gray.420"
              minWidth={32}
            />
          </colgroup>
          <Table.Head>
            <Table.Row>
              <Table.Header scope="col">タイトル</Table.Header>
              <Table.Header scope="col">担当者</Table.Header>
              <Table.Header scope="col">ステータス</Table.Header>
              <Table.Header scope="col">タグ</Table.Header>
              <Table.Header scope="col">日付</Table.Header>
            </Table.Row>
          </Table.Head>
          <Table.Body>
            {data
              .sort((a, b) => a.date.getTime() - b.date.getTime())
              .map(({ id, title, manager, status, tags, date }) => (
                <Table.Row key={`${id}${manager}`}>
                  <Table.Header scope="row">
                    <NextLink className={link()} href={`/project/${id}`}>
                      {title}
                    </NextLink>
                  </Table.Header>
                  <Table.Cell>{manager}</Table.Cell>
                  <Table.Cell>{chip(status)}</Table.Cell>
                  <Table.Cell>{tags.join(", ")}</Table.Cell>
                  <Table.Cell>
                    <time dateTime={date.toDateString()}>
                      {`${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`}
                    </time>
                  </Table.Cell>
                </Table.Row>
              ))}
          </Table.Body>
        </Table.Root>
      </div>
    );
  },
};

export const WithTableTwo: Story = {
  args: {
    colorPalette: "green",
  },
  render: ({ ...args }) => {
    const data = [
      {
        type: "design",
        title: "デザインデータ (Figma)",
        url: "/figma",
        status: true,
      },
      {
        type: "implementation",
        title: "ソースコード (HTML + CSS)",
        url: "/code-html-css",
        status: false,
      },
      {
        type: "implementation",
        title: "サンプル (HTML + CSS)",
        url: "/sample-html-css",
        status: false,
      },
      {
        type: "implementation",
        title: "ソースコード (React + Tailwind)",
        url: "/code-react-tailwind",
        status: true,
      },
      {
        type: "implementation",
        title: "サンプル (React + Tailwind)",
        url: "/sample-react-tailwind",
        status: true,
      },
    ];
    const chip = (status: boolean) => {
      if (status) {
        return (
          <ChipLabel {...args} variant="solid-fill">
            提供中
          </ChipLabel>
        );
      }
      return (
        <ChipLabel {...args} variant="ghost">
          提供予定
        </ChipLabel>
      );
    };

    return (
      <div className={css({ overflowX: "auto" })}>
        <Table.Root dense>
          <colgroup>
            <styled.col minWidth={32} />
            <styled.col minWidth={32} />
            <styled.col />
          </colgroup>
          <Table.Head>
            <Table.Row>
              <Table.Header scope="col">種別</Table.Header>
              <Table.Header scope="col">リソース</Table.Header>
              <Table.Header scope="col">状態</Table.Header>
            </Table.Row>
          </Table.Head>
          <Table.Body>
            {[
              data.filter(({ type }) => type === "design"),
              data.filter(({ type }) => type === "implementation"),
            ].map((group, parentIndex) => (
              <Fragment key={parentIndex.toString()}>
                {group.map(({ type, title, url, status }, index, arr) => (
                  <Table.Row key={title}>
                    {index === 0 && (
                      <Table.Cell rowSpan={arr.length}>
                        {type === "design"
                          ? "デザイン"
                          : type === "implementation"
                            ? "実装"
                            : ""}
                      </Table.Cell>
                    )}
                    <Table.Cell>
                      {status ? (
                        <NextLink href={url} className={link()}>
                          {title}
                        </NextLink>
                      ) : (
                        title
                      )}
                    </Table.Cell>
                    <Table.Cell>{chip(status)}</Table.Cell>
                  </Table.Row>
                ))}
              </Fragment>
            ))}
          </Table.Body>
        </Table.Root>
      </div>
    );
  },
};

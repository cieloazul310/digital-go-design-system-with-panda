/**
 * reference:
 * https://giTable.Headerlub.com/digital-go-jp/design-system-example-components/blob/main/src/components/Table/Table.stories.tsx
 */
import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { styled } from "@cieloazul310/styled-system/jsx";
import * as Table from "@cieloazul310/digital-go-pandacss/table";
import * as Checkbox from "@cieloazul310/digital-go-pandacss/checkbox";
import { css } from "@cieloazul310/styled-system/css";

const meta = {
  title: "Components/テーブル",
  tags: ["autodocs"],
  component: Table.Root,
  argTypes: {
    dense: { control: "boolean" },
    striped: { control: "boolean" },
    hovered: { control: "boolean" },
  },
  args: {
    dense: false,
    striped: false,
    hovered: false,
  },
} satisfies Meta<typeof Table.Root>;

export default meta;
type Story = StoryObj<typeof Table.Root>;

export const Playground: Story = {
  args: {
    children: (
      <>
        <Table.Caption>テーブル</Table.Caption>
        <colgroup>
          <styled.col
            borderRightWidth="1px"
            borderColor="black"
            bg="solid-gray.50"
          />
          <col />
          <col />
          <col />
          <col />
          <col />
        </colgroup>
        <Table.Head>
          <Table.Row>
            <Table.Header scope="col">ラベル</Table.Header>
            <Table.Header scope="col">ラベル</Table.Header>
            <Table.Header scope="col">ラベル</Table.Header>
            <Table.Header scope="col">ラベル</Table.Header>
            <Table.Header scope="col">ラベル</Table.Header>
            <Table.Header scope="col">ラベル</Table.Header>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          {Array.from({ length: 4 }).map((_, index) => (
            <Table.Row key={index}>
              <Table.Header scope="row">データ</Table.Header>
              <Table.Cell>データ</Table.Cell>
              <Table.Cell>データ</Table.Cell>
              <Table.Cell>データ</Table.Cell>
              <Table.Cell>データ</Table.Cell>
              <Table.Cell>データ</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </>
    ),
  },
};

export const TableHeaderWithRowspan: Story = {
  args: {
    children: (
      <>
        <colgroup>
          <styled.col
            borderRightWidth="1px"
            borderColor="solid-gray.420"
            bg="solid-gray.50"
          />
          <styled.col
            borderRightWidth="1px"
            borderColor="black"
            bg="solid-gray.50"
          />
          <col />
          <col />
          <col />
          <col />
        </colgroup>
        <Table.Body>
          <Table.Row>
            <Table.Header rowSpan={2} scope="row">
              親ラベル
            </Table.Header>
            <Table.Header scope="row">子ラベル</Table.Header>
            <Table.Cell>データ</Table.Cell>
            <Table.Cell>データ</Table.Cell>
            <Table.Cell>データ</Table.Cell>
            <Table.Cell>データ</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Header scope="row">子ラベル</Table.Header>
            <Table.Cell>データ</Table.Cell>
            <Table.Cell>データ</Table.Cell>
            <Table.Cell>データ</Table.Cell>
            <Table.Cell>データ</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Header rowSpan={2} scope="row">
              親ラベル
            </Table.Header>
            <Table.Header scope="row">子ラベル</Table.Header>
            <Table.Cell>データ</Table.Cell>
            <Table.Cell>データ</Table.Cell>
            <Table.Cell>データ</Table.Cell>
            <Table.Cell>データ</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Header scope="row">子ラベル</Table.Header>
            <Table.Cell>データ</Table.Cell>
            <Table.Cell>データ</Table.Cell>
            <Table.Cell>データ</Table.Cell>
            <Table.Cell>データ</Table.Cell>
          </Table.Row>
        </Table.Body>
      </>
    ),
  },
};

export const Selectable: Story = {
  args: {
    dense: true,
  },
  render: ({ ...props }) => {
    const articles = [
      { title: "記事タイトル1", status: "公開中", comments: 10 },
      { title: "記事タイトル2", status: "下書き", comments: 0 },
      { title: "記事タイトル3", status: "非公開", comments: 3 },
    ];
    const [selected, setSelected] = useState<string[]>([]);
    const onCheckedChange = () => {
      if (selected.length === 3) {
        setSelected([]);
      } else {
        setSelected(articles.map(({ title }) => title));
      }
    };
    const onValueChange = (values: string[]) => {
      setSelected(values);
    };

    return (
      <Table.Root {...props}>
        <Table.Caption>テーブル</Table.Caption>
        <Table.Head>
          <Table.Row>
            <Table.Header scope="col" width={10} position="relative">
              <Checkbox.Root
                position="absolute"
                pt={2.5}
                top="50%"
                left="50%"
                transform="translate(-50%, -50%)"
                checked={
                  selected.length === 3
                    ? true
                    : selected.length === 0
                      ? false
                      : "indeterminate"
                }
                onCheckedChange={onCheckedChange}
              >
                <Checkbox.Control>
                  <Checkbox.Indicator />
                  <Checkbox.Indicator indeterminate />
                </Checkbox.Control>
                <Checkbox.HiddenInput />
              </Checkbox.Root>
            </Table.Header>
            <Table.Header scope="col">タイトル</Table.Header>
            <Table.Header scope="col">状態</Table.Header>
            <Table.Header scope="col">コメント数</Table.Header>
          </Table.Row>
        </Table.Head>
        <Checkbox.Group value={selected} onValueChange={onValueChange} asChild>
          <Table.Body>
            {articles.map(({ title, status, comments }) => (
              <Table.Row key={title}>
                <Table.Cell position="relative">
                  <Checkbox.Root
                    value={title}
                    position="absolute"
                    pt={2.5}
                    top="50%"
                    left="50%"
                    transform="translate(-50%, -50%)"
                  >
                    <Checkbox.Control>
                      <Checkbox.Indicator />
                    </Checkbox.Control>
                    <Checkbox.HiddenInput />
                  </Checkbox.Root>
                </Table.Cell>
                <Table.Header scope="row">{title}</Table.Header>
                <Table.Cell>{status}</Table.Cell>
                <Table.Cell>{comments.toString()}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Checkbox.Group>
      </Table.Root>
    );
  },
};

export const IndentedRows: Story = {
  args: {
    children: (
      <>
        <colgroup>
          <styled.col width={8} />
        </colgroup>
        <Table.Head>
          <Table.Row>
            <Table.Cell colSpan={2} />
            <Table.Header scope="col">代表者名</Table.Header>
            <Table.Header scope="col">電話番号</Table.Header>
            <Table.Header scope="col">住所</Table.Header>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          <Table.Row>
            <Table.Header colSpan={2} scope="row">
              東京本社
            </Table.Header>
            <Table.Cell>山田太郎</Table.Cell>
            <Table.Cell>03-1234-5678</Table.Cell>
            <Table.Cell>東京都新宿区新宿字恐山</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Header scope="row">
              <styled.span srOnly>東京本社</styled.span>
            </Table.Header>
            <Table.Header scope="row">営業部</Table.Header>
            <Table.Cell>佐藤花子</Table.Cell>
            <Table.Cell>03-2345-6789</Table.Cell>
            <Table.Cell>東京都渋谷区4-5-6</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Header scope="row">
              <styled.span srOnly>東京本社</styled.span>
            </Table.Header>
            <Table.Header scope="row">開発部</Table.Header>
            <Table.Cell>鈴木一郎</Table.Cell>
            <Table.Cell>03-3456-7890</Table.Cell>
            <Table.Cell>東京都港区7-8-9</Table.Cell>
          </Table.Row>
        </Table.Body>
      </>
    ),
  },
};

export const Overflow: Story = {
  render: ({ ...props }) => (
    <div className={css({ overflowX: "auto" })}>
      <Table.Root {...props}>
        <Table.Caption>テーブル</Table.Caption>
        <colgroup>
          <styled.col
            borderRightWidth="1px"
            borderColor="black"
            bg="solid-gray.50"
            minWidth={24}
          />
          <styled.col minWidth={24} />
          <styled.col minWidth={24} />
          <styled.col minWidth={48} />
          <styled.col minWidth={48} />
          <styled.col minWidth={48} />
        </colgroup>
        <Table.Head>
          <Table.Row>
            <Table.Header scope="col">ラベル</Table.Header>
            <Table.Header scope="col">ラベル</Table.Header>
            <Table.Header scope="col">ラベル</Table.Header>
            <Table.Header scope="col">ラベル</Table.Header>
            <Table.Header scope="col">ラベル</Table.Header>
            <Table.Header scope="col">ラベル</Table.Header>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          {Array.from({ length: 4 }).map((_, index) => (
            <Table.Row key={index}>
              <Table.Header scope="row">データ</Table.Header>
              <Table.Cell>データ</Table.Cell>
              <Table.Cell>データ</Table.Cell>
              <Table.Cell>構造化されたデータや情報を表示するとき</Table.Cell>
              <Table.Cell>データを比較するとき</Table.Cell>
              <Table.Cell>大量のデータを一覧表示するとき</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </div>
  ),
};

/**
 * reference:
 * https://giTable.Headerlub.com/digital-go-jp/design-system-example-components/blob/main/src/components/Table/Table.stories.tsx
 */
import type { Meta, StoryObj } from "@storybook/react-vite";
import { styled } from "@import-map-package/styled-system/jsx";
import * as Table from "@cieloazul310/digital-go-pandacss/table";

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

export const IndentedRows: Story = {
  args: {
    children: (
      <>
        <styled.col width={8} />
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

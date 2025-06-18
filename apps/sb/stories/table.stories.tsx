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
  render: ({ ...props }) => {
    return (
      <Table.Root {...props}>
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
          <Table.Row>
            <Table.Cell>データ</Table.Cell>
            <Table.Cell>データ</Table.Cell>
            <Table.Cell>データ</Table.Cell>
            <Table.Cell>データ</Table.Cell>
            <Table.Cell>データ</Table.Cell>
            <Table.Cell>データ</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>データ</Table.Cell>
            <Table.Cell>データ</Table.Cell>
            <Table.Cell>データ</Table.Cell>
            <Table.Cell>データ</Table.Cell>
            <Table.Cell>データ</Table.Cell>
            <Table.Cell>データ</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>データ</Table.Cell>
            <Table.Cell>データ</Table.Cell>
            <Table.Cell>データ</Table.Cell>
            <Table.Cell>データ</Table.Cell>
            <Table.Cell>データ</Table.Cell>
            <Table.Cell>データ</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table.Root>
    );
  },
};

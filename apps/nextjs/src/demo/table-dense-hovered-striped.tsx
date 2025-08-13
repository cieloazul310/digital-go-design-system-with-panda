import { css } from "styled-system/css";
import { Table } from "@/components/ui/table";

export default function App() {
  return (
    <Table.Root dense hovered striped>
      <Table.Caption>テーブル</Table.Caption>
      <colgroup>
        <col
          className={css({
            borderRightWidth: "1px",
            borderColor: "black",
          })}
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
    </Table.Root>
  );
}

import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { List, OrderedList, UnorderedList } from "../src/list";
import { Link } from "../src/link";

const meta = {
  title: "Components/箇条書きリスト",
  tags: ["autodocs"],
  component: List,
} satisfies Meta<typeof List>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AllLists: Story = {
  render: () => (
    <>
      <UnorderedList>
        <List>短いテキスト</List>
        <List>
          これは少し長めのテキストサンプルです。リストアイテムの中に含まれる文章の例として使用しています。
        </List>
        <List>
          ネストされたリスト
          <OrderedList marker="number">
            <List>
              <span>1. </span>
              番号付きリストの最初の項目
            </List>
            <List>
              <Link href="#">
                <span>2. </span>
                二番目の項目で、これは比較的長い説明文を含んでいます。ネストされた構造の例として作成されました。
              </Link>
            </List>
            <List>
              <Link href="#">
                <span>3. </span>
                三番目
              </Link>
            </List>
          </OrderedList>
        </List>
        <List>
          複雑な入れ子構造の例
          <UnorderedList>
            <List>サブリストA</List>
            <List>
              サブリストBで更にネスト
              <OrderedList marker="number">
                <List>
                  <span>① </span>
                  番号付きサブアイテム1
                </List>
                <List>
                  <span>② </span>
                  <Link href="#">番号付きサブアイテム2</Link>
                  （長めの説明付き：この項目は複数レベルの入れ子構造を示すために作成されています）
                </List>
              </OrderedList>
            </List>
            <List>サブリストC</List>
          </UnorderedList>
        </List>
      </UnorderedList>

      <OrderedList marker="number">
        <List>
          <span>１ </span>
          最初
        </List>
        <List>
          <span>２ </span>
          二番目の項目として、長めの文章を含む例です。番号付きリストの中での文章の長さの違いを示しています。
        </List>
        <List>
          <span>３ </span>
          三番目（ネスト含む）
          <UnorderedList>
            <List>無順序サブリスト項目A</List>
            <List>無順序サブリスト項目B</List>
            <List>
              無順序サブリスト項目C
              <OrderedList marker="number">
                <List>
                  <span>（１）</span>
                  再び番号付きリスト
                </List>
                <List>
                  <span>（２）</span>
                  非常に長いテキストの例：この項目は
                  <strong>複数レベルの入れ子構造</strong>
                  における文章の長さの違いを示すために作成されたサンプルテキストです。実際の使用場面では、このような長い説明文が含まれることもあります。
                </List>
              </OrderedList>
            </List>
          </UnorderedList>
        </List>
        <List>
          <span>４ </span>四番目
        </List>
      </OrderedList>
    </>
  ),
};

import type { StoryObj, Meta } from "@storybook/react-vite";
import { css } from "@import-map-package/styled-system/css";
import { menuItem } from "@import-map-package/styled-system/recipes";

const meta = {
  title: "プレイグラウンド",
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const MenuItem: Story = {
  render: () => (
    <ul>
      <li className={menuItem()}>Menu Item</li>
      <li className={menuItem()}>Menu Item</li>
      <li className={menuItem()} data-selected={true}>
        Menu Item
      </li>
      <li className={menuItem({ isCondensed: true })}>Condensed</li>
      <li className={menuItem({ isCondensed: true })}>Condensed</li>
      <li className={menuItem({ isCondensed: true })} data-selected={true}>
        Condensed
      </li>
    </ul>
  ),
};

export const BoxedMenu: Story = {
  render: () => (
    <nav>
      <ul>
        <li className={css({})}>
          <a className={menuItem({ variant: "boxed" })} href="/">
            セクションタイトル
          </a>
          <ul className={css({ pl: 4 })}>
            <li>
              <a href="/" className={menuItem({ variant: "boxed" })}>
                メニューアイテム1
              </a>
            </li>
            <li>
              <a
                href="/"
                className={menuItem({ variant: "boxed" })}
                data-selected={true}
              >
                メニューアイテム2
              </a>
            </li>
            <li>
              <a href="/" className={menuItem({ variant: "boxed" })}>
                メニューアイテム3
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  ),
};

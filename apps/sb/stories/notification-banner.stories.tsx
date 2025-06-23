import type { Meta, StoryObj } from "@storybook/react-vite";
import * as NotificationBanner from "@cieloazul310/digital-go-pandacss/notification-banner";

const meta = {
  title: "Components/ノティフィケーションバナー",
  tags: ["autodocs"],
  component: NotificationBanner.Root,
  argTypes: {
    bannerStyle: {
      options: ["standard", "color-chip"],
      control: { type: "radio" },
      description: "ノティフケーションバナーのスタイルを選択します。",
      table: {
        type: { summary: "'standard' | 'color-chip'" },
      },
    },
    type: {
      options: ["info1", "info2", "warning", "error", "success"],
      control: { type: "radio" },
      description:
        "ノティフケーションバナーで通知する情報属性の種類を選択します。",
      table: {
        type: {
          summary: "'info1' | 'info2' | 'warning' | 'error' | 'success'",
        },
      },
    },
  },
} satisfies Meta<typeof NotificationBanner.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    bannerStyle: "standard",
    type: "info2",
  },
  render: ({ ...props }) => (
    <NotificationBanner.Root {...props}>
      <NotificationBanner.Icon />
      <NotificationBanner.Header>
        <NotificationBanner.Heading>バナータイトル</NotificationBanner.Heading>
        <NotificationBanner.Close>閉じる</NotificationBanner.Close>
      </NotificationBanner.Header>
      <NotificationBanner.Body>
        <p>
          <time dateTime="2024-07-01">2024年7月1日</time>
        </p>
        <p>
          ダミーテキストは、デザインの作成時に使用される仮の文章です。ダミーテキストは、デザインの作成時に使用される仮の文章です。ダミーテキストは、デザインの作成時に使用される仮の文章です。
        </p>
      </NotificationBanner.Body>
    </NotificationBanner.Root>
  ),
};

export const WithAction: Story = {
  args: {
    bannerStyle: "standard",
    type: "info2",
  },
  render: ({ ...props }) => (
    <NotificationBanner.Root {...props}>
      <NotificationBanner.Icon />
      <NotificationBanner.Header>
        <NotificationBanner.Heading>バナータイトル</NotificationBanner.Heading>
        <NotificationBanner.Close>閉じる</NotificationBanner.Close>
      </NotificationBanner.Header>
      <NotificationBanner.Body>
        <p>
          <time dateTime="2024-07-01">2024年7月1日</time>
        </p>
        <p>
          ダミーテキストは、デザインの作成時に使用される仮の文章です。ダミーテキストは、デザインの作成時に使用される仮の文章です。ダミーテキストは、デザインの作成時に使用される仮の文章です。
        </p>
      </NotificationBanner.Body>
    </NotificationBanner.Root>
  ),
};

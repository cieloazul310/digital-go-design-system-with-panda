import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { notificationBanner } from "styled-system/recipes";
import * as NotificationBanner from "../src/notification-banner";
import { Button } from "../src/button";

const meta = {
  title: "Components/ノティフィケーションバナー",
  tags: ["autodocs"],
  component: NotificationBanner.Root,
  argTypes: {
    bannerStyle: {
      options: notificationBanner.variantMap.bannerStyle,
      control: { type: "radio" },
      description: "ノティフケーションバナーのスタイルを選択します。",
      table: {
        type: {
          summary: `${notificationBanner.variantMap.bannerStyle.join(" | ")}`,
        },
        defaultValue: { summary: "standard" },
      },
    },
    type: {
      options: notificationBanner.variantMap.type,
      control: { type: "radio" },
      description:
        "ノティフケーションバナーで通知する情報属性の種類を選択します。",
      table: {
        defaultValue: {
          summary: "info2",
        },
        type: {
          summary: `${notificationBanner.variantMap.type.join(" | ")}`,
        },
      },
    },
  },
  args: {
    bannerStyle: "standard",
    type: "info2",
  },
} satisfies Meta<typeof NotificationBanner.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    children: (
      <>
        <NotificationBanner.Icon />
        <NotificationBanner.Header>
          <NotificationBanner.Heading>
            バナータイトル
          </NotificationBanner.Heading>
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
      </>
    ),
  },
};

export const WithAction: Story = {
  args: {
    children: (
      <>
        <NotificationBanner.Icon />
        <NotificationBanner.Header>
          <NotificationBanner.Heading>
            バナータイトル
          </NotificationBanner.Heading>
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
        <NotificationBanner.Actions>
          <Button variant="outline">アクションボタン</Button>
          <Button>アクションボタン</Button>
        </NotificationBanner.Actions>
      </>
    ),
  },
};

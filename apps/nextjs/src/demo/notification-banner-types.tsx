import { Flex } from "styled-system/jsx";
import * as NotificationBanner from "@/components/ui/notification-banner";

export default function App() {
  return (
    <Flex gap={8} direction="column">
      <NotificationBanner.Root type="info1">
        <NotificationBanner.Icon />
        <NotificationBanner.Header>
          <NotificationBanner.Heading>
            登録期間が延長されました
          </NotificationBanner.Heading>
        </NotificationBanner.Header>
        <NotificationBanner.Body>
          ダミーテキストは、デザインの作成時に使用される仮の文章です。ダミーテキストは、デザインの作成時に使用される仮の文章です。ダミーテキストは、デザインの作成時に使用される仮の文章です。
        </NotificationBanner.Body>
      </NotificationBanner.Root>
      <NotificationBanner.Root type="info2">
        <NotificationBanner.Icon />
        <NotificationBanner.Header>
          <NotificationBanner.Heading>
            登録期間が延長されました
          </NotificationBanner.Heading>
        </NotificationBanner.Header>
        <NotificationBanner.Body>
          ダミーテキストは、デザインの作成時に使用される仮の文章です。ダミーテキストは、デザインの作成時に使用される仮の文章です。ダミーテキストは、デザインの作成時に使用される仮の文章です。
        </NotificationBanner.Body>
      </NotificationBanner.Root>
      <NotificationBanner.Root type="success">
        <NotificationBanner.Icon />
        <NotificationBanner.Header>
          <NotificationBanner.Heading>
            登録手続きは全て完了しました
          </NotificationBanner.Heading>
        </NotificationBanner.Header>
        <NotificationBanner.Body>
          ダミーテキストは、デザインの作成時に使用される仮の文章です。ダミーテキストは、デザインの作成時に使用される仮の文章です。ダミーテキストは、デザインの作成時に使用される仮の文章です。
        </NotificationBanner.Body>
      </NotificationBanner.Root>
      <NotificationBanner.Root type="warning">
        <NotificationBanner.Icon />
        <NotificationBanner.Header>
          <NotificationBanner.Heading>
            偽SNSアカウントにご注意ください
          </NotificationBanner.Heading>
        </NotificationBanner.Header>
        <NotificationBanner.Body>
          ダミーテキストは、デザインの作成時に使用される仮の文章です。ダミーテキストは、デザインの作成時に使用される仮の文章です。ダミーテキストは、デザインの作成時に使用される仮の文章です。
        </NotificationBanner.Body>
      </NotificationBanner.Root>
      <NotificationBanner.Root type="error">
        <NotificationBanner.Icon />
        <NotificationBanner.Header>
          <NotificationBanner.Heading>
            操作を完了できませんでした
          </NotificationBanner.Heading>
        </NotificationBanner.Header>
        <NotificationBanner.Body>
          ダミーテキストは、デザインの作成時に使用される仮の文章です。ダミーテキストは、デザインの作成時に使用される仮の文章です。ダミーテキストは、デザインの作成時に使用される仮の文章です。
        </NotificationBanner.Body>
      </NotificationBanner.Root>
    </Flex>
  );
}

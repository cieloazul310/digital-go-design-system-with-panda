import * as NotificationBanner from "@/components/ui/notification-banner";

export default function App() {
  return (
    <NotificationBanner.Root type="success" bannerStyle="color-chip">
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
  );
}

import { NotificationBanner } from "@/components/ui/notification-banner";
import { Button } from "@/components/ui/button";

export default function App() {
  return (
    <NotificationBanner.Root type="error">
      <NotificationBanner.Icon />
      <NotificationBanner.Header>
        <NotificationBanner.Heading>
          登録期間が延長されました
        </NotificationBanner.Heading>
      </NotificationBanner.Header>
      <NotificationBanner.Body>
        ダミーテキストは、デザインの作成時に使用される仮の文章です。ダミーテキストは、デザインの作成時に使用される仮の文章です。ダミーテキストは、デザインの作成時に使用される仮の文章です。
      </NotificationBanner.Body>
      <NotificationBanner.Actions>
        <Button variant="outline">キャンセル</Button>
        <Button>承認する</Button>
      </NotificationBanner.Actions>
    </NotificationBanner.Root>
  );
}

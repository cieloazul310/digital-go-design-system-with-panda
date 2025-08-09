import { useState } from "react";
import * as NotificationBanner from "@/components/ui/notification-banner";
import { Button } from "@/components/ui/button";

export default function App() {
  const [read, setRead] = useState(false);

  if (read)
    return (
      <Button variant="text" onClick={() => setRead(false)}>
        再表示
      </Button>
    );

  return (
    <NotificationBanner.Root type="warning">
      <NotificationBanner.Icon />
      <NotificationBanner.Header>
        <NotificationBanner.Heading>
          偽SNSアカウントにご注意ください
        </NotificationBanner.Heading>
        <NotificationBanner.Close onClick={() => setRead(true)}>
          閉じる
        </NotificationBanner.Close>
      </NotificationBanner.Header>
      <NotificationBanner.Body>
        ダミーテキストは、デザインの作成時に使用される仮の文章です。ダミーテキストは、デザインの作成時に使用される仮の文章です。ダミーテキストは、デザインの作成時に使用される仮の文章です。
      </NotificationBanner.Body>
    </NotificationBanner.Root>
  );
}

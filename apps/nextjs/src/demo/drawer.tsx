import { Button } from "@/components/ui/button";
import * as Drawer from "@/components/ui/drawer";

export default function App() {
  return (
    <Drawer.Root placement="right">
      <Drawer.Trigger asChild>
        <Button>開く</Button>
      </Drawer.Trigger>
      <Drawer.Backdrop />
      <Drawer.Positioner>
        <Drawer.Content>
          <Drawer.Header>
            <Drawer.Title>ドロワー</Drawer.Title>
            <Drawer.CloseTrigger asChild position="absolute" top="3" right="4">
              <Button variant="outline">閉じる</Button>
            </Drawer.CloseTrigger>
          </Drawer.Header>
          <Drawer.Body>
            <p>
              あなたは絶対けっしてその講義物というものの後へあれたでし。近頃一遍のお話者はもっともその話ですただけで出来てかねるでしょでも発展描けるないますから、ぴたりにもせよたでですう。
            </p>
          </Drawer.Body>
        </Drawer.Content>
      </Drawer.Positioner>
    </Drawer.Root>
  );
}

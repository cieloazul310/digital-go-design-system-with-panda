import { Drawer } from "@/components/ui/drawer";
import {
  HamburgerMenuButton,
  HamburgerIcon,
  CloseIcon,
} from "@/components/ui/hamburger-menu-button";

export default function App() {
  return (
    <Drawer.Root swipeDirection="end">
      <Drawer.Trigger asChild>
        <HamburgerMenuButton>
          <HamburgerIcon />
          メニュー
        </HamburgerMenuButton>
      </Drawer.Trigger>
      <Drawer.Backdrop />
      <Drawer.Positioner>
        <Drawer.Content>
          <Drawer.Header>
            <Drawer.Title>ドロワー</Drawer.Title>
            <Drawer.CloseTrigger asChild position="absolute" top="3" right="4">
              <HamburgerMenuButton>
                <CloseIcon />
                閉じる
              </HamburgerMenuButton>
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

import { Flex } from "styled-system/jsx";
import {
  HamburgerMenuButton,
  HamburgerIcon,
  CloseIcon,
} from "@/components/ui/hamburger-menu-button";

export default function App() {
  return (
    <Flex flexDirection="row" gap={4}>
      <HamburgerMenuButton>
        <HamburgerIcon />
        メニュー
      </HamburgerMenuButton>
      <HamburgerMenuButton>
        <CloseIcon />
        閉じる
      </HamburgerMenuButton>
    </Flex>
  );
}

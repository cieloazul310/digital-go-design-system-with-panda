import { css } from "styled-system/css";
import { Flex } from "styled-system/jsx";
import {
  HamburgerMenuButton,
  HamburgerWithLabelIcon,
  CloseWithLabelIcon,
} from "@/components/ui/hamburger-menu-button";

export default function App() {
  const mobile = css({
    p: 1,
    _hover: {
      outlineStyle: "solid",
      outlineWidth: "1px",
      outlineColor: "black",
    },
  });

  return (
    <Flex flexDirection="row" gap={4}>
      <HamburgerMenuButton className={mobile}>
        <HamburgerWithLabelIcon />
      </HamburgerMenuButton>
      <HamburgerMenuButton className={mobile}>
        <CloseWithLabelIcon />
      </HamburgerMenuButton>
      <HamburgerMenuButton className={mobile}>
        <HamburgerWithLabelIcon isEnglish />
      </HamburgerMenuButton>
      <HamburgerMenuButton className={mobile}>
        <CloseWithLabelIcon isEnglish />
      </HamburgerMenuButton>
    </Flex>
  );
}

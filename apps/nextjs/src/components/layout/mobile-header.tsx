import { css } from "@cieloazul310/styled-system/css";
import * as Drawer from "@cieloazul310/digital-go-pandacss/drawer";
import {
  HamburgerMenuButton,
  HamburgerIcon,
  CloseIcon,
} from "@cieloazul310/digital-go-pandacss/hamburger-menu-button";
import Menu from "./menu";

type MobileHeaderProps = {
  slug?: string[];
};

export default function MobileHeader({ slug }: MobileHeaderProps) {
  return (
    <header
      className={css({
        /**
         * fixed top-0 z-10 w-full bg-white/85 lg:hidden
         */
        position: "fixed",
        top: 0,
        zIndex: 10,
        width: "full",
        height: "mobile-header-height",
        bg: "white/85",
        display: { base: "block", lg: "none" },
      })}
    >
      <div
        className={css({
          /**
           * mx-auto flex w-full max-w-screen-1440 items-center justify-between
           * px-4 py-2.5 md:px-8
           */
          mx: "auto",
          display: "flex",
          width: "full",
          maxWidth: "90em",
          alignItems: "center",
          justifyContent: "space-between",
          px: { base: 4, md: 8 },
          py: 2.5,
        })}
      >
        <h1
          className={css({
            /**
             * w-40 lg:w-48 rounded-4 text-std-16B-170 lg:text-std-20B-150 leading-150
             * lg:mr-2 block
             */
            display: "block",
            width: 48,
            textStyle: { base: "std-16B-170", lg: "std-20B-150" },
            rounded: 4,
            mr: { base: 0, lg: 2 },
            lineHeight: 150,
          })}
        >
          デジタル庁デザインシステムβ版 for Panda CSS
        </h1>
        <Drawer.Root placement="right">
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
                <Drawer.CloseTrigger
                  asChild
                  position="absolute"
                  top="5"
                  right="4"
                >
                  <HamburgerMenuButton>
                    <CloseIcon />
                    閉じる
                  </HamburgerMenuButton>
                </Drawer.CloseTrigger>
              </Drawer.Header>
              <Drawer.Body>
                <Menu slug={slug} />
              </Drawer.Body>
            </Drawer.Content>
          </Drawer.Positioner>
        </Drawer.Root>
      </div>
    </header>
  );
}

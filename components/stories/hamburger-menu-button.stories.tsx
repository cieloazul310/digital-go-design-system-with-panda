/**
 * source:
 * https://github.com/digital-go-jp/design-system-example-components/blob/main/src/components/HamburgerMenuButton/HamburgerMenuButton.stories.tsx
 */
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { useId, useState } from "react";
import { css } from "styled-system/css";
import {
  HamburgerMenuButton,
  CloseIcon,
  CloseWithLabelIcon,
  HamburgerIcon,
  HamburgerWithLabelIcon,
} from "../src/hamburger-menu-button";

const meta = {
  id: "Component/DADS v2/HamburgerMenuButton",
  title: "Components/ハンバーガーメニューボタン",
  component: HamburgerMenuButton,
  tags: ["autodocs"],
} satisfies Meta<typeof HamburgerMenuButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DesktopAndMobileCommon: Story = {
  render: () => {
    const sampleId = useId();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
      <div
        className={css({
          m: 4,
          display: "flex",
          flexDirection: "column",
          gap: 2,
        })}
      >
        <HamburgerMenuButton
          aria-controls={`${sampleId}-menu`}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <>
              <CloseIcon className="flex-none" />
              閉じる
            </>
          ) : (
            <>
              <HamburgerIcon className="flex-none" />
              メニュー
            </>
          )}
        </HamburgerMenuButton>
        {isMenuOpen && (
          <div
            className={css({
              /**
               * h-40 w-44 border border-solid-gray-420 p-4
               */
              height: 40,
              width: 44,
              borderWidth: "1px",
              borderColor: "solid-gray.420",
              p: 4,
            })}
            id={`${sampleId}-menu`}
          >
            サンプルメニュー
          </div>
        )}
      </div>
    );
  },
};

export const MobileOnly: Story = {
  decorators: [
    (Story) => (
      <>
        <div
          className={css({
            /**
             * p-4
             */
            p: 4,
          })}
        >
          <h2
            className={css({
              /**
               * mb-8 text-std-32B-150
               */
              mb: 8,
              textStyle: "std-32B-150",
            })}
          >
            モバイル条件付きコンポーネント
          </h2>
          <Story />
          <p
            className={css({
              /**
               * mt-8 mb-4
               */
              mt: 8,
              mb: 4,
            })}
          >
            モバイルデバイスでの表示時にヘッダーの領域が限定され、十分な領域が確保できない場合に限り、アイコンにラベルが内包された
            <code>HamburgerWithLabelIcon</code>
            によるモバイル条件付きコンポーネントを使用します。
          </p>
          <p
            className={css({
              /**
               * my-4
               */
              my: 4,
            })}
          >
            それ以外の場合は、原則として、<code>HamburgerIcon</code>
            とテキストラベルの組み合わせから成るデスクトップ・モバイル共通コンポーネントを使用してください。
          </p>
        </div>
      </>
    ),
  ],
  render: () => {
    const sampleJaId = useId();
    const sampleEnId = useId();
    const [isMenuJaOpen, setIsMenuJaOpen] = useState(false);
    const [isMenuEnOpen, setIsMenuEnOpen] = useState(false);
    return (
      <>
        <div
          className={css({
            /**
             * m-4 flex gap-36
             */
            m: 4,
            display: "flex",
            gap: 36,
          })}
        >
          <div
            className={css({
              /**
               * relative
               */
              position: "relative",
            })}
          >
            <HamburgerMenuButton
              className={css({
                p: 1,
                /**
                 * hover:outline hover:outline-black
                 */
                _hover: {
                  outlineStyle: "solid",
                  outlineWidth: "1px",
                  outlineColor: "black",
                },
              })}
              aria-controls={`${sampleJaId}-menu`}
              aria-expanded={isMenuJaOpen}
              onClick={() => setIsMenuJaOpen(!isMenuJaOpen)}
            >
              {isMenuJaOpen ? (
                <CloseWithLabelIcon />
              ) : (
                <HamburgerWithLabelIcon />
              )}
            </HamburgerMenuButton>
            {isMenuJaOpen && (
              <div
                className={css({
                  /**
                   * absolute h-40 w-44 border border-solid-gray-420 p-4 bg-white
                   */
                  position: "absolute",
                  height: 40,
                  width: 44,
                  borderWidth: "1px",
                  borderColor: "solid-gray.420",
                  p: 4,
                  bg: "white",
                })}
                id={`${sampleJaId}-menu`}
              >
                サンプルメニュー
              </div>
            )}
          </div>
          <div className="relative">
            <HamburgerMenuButton
              className={css({
                p: 1,
                /**
                 * hover:outline hover:outline-black
                 */
                _hover: {
                  outlineStyle: "solid",
                  outlineWidth: "1px",
                  outlineColor: "black",
                },
              })}
              aria-controls={`${sampleEnId}-menu`}
              aria-expanded={isMenuEnOpen}
              onClick={() => setIsMenuEnOpen(!isMenuEnOpen)}
            >
              {isMenuEnOpen ? (
                <CloseWithLabelIcon isEnglish />
              ) : (
                <HamburgerWithLabelIcon isEnglish />
              )}
            </HamburgerMenuButton>
            {isMenuEnOpen && (
              <div
                className={css({
                  /**
                   * absolute h-40 w-44 border border-solid-gray-420 p-4 bg-white
                   */
                  position: "absolute",
                  height: 40,
                  width: 44,
                  borderWidth: "1px",
                  borderColor: "solid-gray.420",
                  p: 4,
                  bg: "white",
                })}
                id={`${sampleEnId}-menu`}
              >
                Sample menu
              </div>
            )}
          </div>
        </div>
      </>
    );
  },
};

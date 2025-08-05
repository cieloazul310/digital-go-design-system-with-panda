import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { css } from "styled-system/css";
import { Square } from "styled-system/jsx";
import { colorPalette } from "../utils/color-palette";

const meta = {
  title: "Token/カラー",
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

const colors = colorPalette.options;

export const Palettes: Story = {
  render: () => (
    <div className={css({ display: "flex", flexDirection: "column", gap: 8 })}>
      {colors.map((value) => (
        <div
          className={css({
            display: "flex",
            flexDirection: "column",
            gap: 2,
            maxWidth: "full",
          })}
          key={value}
        >
          <h2 className={css({ textStyle: "std-24B-150" })}>{value}</h2>
          <div
            className={css({
              maxWidth: "full",
              overflowX: "auto",
              colorPalette: value,
            })}
          >
            <div
              className={css({ display: "flex", gap: 2, width: "fit-content" })}
            >
              <Square
                size={40}
                bg={{
                  base: "colorPalette.primary",
                  _hover: "colorPalette.primary.100",
                  _active: "colorPalette.primary.200",
                }}
                color="white"
              >
                <span>Primary</span>
              </Square>
              <Square size={40} bg="colorPalette.secondary" color="white">
                <span>Secondary</span>
              </Square>
              <Square size={40} bg="colorPalette.tertiary" color="white">
                <span>Tertiary</span>
              </Square>
              <Square
                size={40}
                bg={{ base: "colorPalette.bg", _hover: "colorPalette.100" }}
                color="colorPalette.primary"
              >
                <span>Bg</span>
              </Square>
            </div>
          </div>
        </div>
      ))}
    </div>
  ),
};

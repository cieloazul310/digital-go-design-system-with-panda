import { withThemeByClassName } from "@storybook/addon-themes";
import type { Preview, ReactRenderer } from "@storybook/nextjs-vite";
import { Noto_Sans_JP, Noto_Sans_Mono } from "next/font/google";
import { css, cx } from "@cieloazul310/styled-system/css";
import "./index.css";

const notoSansJp = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-noto-sans-jp",
});

const notoSansMono = Noto_Sans_Mono({
  subsets: ["latin"],
  variable: "--font-noto-sans-mono",
});

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    withThemeByClassName<ReactRenderer>({
      themes: {
        light: "",
        dark: "dark",
      },
      defaultTheme: "light",
    }),
    (Story) => (
      <div
        className={cx(
          notoSansJp.variable,
          notoSansMono.variable,
          css({ textStyle: { base: "std-18N-160", md: "std-20N-150" } }),
        )}
      >
        <Story />
      </div>
    ),
  ],
};

export default preview;

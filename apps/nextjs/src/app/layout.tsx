import type { PropsWithChildren } from "react";
import type { Metadata } from "next";
import { notoSansJp, notoSansMono } from "@/styles/fonts";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "デジタル庁デザインシステムβ版 for Panda CSS",
  description:
    "デジタル庁デザインシステムβ版をArk UI + Panda CSSで実装するプロジェクト",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="ja">
      <body className={`${notoSansJp.variable} ${notoSansMono.variable}`}>
        {children}
      </body>
    </html>
  );
}

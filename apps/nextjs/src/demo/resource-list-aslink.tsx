import { css } from "styled-system/css";
import * as ResourceList from "@/components/ui/resource-list";
import { Link } from "@/components/link";

const data = [
  {
    title: "はじめに",
    description:
      "本ウェブサイトの概要と、デザインシステムの一般的な概念について知ることができます",
    href: "https://design.digital.go.jp/introduction/",
  },
  {
    title: "ガイダンス",
    description:
      "デジタル庁デザインシステムの特徴を把握し、デザインプロジェクトにどのように導入できるかを知りましょう",
    href: "https://design.digital.go.jp/guidance/",
  },
  {
    title: "基本デザイン",
    description:
      "デザイン全体を形作るために必要な基本デザインの紹介とそのガイドラインです",
    href: "https://design.digital.go.jp/foundations/",
  },
  {
    title: "コンポーネント",
    description:
      "ボタンやリスト等、画面を構成する情報は、様々なUIコンポーネントの形で利用者に情報の意味と操作方法を伝えます",
    href: "https://design.digital.go.jp/components/",
  },
  {
    title: "リソース",
    description: "デジタル庁デザインシステムに付随する資料やデータ等です",
    href: "https://design.digital.go.jp/resources/",
  },
];

export default function App() {
  return (
    <nav
      className={css({
        display: "grid",
        gridTemplateColumns: { base: "1fr", md: "repeat(2, 1fr)" },
        gridAutoRows: "auto",
        gap: 8,
      })}
    >
      {data.map(({ title, description, href }) => (
        <ResourceList.Root
          borderWidth="1px"
          borderColor="solid-gray.420"
          key={title}
          asLink
        >
          <ResourceList.Main py={8} textStyle="std-17N-170">
            <ResourceList.Content gap={4}>
              <ResourceList.Title asChild>
                <Link href={href}>{title}</Link>
              </ResourceList.Title>
              <p>{description}</p>
            </ResourceList.Content>
          </ResourceList.Main>
        </ResourceList.Root>
      ))}
    </nav>
  );
}

export type PostGroup = {
  id: string;
  title: string;
  href: string;
  description: string;
};

export const postGroups: PostGroup[] = [
  {
    title: "基本デザイン",
    href: "/foundations",
    id: "foundations",
    description:
      "基本デザインは、サービスに独自の外観と雰囲気を与える視覚的特徴を作ります。サービスで使用するスタイルガイドを作るため、サービスのニーズを考慮してスタイルを選択、また変更します。",
  },
  {
    title: "コンポーネント",
    href: "/components",
    id: "components",
    description:
      "コンポーネントは、ユーザーインタフェースを作成するためのデザイン構成要素です。",
  },
];

export type PostGroup = {
  id: string;
  title: string;
  href: string;
  description?: string;
};

export const postGroups: PostGroup[] = [
  {
    title: "ガイダンス",
    href: "/guidance",
    id: "guidance",
  },
  {
    title: "コンポーネント",
    href: "/components",
    id: "components",
    description:
      "コンポーネントは、ユーザーインタフェースを作成するためのデザイン構成要素です。",
  },
];

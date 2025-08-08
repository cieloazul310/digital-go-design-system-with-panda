import { css } from "styled-system/css";
import { Divider } from "@/components/ui";

export default function App() {
  const paragraph = css({ my: 4 });

  return (
    <>
      <p className={paragraph}>
        デジタル庁デザインシステムは、スタイリングの考え方を提供するデザイン言語、情報の視覚表現とインタラクションを具現化するUIコンポーネント、ユーザビリティとアクセシビリティを踏まえた設計や実装のためのガイドラインから構成されるデザインアセットです。
      </p>
      <Divider my={16} />
      <p className={paragraph}>
        デジタル庁のミッションである「誰一人取り残されない、人に優しいデジタル化を。」の実現に寄与することを標榜し、官公庁や地方自治体などの行政機関や公共性の高い組織等のウェブサイト/ウェブアプリケーション/オンラインサービスまたはシステム等で利用することを念頭に置いて構築されています。
      </p>
    </>
  );
}

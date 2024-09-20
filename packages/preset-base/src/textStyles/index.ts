import { defineTextStyles } from "@pandacss/dev";

const textStylesMap = {
  dsp: {
    fontFamily: "body",
    description:
      "Displayテキストは、主に冒頭で大きく掲出されるテキストやメッセージを伝えるヘッドコピーなど、視覚的なインパクトを強く与えたい場合に使用されます。",
    variants: [
      {
        fontSize: 64,
        fontWeight: "N",
        lineHeight: 4,
      },
      {
        fontSize: 57,
        fontWeight: "N",
        lineHeight: 4,
      },
      {
        fontSize: 48,
        fontWeight: "N",
        lineHeight: 4,
      },
    ],
  },
  std: {
    fontFamily: "body",
    description:
      "Standardテキストは、ページの文書構造を形成する見出しや本文など、多くの要素において最も使用される普遍的なテキストスタイルです。",
    variants: [
      {
        fontSize: 45,
        fontWeight: "B",
        lineHeight: 4,
      },
      {
        fontSize: 36,
        fontWeight: "B",
        lineHeight: 4,
      },
      {
        fontSize: 32,
        fontWeight: "B",
        lineHeight: 5,
      },
      {
        fontSize: 28,
        fontWeight: "B",
        lineHeight: 5,
      },
      {
        fontSize: 24,
        fontWeight: "B",
        lineHeight: 5,
      },
      {
        fontSize: 22,
        fontWeight: "B",
        lineHeight: 5,
      },
      {
        fontSize: 20,
        fontWeight: "B",
        lineHeight: 5,
      },
      {
        fontSize: 18,
        fontWeight: "B",
        lineHeight: 6,
      },
      {
        fontSize: 17,
        fontWeight: "B",
        lineHeight: 7,
      },
      {
        fontSize: 16,
        fontWeight: "B",
        lineHeight: 7,
      },
      {
        fontSize: 32,
        fontWeight: "M",
        lineHeight: 5,
      },
      {
        fontSize: 28,
        fontWeight: "M",
        lineHeight: 5,
      },
      {
        fontSize: 24,
        fontWeight: "M",
        lineHeight: 5,
      },
      {
        fontSize: 20,
        fontWeight: "M",
        lineHeight: 5,
      },
      {
        fontSize: 17,
        fontWeight: "M",
        lineHeight: 7,
      },
      {
        fontSize: 16,
        fontWeight: "M",
        lineHeight: 7,
      },
      {
        fontSize: 45,
        fontWeight: "N",
        lineHeight: 4,
      },
      {
        fontSize: 36,
        fontWeight: "N",
        lineHeight: 4,
      },
      {
        fontSize: 32,
        fontWeight: "N",
        lineHeight: 5,
      },
      {
        fontSize: 28,
        fontWeight: "N",
        lineHeight: 5,
      },
      {
        fontSize: 26,
        fontWeight: "N",
        lineHeight: 5,
      },
      {
        fontSize: 24,
        fontWeight: "N",
        lineHeight: 5,
      },
      {
        fontSize: 22,
        fontWeight: "N",
        lineHeight: 5,
      },
      {
        fontSize: 20,
        fontWeight: "N",
        lineHeight: 5,
      },
      {
        fontSize: 18,
        fontWeight: "N",
        lineHeight: 6,
      },
      {
        fontSize: 17,
        fontWeight: "N",
        lineHeight: 7,
      },
      {
        fontSize: 16,
        fontWeight: "N",
        lineHeight: 7,
      },
    ],
  },
  dns: {
    fontFamily: "body",
    description:
      "Denseテキストは管理画面や業務システムなど、限られた画面領域での表示情報量を優先したテキストスタイルです。たとえば、データテーブル内での情報提示など、表示領域に制約がある場合のテキストスタイルとして使用します。",
    variants: [
      {
        fontSize: 17,
        fontWeight: "B",
        lineHeight: 3,
      },
      {
        fontSize: 17,
        fontWeight: "N",
        lineHeight: 3,
      },
      {
        fontSize: 17,
        fontWeight: "B",
        lineHeight: 2,
      },
      {
        fontSize: 17,
        fontWeight: "N",
        lineHeight: 2,
      },
      {
        fontSize: 16,
        fontWeight: "B",
        lineHeight: 3,
      },
      {
        fontSize: 16,
        fontWeight: "N",
        lineHeight: 3,
      },
      {
        fontSize: 16,
        fontWeight: "B",
        lineHeight: 2,
      },
      {
        fontSize: 17,
        fontWeight: "N",
        lineHeight: 2,
      },
      {
        fontSize: 14,
        fontWeight: "B",
        lineHeight: 3,
      },
      {
        fontSize: 14,
        fontWeight: "N",
        lineHeight: 3,
      },
      {
        fontSize: 14,
        fontWeight: "B",
        lineHeight: 2,
      },
      {
        fontSize: 17,
        fontWeight: "N",
        lineHeight: 2,
      },
    ],
  },
  oln: {
    fontFamily: "body",
    description:
      "Onelineテキストは1行展開を前提として、主にUI要素への適用を想定したテキストスタイルです。行間の余白を最小限にすることでUIパーツに対するデザイン、及びコーディング実装調整コストの軽減を優先したデキストスタイルとなります。",
    variants: [
      {
        fontSize: 17,
        fontWeight: "B",
        lineHeight: 1,
      },
      {
        fontSize: 17,
        fontWeight: "M",
        lineHeight: 1,
      },
      {
        fontSize: 17,
        fontWeight: "N",
        lineHeight: 1,
      },
      {
        fontSize: 16,
        fontWeight: "B",
        lineHeight: 1,
      },
      {
        fontSize: 16,
        fontWeight: "M",
        lineHeight: 1,
      },
      {
        fontSize: 16,
        fontWeight: "N",
        lineHeight: 1,
      },
      {
        fontSize: 14,
        fontWeight: "B",
        lineHeight: 1,
      },
      {
        fontSize: 14,
        fontWeight: "M",
        lineHeight: 1,
      },
      {
        fontSize: 14,
        fontWeight: "N",
        lineHeight: 1,
      },
    ],
  },
  mono: {
    fontFamily: "mono",
    description:
      "Monoテキストはコード系コンテンツへの適用を想定したテキストスタイルです。文字・単語レベルの可読性を優先したモノスペース（等幅フォント）を使用します。",
    variants: [
      {
        fontSize: 17,
        fontWeight: "B",
        lineHeight: 5,
      },
      {
        fontSize: 17,
        fontWeight: "N",
        lineHeight: 5,
      },
      {
        fontSize: 16,
        fontWeight: "B",
        lineHeight: 5,
      },
      {
        fontSize: 16,
        fontWeight: "N",
        lineHeight: 5,
      },
      {
        fontSize: 14,
        fontWeight: "B",
        lineHeight: 5,
      },
      {
        fontSize: 14,
        fontWeight: "N",
        lineHeight: 5,
      },
    ],
  },
};

const textStyle = Object.entries(textStylesMap);
const map = new Map<
  string,
  {
    value: {
      fontFamily: string;
      fontSize: number;
      fontWeight: string;
      lineHeight: number;
    };
    description: string;
  }
>();

textStyle.forEach(([key, { fontFamily, description, variants }]) => {
  variants.forEach(({ fontSize, fontWeight, lineHeight }) => {
    map.set(`${key}-${fontSize}${fontWeight}-${lineHeight}`, {
      value: {
        fontFamily,
        fontSize,
        fontWeight,
        lineHeight,
      },
      description,
    });
  });
});

export default defineTextStyles(Object.fromEntries(map));

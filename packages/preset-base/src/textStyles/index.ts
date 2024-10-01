import { defineTextStyles } from "@pandacss/dev";

type TextStylesMap = Record<
  string,
  {
    fontFamily: string;
    description: string;
    variants: {
      fontSize: number;
      fontWeight: string;
      lineHeight: number;
      letterSpacing?: number;
    }[];
  }
>;

const textStylesMap: TextStylesMap = {
  dsp: {
    fontFamily: "body",
    description:
      "Displayテキストは、主に冒頭で大きく掲出されるテキストやメッセージを伝えるヘッドコピーなど、視覚的なインパクトを強く与えたい場合に使用されます。",
    variants: [
      {
        fontSize: 64,
        fontWeight: "N",
        lineHeight: 140,
      },
      {
        fontSize: 57,
        fontWeight: "N",
        lineHeight: 140,
      },
      {
        fontSize: 48,
        fontWeight: "N",
        lineHeight: 140,
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
        lineHeight: 140,
      },
      {
        fontSize: 36,
        fontWeight: "B",
        lineHeight: 140,
        letterSpacing: 0.01,
      },
      {
        fontSize: 32,
        fontWeight: "B",
        lineHeight: 150,
        letterSpacing: 0.01,
      },
      {
        fontSize: 28,
        fontWeight: "B",
        lineHeight: 150,
        letterSpacing: 0.01,
      },
      {
        fontSize: 24,
        fontWeight: "B",
        lineHeight: 150,
        letterSpacing: 0.02,
      },
      {
        fontSize: 22,
        fontWeight: "B",
        lineHeight: 150,
        letterSpacing: 0.02,
      },
      {
        fontSize: 20,
        fontWeight: "B",
        lineHeight: 150,
        letterSpacing: 0.02,
      },
      {
        fontSize: 18,
        fontWeight: "B",
        lineHeight: 160,
        letterSpacing: 0.02,
      },
      {
        fontSize: 17,
        fontWeight: "B",
        lineHeight: 170,
        letterSpacing: 0.02,
      },
      {
        fontSize: 16,
        fontWeight: "B",
        lineHeight: 170,
        letterSpacing: 0.02,
      },
      {
        fontSize: 16,
        fontWeight: "B",
        lineHeight: 175,
        letterSpacing: 0.02,
      },
      {
        fontSize: 45,
        fontWeight: "N",
        lineHeight: 140,
      },
      {
        fontSize: 36,
        fontWeight: "N",
        lineHeight: 140,
        letterSpacing: 0.01,
      },
      {
        fontSize: 32,
        fontWeight: "N",
        lineHeight: 150,
        letterSpacing: 0.01,
      },
      {
        fontSize: 28,
        fontWeight: "N",
        lineHeight: 150,
        letterSpacing: 0.01,
      },
      {
        fontSize: 26,
        fontWeight: "N",
        lineHeight: 150,
        letterSpacing: 0.02,
      },
      {
        fontSize: 24,
        fontWeight: "N",
        lineHeight: 150,
        letterSpacing: 0.02,
      },
      {
        fontSize: 22,
        fontWeight: "N",
        lineHeight: 150,
        letterSpacing: 0.02,
      },
      {
        fontSize: 20,
        fontWeight: "N",
        lineHeight: 150,
        letterSpacing: 0.02,
      },
      {
        fontSize: 18,
        fontWeight: "N",
        lineHeight: 160,
        letterSpacing: 0.02,
      },
      {
        fontSize: 17,
        fontWeight: "N",
        lineHeight: 170,
        letterSpacing: 0.02,
      },
      {
        fontSize: 16,
        fontWeight: "N",
        lineHeight: 170,
        letterSpacing: 0.02,
      },
      {
        fontSize: 16,
        fontWeight: "N",
        lineHeight: 175,
        letterSpacing: 0.02,
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
        lineHeight: 130,
      },
      {
        fontSize: 17,
        fontWeight: "N",
        lineHeight: 130,
      },
      {
        fontSize: 17,
        fontWeight: "B",
        lineHeight: 120,
      },
      {
        fontSize: 17,
        fontWeight: "N",
        lineHeight: 120,
      },
      {
        fontSize: 16,
        fontWeight: "B",
        lineHeight: 130,
      },
      {
        fontSize: 16,
        fontWeight: "N",
        lineHeight: 130,
      },
      {
        fontSize: 16,
        fontWeight: "B",
        lineHeight: 120,
      },
      {
        fontSize: 17,
        fontWeight: "N",
        lineHeight: 120,
      },
      {
        fontSize: 14,
        fontWeight: "B",
        lineHeight: 130,
      },
      {
        fontSize: 14,
        fontWeight: "N",
        lineHeight: 130,
      },
      {
        fontSize: 14,
        fontWeight: "B",
        lineHeight: 120,
      },
      {
        fontSize: 17,
        fontWeight: "N",
        lineHeight: 120,
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
        lineHeight: 100,
      },
      {
        fontSize: 17,
        fontWeight: "M",
        lineHeight: 100,
      },
      {
        fontSize: 17,
        fontWeight: "N",
        lineHeight: 100,
      },
      {
        fontSize: 16,
        fontWeight: "B",
        lineHeight: 100,
      },
      {
        fontSize: 16,
        fontWeight: "M",
        lineHeight: 100,
      },
      {
        fontSize: 16,
        fontWeight: "N",
        lineHeight: 100,
      },
      {
        fontSize: 14,
        fontWeight: "B",
        lineHeight: 100,
      },
      {
        fontSize: 14,
        fontWeight: "M",
        lineHeight: 100,
      },
      {
        fontSize: 14,
        fontWeight: "N",
        lineHeight: 100,
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
        lineHeight: 150,
      },
      {
        fontSize: 17,
        fontWeight: "N",
        lineHeight: 150,
      },
      {
        fontSize: 16,
        fontWeight: "B",
        lineHeight: 150,
      },
      {
        fontSize: 16,
        fontWeight: "N",
        lineHeight: 150,
      },
      {
        fontSize: 14,
        fontWeight: "B",
        lineHeight: 150,
      },
      {
        fontSize: 14,
        fontWeight: "N",
        lineHeight: 150,
      },
    ],
  },
};

const textStyle = Object.entries(textStylesMap);
const map = new Map<
  string,
  {
    value: {
      deprecated?: boolean;
      fontFamily: string;
      fontSize: number;
      fontWeight: string;
      lineHeight: number;
      letterSpacing?: string;
    };
    description: string;
  }
>();

textStyle.forEach(([key, { fontFamily, description, variants }]) => {
  variants.forEach(({ fontSize, fontWeight, lineHeight, letterSpacing }) => {
    map.set(`${key}-${fontSize}${fontWeight}-${lineHeight}`, {
      value: {
        fontFamily,
        fontSize,
        fontWeight,
        lineHeight,
        letterSpacing: letterSpacing ? `${letterSpacing}em` : undefined,
      },
      description,
    });
  });
});

export default defineTextStyles(Object.fromEntries(map));

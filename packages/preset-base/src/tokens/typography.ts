import tokens from "@digital-go-jp/design-tokens";

export const fonts = {
  body: {
    value: [
      "Noto Sans JP",
      "-apple-system",
      "BlinkMacSystemFont",
      "sans-serif",
    ],
  },
  mono: {
    value: ["Noto Sans Mono", "monospace"],
  },
};

export const fontSizes = {
  "64": {
    value: tokens.FontSize[64].value,
    description: "視覚的なインパクトが必要なデザイン要素としての文字サイズ。",
  },
  "57": {
    value: tokens.FontSize[57].value,
    description: "視覚的なインパクトが必要なデザイン要素としての文字サイズ。",
  },
  "48": {
    value: tokens.FontSize[48].value,
    description: "視覚的なインパクトが必要なデザイン要素としての文字サイズ。",
  },
  "45": {
    value: tokens.FontSize[45].value,
    description:
      "読み物コンテンツ向けに多く使用される見出しや本文を構成する文字サイズ。なお、本文やUIにおいては16 CSS px以上が基準値となります。",
  },
  "36": {
    value: tokens.FontSize[36].value,
    description:
      "読み物コンテンツ向けに多く使用される見出しや本文を構成する文字サイズ。なお、本文やUIにおいては16 CSS px以上が基準値となります。",
  },
  "32": {
    value: tokens.FontSize[32].value,
    description:
      "読み物コンテンツ向けに多く使用される見出しや本文を構成する文字サイズ。なお、本文やUIにおいては16 CSS px以上が基準値となります。",
  },
  "28": {
    value: tokens.FontSize[28].value,
    description:
      "読み物コンテンツ向けに多く使用される見出しや本文を構成する文字サイズ。なお、本文やUIにおいては16 CSS px以上が基準値となります。",
  },
  "24": {
    value: tokens.FontSize[24].value,
    description:
      "読み物コンテンツ向けに多く使用される見出しや本文を構成する文字サイズ。なお、本文やUIにおいては16 CSS px以上が基準値となります。",
  },
  "22": {
    value: tokens.FontSize[22].value,
    description:
      "読み物コンテンツ向けに多く使用される見出しや本文を構成する文字サイズ。なお、本文やUIにおいては16 CSS px以上が基準値となります。",
  },
  "20": {
    value: tokens.FontSize[20].value,
    description:
      "読み物コンテンツ向けに多く使用される見出しや本文を構成する文字サイズ。なお、本文やUIにおいては16 CSS px以上が基準値となります。",
  },
  "18": {
    value: tokens.FontSize[18].value,
    description:
      "読み物コンテンツ向けに多く使用される見出しや本文を構成する文字サイズ。なお、本文やUIにおいては16 CSS px以上が基準値となります。",
  },
  "17": {
    value: tokens.FontSize[17].value,
    description:
      "読み物コンテンツ向けに多く使用される見出しや本文を構成する文字サイズ。なお、本文やUIにおいては16 CSS px以上が基準値となります。",
  },
  "16": {
    value: tokens.FontSize[16].value,
    description:
      "読み物コンテンツ向けに多く使用される見出しや本文を構成する文字サイズ。なお、本文やUIにおいては16 CSS px以上が基準値となります。",
  },
  "14": {
    value: tokens.FontSize[14].value,
    description:
      "基本的には使用しません。フッター要素などコンテンツに付随する情報や、UIやコンテンツを構成する際の領域的な制約がある場合のように標準的な文字サイズ（16 CSS px以上）の使用が難しいケースにおいてのみ使用される文字サイズです。なお、14 CSS px未満の大きさの使用は原則として許容されません。",
  },
};

export const fontWeights = {
  "400": { value: tokens.FontWeight[400].value },
  "500": { value: tokens.FontWeight[500].value },
  "700": { value: tokens.FontWeight[700].value },
};

export const lineHeights = {
  "100": {
    value: tokens.LineHeight["1_0"].value,
    description:
      "主にボタンなど、コンポーネント内で使用されるワンラインのテキストで上下の余白を持っていない行間",
  },
  "120": {
    value: tokens.LineHeight["1_2"].value,
    description:
      "主に管理画面や業務システムの画面等で、膨大な情報を一覧表示したりなど、限られた画面領域での表示情報量を最優先した行間",
  },
  "130": {
    value: tokens.LineHeight["1_3"].value,
    description:
      "主に管理画面や業務システムの画面等で使用する、表示情報量を優先した行間",
  },
  "140": {
    value: tokens.LineHeight["1_4"].value,
    description: "見出しなど、やや大きな文字に使用される行間",
  },
  "150": {
    value: tokens.LineHeight["1_5"].value,
    description:
      "一般的なウェブサイトの本文や見出しで使用される行間（本文の行間としては最低限度）",
  },
  "160": {
    value: tokens.LineHeight["1_6"].value,
    description: "一般的なウェブサイトの本文で使用される行間",
  },
  "170": {
    value: tokens.LineHeight["1_7"].value,
    description:
      "一般的なウェブサイトの本文で使用する、心理的負荷の軽減を考慮した行間",
  },
  "175": {
    value: tokens.LineHeight["1_75"].value,
    description:
      "一般的なウェブサイトの本文で使用する、心理的負荷の軽減を考慮した行間。採用するグリッド幅やフォントサイズに応じて170%と使い分ける",
  },
};

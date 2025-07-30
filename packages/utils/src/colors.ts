export type Palette =
  | "blue"
  | "light-blue"
  | "cyan"
  | "green"
  | "lime"
  | "yellow"
  | "orange"
  | "red"
  | "magenta"
  | "purple"
  | "neutral";

type ColorShades =
  | 50
  | 100
  | 200
  | 300
  | 400
  | 420
  | 500
  | 536
  | 600
  | 700
  | 800
  | 900
  | 1000
  | 1100
  | 1200;

const colorsMap: Record<
  Palette,
  Record<"primary" | "secondary" | "tertiary" | "bg", ColorShades>
> = {
  blue: {
    primary: 900,
    secondary: 700,
    tertiary: 1000,
    bg: 50,
  },
  green: {
    primary: 600,
    secondary: 800,
    tertiary: 1000,
    bg: 50,
  },
  "light-blue": {
    primary: 800,
    secondary: 600,
    tertiary: 1000,
    bg: 50,
  },
  cyan: {
    primary: 700,
    secondary: 600,
    tertiary: 1000,
    bg: 50,
  },
  orange: {
    primary: 600,
    secondary: 800,
    tertiary: 1100,
    bg: 50,
  },
  purple: {
    primary: 700,
    secondary: 600,
    tertiary: 1000,
    bg: 50,
  },
  lime: {
    primary: 600,
    secondary: 800,
    tertiary: 1000,
    bg: 50,
  },
  yellow: {
    primary: 600,
    secondary: 800,
    tertiary: 1000,
    bg: 50,
  },
  red: {
    primary: 600,
    secondary: 800,
    tertiary: 1000,
    bg: 50,
  },
  magenta: {
    primary: 600,
    secondary: 800,
    tertiary: 1000,
    bg: 50,
  },
  neutral: {
    primary: 900,
    secondary: 536,
    tertiary: 420,
    bg: 50,
  },
};

export function createKeyColor(palette: Palette) {
  const { primary, secondary, tertiary, bg } = colorsMap[palette];

  return {
    primary: {
      value: `{colors.${palette}.${primary}}`,
      description:
        "ウェブサイトのトーン＆マナーを確定するカラーです。サイト全体を通じて視覚的にブランドを伝える主要な要素（たとえば、ロゴタイプ、ヘッダーやグローバルナビゲーションの視覚表現）や、優先される動線や状況を示すUI（たとえば、CTAボタン、アクティブな状態表示等）に使用されます。プライマリーカラーには、主要な背景色とのコントラスト比が少なくとも4.5:1以上を維持できるカラーを選択する必要があります。",
    },
    secondary: {
      value: `{colors.${palette}.${secondary}}`,
      description:
        "セカンダリーカラーは、プライマリーカラーを補完して、あまり目立たなくていい副次的な動線や状況を示すUI（たとえば、選択肢を提供するボタン、機能や状態を表示するパーツ等）で使用します。プライマリーカラーと同じ色相で明度が高いまたは低いものを選択します。これにより、カラーの一貫性を保ちながら視覚的な対比、情報の階層、優先の順列等を反映したUIを作成する際に役立ちます。セカンダリーカラーを主要な背景色と隣接する表示要素に使用する場合は、主要な背景色とのコントラスト比が少なくとも3:1以上を維持できるカラーを選択する必要があります。なお、セカンダリーカラーをテキストのカラーとして使用する場合は、コントラスト比が少なくとも4.5:1以上でなければなりません。",
    },
    tertiary: {
      value: `{colors.${palette}.${tertiary}}`,
      description:
        "ターシャリーカラーは、セカンダリーカラーと反対の明度で設定します。プライマリーカラーと同色相で、明度高をセカンダリーカラーとした場合は明度低をターシャリーカラーに、明度低をセカンダリーカラーとした場合は明度高をターシャリーカラーとします。ターシャリーカラーを主要な背景色と隣接する表示要素に使用する場合は、主要な背景色とのコントラスト比が少なくとも3:1以上を維持できるカラーを選択する必要があります。なお、ターシャリーカラーをテキストのカラーとして使用する場合は、コントラスト比が少なくとも4.5:1以上でなければなりません。",
    },
    bg: {
      value: `{colors.${palette}.${bg}}`,
      description:
        "白または黒以外のバックグラウンドカラーは、ウェブサイトやアプリのさまざまなセクションや要素の背景に特別に選ばれるカラーです。テキストや非テキスト要素のカラーは、背景色とのコントラスト比を考慮して設定されていますが、通常、この時に想定している背景色は白または黒です。バックグラウンドカラーの上にテキストや非テキスト要素が配置される場合、そのままではコントラスト要件を満たさなくなる場合があります。バックグラウンドカラーに応じて、コントラスト比を調整してください。",
    },
    50: { value: `{colors.${palette}.50}` },
    100: { value: `{colors.${palette}.100}` },
    200: { value: `{colors.${palette}.200}` },
    300: { value: `{colors.${palette}.300}` },
    400: { value: `{colors.${palette}.400}` },
    500: { value: `{colors.${palette}.500}` },
    600: { value: `{colors.${palette}.600}` },
    700: { value: `{colors.${palette}.700}` },
    800: { value: `{colors.${palette}.800}` },
    900: { value: `{colors.${palette}.900}` },
    1000: { value: `{colors.${palette}.1000}` },
    1100: { value: `{colors.${palette}.1100}` },
    1200: { value: `{colors.${palette}.1200}` },
  };
}

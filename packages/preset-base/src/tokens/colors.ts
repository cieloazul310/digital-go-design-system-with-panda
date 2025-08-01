import { defineTokens } from "@pandacss/dev";
import tokens from "@digital-go-jp/design-tokens";
import type { ColorShades } from "@cieloazul310/digital-go-pandacss-utils";

// 共通のカラーマッピング関数
function mapColorScale(
  tokenObj: Record<string | number, { $value?: string }>,
  [primary, secondary, tertiary, bg]: [
    ColorShades,
    ColorShades,
    ColorShades,
    ColorShades,
  ],
) {
  const keyMap = {
    primary: {
      DEFAULT: { value: tokenObj[primary]?.$value as string },
      100: { value: tokenObj[Math.min(primary + 100, 1200)]?.$value as string },
      200: { value: tokenObj[Math.min(primary + 200, 1200)]?.$value as string },
      300: { value: tokenObj[Math.min(primary + 300, 1200)]?.$value as string },
    },
    secondary: { value: tokenObj[secondary]?.$value as string },
    tertiary: { value: tokenObj[tertiary]?.$value as string },
    bg: { value: tokenObj[bg]?.$value as string },
  };
  const shadesMap = Object.fromEntries(
    Object.entries(tokenObj)
      // eslint-disable-next-line
      .filter(([_, v]) => typeof v.$value === "string")
      .map(([k, v]) => [k, { value: v.$value as string }]),
  );
  return { ...keyMap, ...shadesMap };
}

const colors = defineTokens.colors({
  white: { value: tokens.Color.Neutral.White.$value },
  black: { value: tokens.Color.Neutral.Black.$value },
  blue: mapColorScale(tokens.Color.Primitive.Blue, [900, 700, 1000, 50]),
  "light-blue": mapColorScale(
    tokens.Color.Primitive.LightBlue,
    [800, 600, 1000, 50],
  ),
  cyan: mapColorScale(tokens.Color.Primitive.Cyan, [800, 600, 1000, 50]),
  green: mapColorScale(tokens.Color.Primitive.Green, [800, 600, 1000, 50]),
  lime: mapColorScale(tokens.Color.Primitive.Lime, [900, 700, 1000, 50]),
  yellow: mapColorScale(tokens.Color.Primitive.Yellow, [900, 700, 1000, 50]),
  orange: mapColorScale(tokens.Color.Primitive.Orange, [800, 600, 1100, 50]),
  red: mapColorScale(tokens.Color.Primitive.Red, [800, 600, 1000, 50]),
  magenta: mapColorScale(tokens.Color.Primitive.Magenta, [700, 500, 1000, 50]),
  purple: mapColorScale(tokens.Color.Primitive.Purple, [700, 500, 1000, 50]),
  "solid-gray": {
    50: { value: tokens.Color.Neutral.SolidGray[50].$value },
    100: { value: tokens.Color.Neutral.SolidGray[100].$value },
    200: { value: tokens.Color.Neutral.SolidGray[200].$value },
    300: { value: tokens.Color.Neutral.SolidGray[300].$value },
    400: { value: tokens.Color.Neutral.SolidGray[400].$value },
    420: { value: tokens.Color.Neutral.SolidGray[420].$value },
    500: { value: tokens.Color.Neutral.SolidGray[500].$value },
    536: { value: tokens.Color.Neutral.SolidGray[536].$value },
    600: { value: tokens.Color.Neutral.SolidGray[600].$value },
    700: { value: tokens.Color.Neutral.SolidGray[700].$value },
    800: { value: tokens.Color.Neutral.SolidGray[800].$value },
    900: { value: tokens.Color.Neutral.SolidGray[900].$value },
    primary: {
      DEFAULT: { value: tokens.Color.Neutral.SolidGray[700].$value },
      100: { value: tokens.Color.Neutral.SolidGray[800].$value },
      200: { value: tokens.Color.Neutral.SolidGray[900].$value },
      300: { value: tokens.Color.Neutral.Black.$value },
    },
    secondary: { value: tokens.Color.Neutral.SolidGray[536].$value },
    tertiary: { value: tokens.Color.Neutral.SolidGray[420].$value },
    bg: { value: tokens.Color.Neutral.SolidGray[50].$value },
  },
  success: {
    1: {
      value: tokens.Color.Semantic.Success[1].$value,
      description: "成功、安全、完了などを意味するカラー",
    },
    2: {
      value: tokens.Color.Semantic.Success[2].$value,
      description: "成功、安全、完了などを意味するカラー",
    },
  },
  error: {
    1: {
      value: tokens.Color.Semantic.Error[1].$value,
      description:
        "失敗やエラーのほか、危険情報や制約条件の提示など注意喚起を意味するカラー",
    },
    2: {
      value: tokens.Color.Semantic.Error[2].$value,
      description:
        "失敗やエラーのほか、危険情報や制約条件の提示など注意喚起を意味するカラー",
    },
  },
  warning: {
    yellow: {
      1: {
        value: tokens.Color.Semantic.Warning.Yellow[1].$value,
        description: "警告や禁止事項などを意味するカラー",
      },
      2: {
        value: tokens.Color.Semantic.Warning.Yellow[2].$value,
        description: "警告や禁止事項などを意味するカラー",
      },
    },
    orange: {
      1: {
        value: tokens.Color.Semantic.Warning.Orange[1].$value,
        description: "警告や禁止事項などを意味するカラー",
      },
      2: {
        value: tokens.Color.Semantic.Warning.Orange[2].$value,
        description: "警告や禁止事項などを意味するカラー",
      },
    },
  },
  focus: {
    yellow: { value: tokens.Color.Primitive.Yellow[700].$value },
    blue: { value: tokens.Color.Primitive.LightBlue[700].$value },
  },
});

export default colors;

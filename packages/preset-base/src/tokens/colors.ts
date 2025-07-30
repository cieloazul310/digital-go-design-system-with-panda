import { defineTokens } from "@pandacss/dev";
import tokens from "@digital-go-jp/design-tokens";

// 共通のカラーマッピング関数
function mapColorScale(tokenObj: Record<string | number, { $value?: string }>) {
  return Object.fromEntries(
    Object.entries(tokenObj)
      // eslint-disable-next-line
      .filter(([_, v]) => typeof v.$value === "string")
      .map(([k, v]) => [k, { value: v.$value as string }]),
  );
}

const colors = defineTokens.colors({
  white: { value: tokens.Color.Neutral.White.$value },
  black: { value: tokens.Color.Neutral.Black.$value },
  blue: mapColorScale(tokens.Color.Primitive.Blue),
  "light-blue": mapColorScale(tokens.Color.Primitive.LightBlue),
  cyan: mapColorScale(tokens.Color.Primitive.Cyan),
  green: mapColorScale(tokens.Color.Primitive.Green),
  lime: mapColorScale(tokens.Color.Primitive.Lime),
  yellow: mapColorScale(tokens.Color.Primitive.Yellow),
  orange: mapColorScale(tokens.Color.Primitive.Orange),
  red: mapColorScale(tokens.Color.Primitive.Red),
  magenta: mapColorScale(tokens.Color.Primitive.Magenta),
  purple: mapColorScale(tokens.Color.Primitive.Purple),
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

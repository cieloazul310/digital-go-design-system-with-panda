# デザイン庁デザインシステム + Ark UI + Panda CSS

デジタル庁デザインシステムをArk UI + Panda CSSで実装するためのリポジトリ。

Storybook  
<https://cieloazul310.github.io/digital-go-design-system-with-panda/>

Next.js Example  
<https://digital-go-design-system-with-panda.vercel.app/>

## 使い方

### 1. React + Panda CSS プロジェクトにプリセットをインストール

```sh
npm install @cieloazul310/digital-go-pandacss-preset
```

### 2. `panda.config`の設定

```diff
// panda.config.ts
import { defineConfig } from "@pandacss/dev";
+ import { createPreset } from "@cieloazul310/digital-go-pandacss-preset";

export default defineConfig({
  presets: [
+   createPreset("blue"),
  ],
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {},
  },
  jsxFramework: "react",

  // The output directory for your css system
  outdir: "styled-system",
});
```

### 3. コンポーネントをインストール

```sh
npx @cieloazul310/digital-go-pandacss-cli add
```

`src/components/ui`にコンポーネントを生成

### 4. コンポーネントを使う

```tsx
import { Button } from "@/components/ui/button";
import { css } from "styled-system/css";

export default function App() {
  return (
    <main
      className={css({
        maxWidth: "breakpoint-md",
        mx: "auto",
      })}
    >
      <Button variant="outline">Here we go, Digital Go!</Button>
    </main>
  );
}
```

## 構成

- `utils`: ユーティリティパッケージ
- `preset-base`: Tailwindテーマプラグインを基に作成したPandaプリセット
- `preset`: コンポーネントのレシピを内包したPandaプリセット

## コンポーネント

| 名称                          | recipe | React |
| ----------------------------- | :----- | :---- |
| ボタン v2                     | ✅     | ✅    |
| アコーディオン v2             | ✅     | ✅    |
| パンくずリスト v2             | ✅     | ✅    |
| チェックボックス v2           | ✅     | ✅    |
| ディバイダー v2               | ✅     | ✅    |
| ドロワー v2                   | ✅     | ✅    |
| 緊急時バナー                  | ✅     | ✅    |
| グローバルメニュー            | ❌     | ❌    |
| ハンバーガーメニューボタン v2 | ✅     | ✅    |
| ヘッダーコンテナ              | ❌     | ❌    |
| ランゲージセレクター          | ❌     | ❌    |
| メガメニュー                  | ❌     | ❌    |
| メニューリスト v2             | 🔨     | 🔨    |
| メニューリストボックス        | ❌     | ❌    |
| ノティフィケーションバナー v2 | ✅     | ✅    |
| プログレスインジケーター v2   | ✅     | ✅    |
| ラジオボタン v2               | ✅     | ✅    |
| リソースリスト v2             | ✅     | ✅    |
| セレクトボックス v2           | ✅     | ✅    |
| テーブル v2                   | ✅     | ✅    |
| テキストエリア v2             | ✅     | ✅    |
| インプットテキスト v2         | ✅     | ✅    |
| ユーティリティリンク v2       | ✅     | ✅    |
| ボトムナビゲーション          | ❌     | ❌    |
| モーダルダイアログ            | ❌     | ❌    |
| ページネーション              | ❌     | ❌    |
| スクロールトップボタン        | ❌     | ❌    |

## リンク

デジタル庁デザインシステムβ版  
<https://design.digital.go.jp/>

React サンプルコンポーネント (Tailwind)  
<https://github.com/digital-go-jp/design-system-example-components>

Tailwindテーマプラグイン  
<https://github.com/digital-go-jp/tailwind-theme-plugin>

Ark UI  
<https://ark-ui.com/>

Panda CSS  
<https://panda-css.com/>

Park UI  
<https://park-ui.com/>

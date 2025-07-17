# デザイン庁デザインシステム + Ark UI + Panda CSS

デジタル庁デザインシステムをArk UI + Panda CSSで実装するためのリポジトリ。

Storybook  
<https://cieloazul310.github.io/digital-go-design-system-with-panda/>

Next.js Example  
<https://digital-go-design-system-with-panda.vercel.app/>

## 使い方

### 1. React + Panda CSS プロジェクトにインストール

```sh
npm install @cieloazul310/digital-go-pandacss @cieloazul310/styled-system
```

### 2. `panda.config`の設定

```diff
// panda.config.ts
import { defineConfig } from "@pandacss/dev";
+ import { createPreset } from "@cieloazul310/digital-go-pandacss/preset";

export default defineConfig({
  presets: [
    "@pandacss/dev/presets",
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
+ importMap: "@cieloazul310/styled-system",
});
```

### 3. コンポーネントを使う

```tsx
import { Button } from "@cieloazul310/digital-go-pandacss/button";
import { css } from "@cieloazul310/styled-system/css";

export default function App() {
  return (
    <main
      className={css({
        maxWidth: "breakpoint-md",
        mx: "auto",
      })}
    >
      <Button variant="outline">
        Here we go, Digital Go!
      </Button>
    </main>
  );
}
```

## 構成

- `utils`: ユーティリティパッケージ
- `preset-base`: 基礎となるPandaプリセット
- `preset`: コンポーネントのレシピを内包したPandaプリセット
- `components`: Ark UIのコンポーネントをレシピでスタイリングしたReactコンポーネント
- `core`: `preset`と`components`を内包したコアパッケージ

## コンポーネント

| 名称                          | recipe           | React              |
| ----------------------------- | :--------------- | :----------------- |
| ボタン v2                     | ✅ `button`      | ✅ `<Button>`      |
| アコーディオン v2             | ✅ `accordion`   | ✅ `<Accordion>`   |
| ボトムナビゲーション          | ❌               | ❌                 |
| パンくずリスト v2             | ✅ `breadcrumb`  | ✅ `<Breadcrumb>`  |
| チェックボックス v2           | 🔨               | 🔨                 |
| モーダルダイアログ            | ❌               | ❌                 |
| ディバイダー v2               | ✅ `digitalGoDivider` |✅ `<Divider>`  |
| ドロワー v2                  | ✅ `drawer`        | ✅ `<Drawer>`     |
| 緊急時バナー                  | ❌               | ❌                 |
| グローバルメニュー            | ❌               | ❌                 |
| ハンバーガーメニューボタン v2 | ✅ `hamburgerMenuButton` | ✅ `<HamburgerMenuButton>` |
| ヘッダーコンテナ              | ❌               | ❌                 |
| ランゲージセレクター          | ❌               | ❌                 |
| メガメニュー                  | ❌               | ❌                 |
| メニューリスト v2            | 🔨 `menuList`      | 🔨 `<MenuList>`                |
| メニューリストボックス        | ❌               | ❌                 |
| ノティフィケーションバナー v2 | 🔨 `notificationBanner` | 🔨 `<NotificationBanner>` |
| ページネーション              | ❌               | ❌                 |
| プログレスインジケーター      | ❌               | ❌                 |
| ラジオボタン v2              | ✅ `radio-group` | ✅ `<RadioGroup>` |
| リソースリスト v2             | ✅ `resourceList` | ✅ `<ResourceList>` |
| スクロールトップボタン        | ❌               | ❌                 |
| セレクトボックス v2           | ✅ `select`      | ✅ `<Select>`      |
| テーブル v2                  | ✅ `table`      | ✅ `<Table>`      |
| テキストエリア v2             | ✅ `textarea`    | ✅ `<Textarea>`    |
| インプットテキスト v2         | ✅ `inputText`   | ✅ `<InputText>`   |
| ユーティリティリンク v2       | ✅ `utilityLink` | ✅ `<UtilityLink>` |

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

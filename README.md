# デザイン庁デザインシステム + Ark UI + Panda CSS

[![npm version](https://badge.fury.io/js/@cieloazul310%2Fdigital-go-pandacss-preset.svg)](https://badge.fury.io/js/@cieloazul310%2Fdigital-go-pandacss-preset)

デジタル庁デザインシステムをArk UI + Panda CSSで実装するためのリポジトリ。

Storybook  
<https://cieloazul310.github.io/digital-go-design-system-with-panda/>

Next.js Example  
<https://digital-go-design-system-with-panda.vercel.app/>

## 使い方

### 1. React + Panda CSS プロジェクトにプリセットをインストール

```sh
npm install --save-dev @cieloazul310/digital-go-pandacss-preset
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

#### すべてのコンポーネントを生成、アップデート

```sh
npx @cieloazul310/digital-go-pandacss-cli install --all
```

#### 個別のコンポーネントを生成、アップデート

```sh
npx @cieloazul310/digital-go-pandacss-cli install accordion button card
```

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
- `preset-base`: デジタル庁デザイントークンをPanda CSSに移植したPandaプラグイン
- `preset`: コンポーネントのレシピを内包したPandaプリセット

## コンポーネント

<!-- @catalog-start -->
| 名称 | className | Recipe | Storybook |
|------|---------|--------|-----------|
| アコーディオン | accordion | [Recipe](https://github.com/cieloazul310/digital-go-design-system-with-panda/blob/main/packages/preset/src/recipes/accordion.ts) | [Storybook](https://cieloazul310.github.io/digital-go-design-system-with-panda/?path=/docs/components-%E3%82%A2%E3%82%B3%E3%83%BC%E3%83%87%E3%82%A3%E3%82%AA%E3%83%B3--docs) |
| 引用ブロック | blockquote | [Recipe](https://github.com/cieloazul310/digital-go-design-system-with-panda/blob/main/packages/preset/src/recipes/blockquote.ts) | [Storybook](https://cieloazul310.github.io/digital-go-design-system-with-panda/?path=/docs/components-%E5%BC%95%E7%94%A8%E3%83%96%E3%83%AD%E3%83%83%E3%82%AF--docs) |
| パンくずリスト | breadcrumb | [Recipe](https://github.com/cieloazul310/digital-go-design-system-with-panda/blob/main/packages/preset/src/recipes/breadcrumb.ts) | [Storybook](https://cieloazul310.github.io/digital-go-design-system-with-panda/?path=/docs/components-%E3%83%91%E3%83%B3%E3%81%8F%E3%81%9A%E3%83%AA%E3%82%B9%E3%83%88--docs) |
| ボタン | button | [Recipe](https://github.com/cieloazul310/digital-go-design-system-with-panda/blob/main/packages/preset/src/recipes/button.ts) | [Storybook](https://cieloazul310.github.io/digital-go-design-system-with-panda/?path=/docs/components-%E3%83%9C%E3%82%BF%E3%83%B3--docs) |
| カード | card | [Recipe](https://github.com/cieloazul310/digital-go-design-system-with-panda/blob/main/packages/preset/src/recipes/card.ts) | [Storybook](https://cieloazul310.github.io/digital-go-design-system-with-panda/?path=/docs/components-%E3%82%AB%E3%83%BC%E3%83%89--docs) |
| チェックボックス | checkbox | [Recipe](https://github.com/cieloazul310/digital-go-design-system-with-panda/blob/main/packages/preset/src/recipes/checkbox.ts) | [Storybook](https://cieloazul310.github.io/digital-go-design-system-with-panda/?path=/docs/components-%E3%83%81%E3%82%A7%E3%83%83%E3%82%AF%E3%83%9C%E3%83%83%E3%82%AF%E3%82%B9-%E3%82%B0%E3%83%AB%E3%83%BC%E3%83%97--docs) |
| チップラベル | chip-label | [Recipe](https://github.com/cieloazul310/digital-go-design-system-with-panda/blob/main/packages/preset/src/recipes/chip-label.ts) | [Storybook](https://cieloazul310.github.io/digital-go-design-system-with-panda/?path=/docs/components-%E3%83%81%E3%83%83%E3%83%97%E3%83%A9%E3%83%99%E3%83%AB--docs) |
| チップタグ | chip-tag | [Recipe](https://github.com/cieloazul310/digital-go-design-system-with-panda/blob/main/packages/preset/src/recipes/chip-tag.ts) | [Storybook](https://cieloazul310.github.io/digital-go-design-system-with-panda/?path=/docs/components-チップタグ--docs) |
| 日付ピッカー／カレンダー | date-picker | [Recipe](https://github.com/cieloazul310/digital-go-design-system-with-panda/blob/main/packages/preset/src/recipes/date-picker.ts) | [Storybook](https://cieloazul310.github.io/digital-go-design-system-with-panda/?path=/docs/components-%E6%97%A5%E4%BB%98%E3%83%94%E3%83%83%E3%82%AB%E3%83%BC%EF%BC%8F%E3%82%AB%E3%83%AC%E3%83%B3%E3%83%80%E3%83%BC--docs) |
| 日付入力 | date-input | [Recipe](https://github.com/cieloazul310/digital-go-design-system-with-panda/blob/main/packages/preset/src/recipes/date-input.ts) | [Storybook](https://cieloazul310.github.io/digital-go-design-system-with-panda/?path=/docs/components-%E6%97%A5%E4%BB%98%E5%85%A5%E5%8A%9B--docs) |
| 説明リスト | description-list | [Recipe](https://github.com/cieloazul310/digital-go-design-system-with-panda/blob/main/packages/preset/src/recipes/description-list.ts) | [Storybook](https://cieloazul310.github.io/digital-go-design-system-with-panda/?path=/docs/components-%E8%AA%AC%E6%98%8E%E3%83%AA%E3%82%B9%E3%83%88--docs) |
| ディスクロージャー | disclosure | [Recipe](https://github.com/cieloazul310/digital-go-design-system-with-panda/blob/main/packages/preset/src/recipes/disclosure.ts) | [Storybook](https://cieloazul310.github.io/digital-go-design-system-with-panda/?path=/docs/components-%E3%83%87%E3%82%A3%E3%82%B9%E3%82%AF%E3%83%AD%E3%83%BC%E3%82%B8%E3%83%A3%E3%83%BC--docs) |
| ディバイダー | divider | [Recipe](https://github.com/cieloazul310/digital-go-design-system-with-panda/blob/main/packages/preset/src/recipes/divider.ts) | [Storybook](https://cieloazul310.github.io/digital-go-design-system-with-panda/?path=/docs/components-%E3%83%87%E3%82%A3%E3%83%90%E3%82%A4%E3%83%80%E3%83%BC--docs) |
| ドロワー | drawer | [Recipe](https://github.com/cieloazul310/digital-go-design-system-with-panda/blob/main/packages/preset/src/recipes/drawer.ts) | [Storybook](https://cieloazul310.github.io/digital-go-design-system-with-panda/?path=/story/components-%E3%83%89%E3%83%AD%E3%83%AF%E3%83%BC--basic) |
| 緊急時バナー | emergency-banner | [Recipe](https://github.com/cieloazul310/digital-go-design-system-with-panda/blob/main/packages/preset/src/recipes/emergency-banner.ts) | [Storybook](https://cieloazul310.github.io/digital-go-design-system-with-panda/?path=/docs/components-%E7%B7%8A%E6%80%A5%E6%99%82%E3%83%90%E3%83%8A%E3%83%BC--docs) |
| インプットテキスト | field | [Recipe](https://github.com/cieloazul310/digital-go-design-system-with-panda/blob/main/packages/preset/src/recipes/field.ts) | [Storybook](https://cieloazul310.github.io/digital-go-design-system-with-panda/?path=/docs/components-%E3%82%A4%E3%83%B3%E3%83%97%E3%83%83%E3%83%88%E3%83%86%E3%82%AD%E3%82%B9%E3%83%88--docs) |
| フィールドセット | fieldset | [Recipe](https://github.com/cieloazul310/digital-go-design-system-with-panda/blob/main/packages/preset/src/recipes/fieldset.ts) | [Storybook](http://localhost:6006/?path=/story/components-%E3%83%95%E3%82%A3%E3%83%BC%E3%83%AB%E3%83%89%E3%82%BB%E3%83%83%E3%83%88--basic) |
| フォームコントロール | form | [Recipe](https://github.com/cieloazul310/digital-go-design-system-with-panda/blob/main/packages/preset/src/recipes/form.ts) | [Storybook](https://cieloazul310.github.io/digital-go-design-system-with-panda/?path=/docs/components-%E3%83%95%E3%82%A9%E3%83%BC%E3%83%A0--docs) |
| ハンバーガーメニューボタン | hamburger-menu-button | [Recipe](https://github.com/cieloazul310/digital-go-design-system-with-panda/blob/main/packages/preset/src/recipes/hamburger-menu-button.ts) | [Storybook](https://cieloazul310.github.io/digital-go-design-system-with-panda/?path=/docs/component-dads-v2-hamburgermenubutton--docs) |
| リンク | link | [Recipe](https://github.com/cieloazul310/digital-go-design-system-with-panda/blob/main/packages/preset/src/recipes/link.ts) | [Storybook](https://cieloazul310.github.io/digital-go-design-system-with-panda/?path=/docs/components-%E3%83%AA%E3%83%B3%E3%82%AF--docs) |
| リスト | list | [Recipe](https://github.com/cieloazul310/digital-go-design-system-with-panda/blob/main/packages/preset/src/recipes/list.ts) | [Storybook](https://cieloazul310.github.io/digital-go-design-system-with-panda/?path=/story/components-%E3%83%AA%E3%82%B9%E3%83%88-ol--basic) |
| ノティフィケーションバナー | notification-banner | [Recipe](https://github.com/cieloazul310/digital-go-design-system-with-panda/blob/main/packages/preset/src/recipes/notification-banner.ts) | [Storybook](https://cieloazul310.github.io/digital-go-design-system-with-panda/?path=/docs/components-%E3%83%8E%E3%83%86%E3%82%A3%E3%83%95%E3%82%A3%E3%82%B1%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3%E3%83%90%E3%83%8A%E3%83%BC--docs) |
| プログレスインジケーター | progress | [Recipe](https://github.com/cieloazul310/digital-go-design-system-with-panda/blob/main/packages/preset/src/recipes/progress.ts) | [Storybook](https://cieloazul310.github.io/digital-go-design-system-with-panda/?path=/story/components-%E3%83%97%E3%83%AD%E3%82%B0%E3%83%AC%E3%82%B9%E3%82%A4%E3%83%B3%E3%82%B8%E3%82%B1%E3%83%BC%E3%82%BF%E3%83%BC--docs) |
| ラジオボタン | radio-group | [Recipe](https://github.com/cieloazul310/digital-go-design-system-with-panda/blob/main/packages/preset/src/recipes/radio-group.ts) | [Storybook](https://cieloazul310.github.io/digital-go-design-system-with-panda/?path=/docs/components-%E3%83%A9%E3%82%B8%E3%82%AA%E3%83%9C%E3%82%BF%E3%83%B3--docs) |
| リソースリスト | resource-list | [Recipe](https://github.com/cieloazul310/digital-go-design-system-with-panda/blob/main/packages/preset/src/recipes/resource-list.ts) | [Storybook](https://cieloazul310.github.io/digital-go-design-system-with-panda/?path=/docs/components-%E3%83%AA%E3%82%BD%E3%83%BC%E3%82%B9%E3%83%AA%E3%82%B9%E3%83%88--docs) |
| セレクトボックス | select | [Recipe](https://github.com/cieloazul310/digital-go-design-system-with-panda/blob/main/packages/preset/src/recipes/select.ts) | [Storybook](https://cieloazul310.github.io/digital-go-design-system-with-panda/?path=/docs/components-%E3%82%BB%E3%83%AC%E3%82%AF%E3%83%88%E3%83%9C%E3%83%83%E3%82%AF%E3%82%B9--docs) |
| ステップナビゲーション | step-navigation | [Recipe](https://github.com/cieloazul310/digital-go-design-system-with-panda/blob/main/packages/preset/src/recipes/step-navigation.ts) | [Storybook](https://cieloazul310.github.io/digital-go-design-system-with-panda/?path=/docs/components-%E3%82%B9%E3%83%86%E3%83%83%E3%83%97%E3%83%8A%E3%83%93%E3%82%B2%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3--docs) |
| テーブル／データテーブル | table | [Recipe](https://github.com/cieloazul310/digital-go-design-system-with-panda/blob/main/packages/preset/src/recipes/table.ts) | [Storybook](https://cieloazul310.github.io/digital-go-design-system-with-panda/?path=/docs/components-%E3%83%86%E3%83%BC%E3%83%96%E3%83%AB--docs) |
| タブ | tabs | [Recipe](https://github.com/cieloazul310/digital-go-design-system-with-panda/blob/main/packages/preset/src/recipes/tabs.ts) | [Storybook](https://cieloazul310.github.io/digital-go-design-system-with-panda/?path=/docs/components-%E3%83%86%E3%83%BC%E3%83%96%E3%83%AB--docs) |
| テキストエリア | textarea | [Recipe](https://github.com/cieloazul310/digital-go-design-system-with-panda/blob/main/packages/preset/src/recipes/textarea.ts) | [Storybook](https://cieloazul310.github.io/digital-go-design-system-with-panda/?path=/docs/components-%E3%83%86%E3%82%AD%E3%82%B9%E3%83%88%E3%82%A8%E3%83%AA%E3%82%A2--docs) |
| ユーティリティリンク | utility-link | [Recipe](https://github.com/cieloazul310/digital-go-design-system-with-panda/blob/main/packages/preset/src/recipes/utility-link.ts) | [Storybook](https://cieloazul310.github.io/digital-go-design-system-with-panda/?path=/docs/components-%E3%83%A6%E3%83%BC%E3%83%86%E3%82%A3%E3%83%AA%E3%83%86%E3%82%A3%E3%83%AA%E3%83%B3%E3%82%AF--docs) |
<!-- @catalog-end -->

## リンク

デジタル庁デザインシステムβ版  
<https://design.digital.go.jp/dads/>

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

# デザイン庁デザインシステム + Ark UI + Panda CSS

デジタル庁デザインシステムをArk UI + Panda CSSで実装するためのリポジトリ。

Storybook  
<https://cieloazul310.github.io/digital-go-design-system-with-panda/>

## 構成

- `utils`: ユーティリティパッケージ
- `preset-base`: 基礎となるPandaプリセット
- `preset`: コンポーネントのレシピを内包したPandaプリセット
- `components`: Ark UIのコンポーネントをレシピでスタイリングしたReactコンポーネント
- `core`: `preset`と`components`を内包したコアパッケージ
- `styled-system`: スタイルシステム

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
| ドロワー                      | ❌               | ❌                 |
| 緊急時バナー                  | ❌               | ❌                 |
| グローバルメニュー            | ❌               | ❌                 |
| ハンバーガーメニューボタン    | ❌               | ❌                 |
| ヘッダーコンテナ              | ❌               | ❌                 |
| ランゲージセレクター          | ❌               | ❌                 |
| メガメニュー                  | ❌               | ❌                 |
| メニューリスト                | ❌               | ❌                 |
| メニューリストボックス        | ❌               | ❌                 |
| ノティフィケーションバナー v2 | 🔨               | 🔨                 |
| ページネーション              | ❌               | ❌                 |
| プログレスインジケーター      | ❌               | ❌                 |
| ラジオボタン                  | ❌               | ❌                 |
| リソースリスト                | ❌               | ❌                 |
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

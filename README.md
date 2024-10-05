# デザイン庁デザインシステム +　Ark UI + Panda CSS

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

| 名称                       | recipe         | React            |
| -------------------------- | :------------- | :--------------- |
| ボタン                     | ✅ `button`    | ✅ `<Button>`    |
| アコーディオン             | ✅ `accordion` | ✅ `<Accordion>` |
| ボトムナビゲーション       | ❌             | ❌               |
| パンくずリスト             | ❌             | ❌               |
| チェックボックス           | ❌             | ❌               |
| モーダルダイアログ         | ❌             | ❌               |
| ディバイダー               | ❌             | ❌               |
| ドロワー                   | ❌             | ❌               |
| 緊急時バナー               | ❌             | ❌               |
| グローバルメニュー         | ❌             | ❌               |
| ハンバーガーメニューボタン | ❌             | ❌               |
| ヘッダーコンテナ           | ❌             | ❌               |
| ランゲージセレクター       | ❌             | ❌               |
| メガメニュー               | ❌             | ❌               |
| メニューリスト             | ❌             | ❌               |
| メニューリストボックス     | ❌             | ❌               |
| ノティフィケーションバナー | ❌             | ❌               |
| ページネーション           | ❌             | ❌               |
| プログレスインジケーター   | ❌             | ❌               |
| ラジオボタン               | ❌             | ❌               |
| リソースリスト             | ❌             | ❌               |
| スクロールトップボタン     | ❌             | ❌               |
| セレクトボックス           | 🔨 `select`    | 🔨 `<Select>`    |
| テーブル                   | ❌             | ❌               |
| テキストエリア             | ✅ `textarea`  | ✅ `<Textarea>`  |
| インプットテキスト         | ✅ `inputText` | ✅ `<InputText>` |
| ユーティリティリンク       | ❌             | ❌               |

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

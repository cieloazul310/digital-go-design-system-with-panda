---
"@repo/typescript-config": minor
"@repo/eslint-config": minor
"@cieloazul310/digital-go-pandacss-plugin": minor
"@cieloazul310/digital-go-pandacss-preset": minor
"@cieloazul310/digital-go-pandacss-utils": minor
"@cieloazul310/digital-go-pandacss-cli": minor
"nextjs": minor
"components": minor
"app": minor
"styled-system": minor
---

preset: `drawer`のslotを`@zag-js/dialog`から`@zag-js/drawer`に変更
cli: `--all`フラグと同時に`--include-progress`フラグを設定することで、作業中のコンポーネントをインストール可能に

components: `Drawer`コンポーネントをArk UI Drawerコンポーネントに仕様変更

Ark UIの`Drawer`コンポーネント追加に伴い、v0.4.0以降では、`placement`属性を廃止し、`swipeDirection`属性に変更。

```diff
<Drawer.Root
-  placement="right"
+  swipeDirection="end"
>
```

---
"@cieloazul310/digital-go-pandacss-preset": minor
"nextjs": minor
"components": minor
"app": minor
"@cieloazul310/digital-go-pandacss-cli": minor
"@repo/eslint-config": minor
"styled-system": minor
"@cieloazul310/digital-go-pandacss-plugin": minor
"@repo/typescript-config": minor
"@cieloazul310/digital-go-pandacss-utils": minor
---

カードとリソースリストの`asLink`アプローチを変更

v0.3以降は`<Card.Title>`及び`<ResourceList.Title>`と直下のLinkコンポーネントの**合成をしないでください。**  
v0.2以前のバージョンを使用している場合は、以下のようにTitleコンポーネントの`asChild`属性を削除してください。

```diff
<Card.Root asLink key={name}>
  <Card.Main>
-    <Card.Title asChild>
+    <Card.Title>
      <Link href="#">リンクタイトル</Link>
    </Card.Title>
  </Card.Main>
</Card.Root>
```

```diff
<ResourceList.Root asLink>
  <ResourceList.Main>
    <ResourceList.Content>
-      <ResourceList.Title asChild>
+      <ResourceList.Title>
        <Link href="#>リンクタイトル</Link>
      </ResourceList.Title>
    </ResourceList.Content>
  </ResourceList.Main>
</ResourceList.Root>
```

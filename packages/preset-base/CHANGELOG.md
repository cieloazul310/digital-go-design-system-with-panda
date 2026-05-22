# @cieloazul310/digital-go-pandacss-plugin

## 0.4.0

### Minor Changes

- 4bc0e56: preset: `drawer`のslotを`@zag-js/dialog`から`@zag-js/drawer`に変更
  cli: `--all`フラグと同時に`--include-progress`フラグを設定することで、作業中のコンポーネントをインストール可能に

  components: `Drawer`コンポーネントをArk UI Drawerコンポーネントに仕様変更

  Ark UIの`Drawer`コンポーネント追加に伴い、v0.4.0以降では、`placement`属性を廃止し、`swipeDirection`属性に変更。

  ```diff
  <Drawer.Root
  -  placement="right"
  +  swipeDirection="end"
  >
  ```

### Patch Changes

- Updated dependencies [4bc0e56]
  - @cieloazul310/digital-go-pandacss-utils@0.4.0

## 0.3.0

### Minor Changes

- 5c02036: カードとリソースリストの`asLink`アプローチを変更

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

### Patch Changes

- Updated dependencies [5c02036]
  - @cieloazul310/digital-go-pandacss-utils@0.3.0

## 0.2.3

### Patch Changes

- 203fdd3: ビルドツールを`tsup`から`tsdown`に変更
- Updated dependencies [203fdd3]
  - @cieloazul310/digital-go-pandacss-utils@0.2.3

## 0.2.2

### Patch Changes

- 76a3fe1: レシピの`calc(n / 16 * 1rem)`の箇所をspacingのトークンで書き換え
- Updated dependencies [76a3fe1]
  - @cieloazul310/digital-go-pandacss-utils@0.2.2

## 0.2.1

### Patch Changes

- 721af9d: ラジオボタン、テキストエリア、ユーティリティリンクを追加
- Updated dependencies [721af9d]
  - @cieloazul310/digital-go-pandacss-utils@0.2.1

## 0.2.0

### Minor Changes

- b922a73: ユーティリティ`focusRing`を`focusBox`に変更しました

### Patch Changes

- Updated dependencies [b922a73]
  - @cieloazul310/digital-go-pandacss-utils@0.2.0

## 0.1.5

### Patch Changes

- 4f8f16b: ステップナビゲーションコンポーネントを追加
- Updated dependencies [4f8f16b]
  - @cieloazul310/digital-go-pandacss-utils@0.1.5

## 0.1.4

### Patch Changes

- 32f444a: コンポーネントを追加
- Updated dependencies [32f444a]
  - @cieloazul310/digital-go-pandacss-utils@0.1.4

## 0.1.3

### Patch Changes

- cc36479: CLIパッケージに使用されている`fs`を`fs/promises`に置き換えました。
- Updated dependencies [cc36479]
  - @cieloazul310/digital-go-pandacss-utils@0.1.3

## 0.1.2

### Patch Changes

- 3535920: quick bug fix
- Updated dependencies [3535920]
  - @cieloazul310/digital-go-pandacss-utils@0.1.2

## 0.1.1

### Patch Changes

- c1777e3: CLIパッケージを安定化しました
- Updated dependencies [c1777e3]
  - @cieloazul310/digital-go-pandacss-utils@0.1.1

## 0.1.0

### Minor Changes

- 3ba4563: beta version

### Patch Changes

- c5cb745: fix cli
- 2b9ab3c: update cli package
- ea94003: quick fix
- 4c18a70: update recipes
- 29af253: Update CLI package
- 65c9202: change component import resolution
- Updated dependencies [c5cb745]
- Updated dependencies [2b9ab3c]
- Updated dependencies [ea94003]
- Updated dependencies [4c18a70]
- Updated dependencies [29af253]
- Updated dependencies [3ba4563]
- Updated dependencies [65c9202]
  - @cieloazul310/digital-go-pandacss-utils@0.1.0

## 0.1.0-beta.11

### Patch Changes

- 29af253: Update CLI package
- Updated dependencies [29af253]
  - @cieloazul310/digital-go-pandacss-utils@0.1.0-beta.11

## 0.1.0-beta.10

### Patch Changes

- c5cb745: fix cli
- Updated dependencies [c5cb745]
  - @cieloazul310/digital-go-pandacss-utils@0.1.0-beta.10

## 0.1.0-beta.9

### Patch Changes

- ea94003: quick fix
- Updated dependencies [ea94003]
  - @cieloazul310/digital-go-pandacss-utils@0.1.0-beta.9

## 0.1.0-beta.8

### Patch Changes

- 2b9ab3c: update cli package
- Updated dependencies [2b9ab3c]
  - @cieloazul310/digital-go-pandacss-utils@0.1.0-beta.8

## 0.1.0-beta.7

### Patch Changes

- 65c9202: change component import resolution
- Updated dependencies [65c9202]
  - @cieloazul310/digital-go-pandacss-utils@0.1.0-beta.7

## 0.1.0-beta.6

### Patch Changes

- 4c18a70: update recipes
- Updated dependencies [4c18a70]
  - @cieloazul310/digital-go-pandacss-utils@0.1.0-beta.6

## 0.1.0-beta.5

### Minor Changes

- 3ba4563: beta version

### Patch Changes

- Updated dependencies [3ba4563]
  - @cieloazul310/digital-go-pandacss-utils@0.1.0-beta.5

## 0.0.1-prerelease.4

### Patch Changes

- ce5e788: tiny fix
- Updated dependencies [ce5e788]
  - @cieloazul310/digital-go-pandacss-utils@0.0.1-prerelease.4

## 0.0.1-prerelease.3

### Patch Changes

- fdab7d7: tiny fix
- Updated dependencies [fdab7d7]
  - @cieloazul310/digital-go-pandacss-utils@0.0.1-prerelease.3

## 0.0.1-prerelease.2

### Patch Changes

- 3c37528: fix styled-system
- Updated dependencies [3c37528]
  - @cieloazul310/digital-go-pandacss-utils@0.0.1-prerelease.2

## 0.0.1-prerelease.1

### Patch Changes

- 712d667: packages.json files field experiment
- Updated dependencies [712d667]
  - @cieloazul310/digital-go-pandacss-utils@0.0.1-prerelease.1

## 0.0.1-prerelease.0

### Patch Changes

- d51597c: prerelease
- Updated dependencies [d51597c]
  - @cieloazul310/digital-go-pandacss-utils@0.0.1-prerelease.0

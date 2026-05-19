---
name: create-new-component
agent: agent
description: 新しいコンポーネントをプロジェクトに追加します
---

パッケージにコンポーネントを追加

変数:
- `recipeName`: Kebab case
- `componentName`: Pascal case
- `ark`: 基になるArk UIコンポーネント
- `digitalgo`: 基になるデジタル庁デザインシステムのコード (HTML/CSSまたはReact/TailwindCSSまたはその両方)

## 手順

1. レシピの内容がAtomic RecipeかSlot Recipeかを${ark}を見て判別
2. `Slot Recipe`であれば`packages/preset/package.json`の`devDependencies`と`peerDependencies`に`@zag-js/${ark}`を追加
3. `packages/preset/src/recipes/${recipeName}.ts`を作成
4. `packages/preset/src/recipes/index.ts`に${recipeName}レシピを追加
5. `catalogue.yml`に${componentName}を追加
6. `npm run build:package`でパッケージをビルド
7. `components/src`に${recipeName}ディレクトリを作成
8. `components/src/${recipeName}`に`snippet.tsx`と`index.tsx`を作成
9. `components/stories`に${recipeName}.stories.tsxを作成
10. `apps/nextjs/docs/components`に${recipeName}/index.mdxを作成

## 仕様

### `packages/preset/src/recipes/${recipeName}.ts`

Panda CSSのAtomic RecipeまたはSlot Recipeを${digitalgo}をベースに作成

### `components/src/${recipeName}/snippet.tsx`

#### ${ark}がHTML要素である場合

以下の内容のようにコンポーネントを作成

```tsx
import { ark } from "@ark-ui/react/factory";
import { styled } from "styled-system/jsx";
import { ${recipeName}, type ${componentName}VariantProps } from "styled-system/recipes";
import type { HTMLStyledProps } from "styled-system/types";

export interface ${componentName}Props
  extends ${componentName}VariantProps,
    `HTMLStyledProps<${ark}>` {}

export const ${componentName} = styled(ark.${ark}, ${recipeName});
```

### ${ark}がArk UIのコンポーネント名の場合

Ark UIの${ark}コンポーネントをPanda CSSのStyle Context機能を使って`styled-system/recipes`からインポートした${recipeName}レシピでスタイリングする

### `components/src/${recipeName}$/index.tsx`の仕様

```tsx
export * as ${componentName} from "./snippet"; 
```

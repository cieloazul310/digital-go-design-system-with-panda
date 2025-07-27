import { readFile } from "fs/promises";
import { resolve } from "path";
import { codeToHtml } from "shiki";
import * as Tabs from "@/components/ui/tabs";
import { css } from "styled-system/css";
import { DemoClient } from "./demo-client";
import type { DemoVariantMap } from "@/utils/demo-map";

export async function DemoViewer({ name }: { name: DemoVariantMap }) {
  const filePath = resolve(process.cwd(), "src/demo", `${name}.tsx`);
  const code = await readFile(filePath, "utf8");
  const highlighted = await codeToHtml(code, {
    lang: "tsx",
    theme: "slack-dark",
  });

  return (
    <Tabs.Root defaultValue="preview">
      <Tabs.List>
        <Tabs.Trigger value="preview">プレビュー</Tabs.Trigger>
        <Tabs.Trigger value="code">サンプルコード</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content
        value="preview"
        p={4}
        borderWidth="1px"
        borderColor="solid-gray.420"
        roundedBottom={8}
      >
        <DemoClient name={name} />
      </Tabs.Content>
      <Tabs.Content value="code" position="relative">
        <div
          className={css({
            "& > pre": {
              p: 8,
              roundedBottom: 8,
              textStyle: "mono-16N-150",
              overflowX: "auto",
            },
          })}
          dangerouslySetInnerHTML={{ __html: highlighted }}
        />
      </Tabs.Content>
    </Tabs.Root>
  );
}

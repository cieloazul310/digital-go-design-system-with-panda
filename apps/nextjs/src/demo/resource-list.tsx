import { CircleUser, EllipsisVertical } from "lucide-react";
import * as ResourceList from "@/components/ui/resource-list";

export default function App() {
  return (
    <ResourceList.Root>
      <ResourceList.Main>
        <CircleUser />
        <ResourceList.Content>
          <span>ラベル</span>
          <ResourceList.Title>リストタイトル</ResourceList.Title>
          <p>サポートテキスト</p>
        </ResourceList.Content>
        <span>サブラベル</span>
      </ResourceList.Main>
      <ResourceList.Action>
        <EllipsisVertical />
      </ResourceList.Action>
    </ResourceList.Root>
  );
}

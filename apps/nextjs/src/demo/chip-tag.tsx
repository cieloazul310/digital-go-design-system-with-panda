import { ChipTag } from "@/components/ui/chip-tag";
import { HomeIcon } from "lucide-react";

export default function App() {
  return (
    <ChipTag.Root>
      <ChipTag.Icon>
        <HomeIcon />
      </ChipTag.Icon>
      <ChipTag.Label>ラベル</ChipTag.Label>
      <ChipTag.RemoveButton />
    </ChipTag.Root>
  );
}

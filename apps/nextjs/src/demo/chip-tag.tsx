import { HomeIcon } from "lucide-react";
import { css } from "styled-system/css";
import { ChipTag } from "@/components/ui/chip-tag";

export default function App() {
  return (
    <div className={css({ display: "inline-flex", gap: 4, flexWrap: "wrap" })}>
      <ChipTag.Root>
        <ChipTag.Icon>
          <HomeIcon />
        </ChipTag.Icon>
        <ChipTag.Label>ラベル</ChipTag.Label>
        <ChipTag.RemoveButton />
      </ChipTag.Root>
      <ChipTag.Root>
        <ChipTag.Icon>
          <HomeIcon />
        </ChipTag.Icon>
        <ChipTag.Label>ラベル</ChipTag.Label>
        <ChipTag.AddButton />
      </ChipTag.Root>
    </div>
  );
}

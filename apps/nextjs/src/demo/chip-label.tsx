import {
  CheckCircle2Icon,
  CircleXIcon,
  TriangleAlert,
  InfoIcon,
} from "lucide-react";
import { css } from "styled-system/css";
import { Flex } from "styled-system/jsx";
import { ChipLabel } from "@/components/ui";

export default function App() {
  return (
    <Flex direction="column" gap={8}>
      <div
        className={css({ display: "inline-flex", gap: 4, flexWrap: "wrap" })}
      >
        <ChipLabel>
          <CheckCircle2Icon />
          デフォルト
        </ChipLabel>
        <ChipLabel colorPalette="green">
          <CheckCircle2Icon />
          成功
        </ChipLabel>
        <ChipLabel colorPalette="red">
          <CircleXIcon />
          失敗
        </ChipLabel>
        <ChipLabel colorPalette="yellow">
          <TriangleAlert />
          注意
        </ChipLabel>
        <ChipLabel colorPalette="solid-gray">
          <InfoIcon />
          情報
        </ChipLabel>
      </div>
      <div
        className={css({ display: "inline-flex", gap: 4, flexWrap: "wrap" })}
      >
        <ChipLabel variant="outlined">
          <CheckCircle2Icon />
          デフォルト
        </ChipLabel>
        <ChipLabel colorPalette="green" variant="outlined">
          <CheckCircle2Icon />
          成功
        </ChipLabel>
        <ChipLabel colorPalette="red" variant="outlined">
          <CircleXIcon />
          失敗
        </ChipLabel>
        <ChipLabel colorPalette="yellow" variant="outlined">
          <TriangleAlert />
          注意
        </ChipLabel>
        <ChipLabel colorPalette="solid-gray" variant="outlined">
          <InfoIcon />
          情報
        </ChipLabel>
      </div>
      <div
        className={css({ display: "inline-flex", gap: 4, flexWrap: "wrap" })}
      >
        <ChipLabel variant="ghost">
          <CheckCircle2Icon />
          デフォルト
        </ChipLabel>
        <ChipLabel colorPalette="green" variant="ghost">
          <CheckCircle2Icon />
          成功
        </ChipLabel>
        <ChipLabel colorPalette="red" variant="ghost">
          <CircleXIcon />
          失敗
        </ChipLabel>
        <ChipLabel colorPalette="yellow" variant="ghost">
          <TriangleAlert />
          注意
        </ChipLabel>
        <ChipLabel colorPalette="solid-gray" variant="ghost">
          <InfoIcon />
          情報
        </ChipLabel>
      </div>
      <div
        className={css({ display: "inline-flex", gap: 4, flexWrap: "wrap" })}
      >
        <ChipLabel variant="solid-fill">
          <CheckCircle2Icon />
          デフォルト
        </ChipLabel>
        <ChipLabel colorPalette="green" variant="solid-fill">
          <CheckCircle2Icon />
          成功
        </ChipLabel>
        <ChipLabel colorPalette="red" variant="solid-fill">
          <CircleXIcon />
          失敗
        </ChipLabel>
        <ChipLabel colorPalette="yellow" variant="solid-fill">
          <TriangleAlert />
          注意
        </ChipLabel>
        <ChipLabel colorPalette="solid-gray" variant="solid-fill">
          <InfoIcon />
          情報
        </ChipLabel>
      </div>
    </Flex>
  );
}

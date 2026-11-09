import {
  CheckCircle2Icon,
  CircleXIcon,
  TriangleAlert,
  InfoIcon,
} from "lucide-react";
import { css } from "styled-system/css";
import { Flex } from "styled-system/jsx";
import { ChipLabel } from "@/components/ui/chip-label";

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
        <ChipLabel variant="filled-1">
          <CheckCircle2Icon />
          デフォルト
        </ChipLabel>
        <ChipLabel colorPalette="green" variant="filled-1">
          <CheckCircle2Icon />
          成功
        </ChipLabel>
        <ChipLabel colorPalette="red" variant="filled-1">
          <CircleXIcon />
          失敗
        </ChipLabel>
        <ChipLabel colorPalette="yellow" variant="filled-1">
          <TriangleAlert />
          注意
        </ChipLabel>
        <ChipLabel colorPalette="solid-gray" variant="filled-1">
          <InfoIcon />
          情報
        </ChipLabel>
      </div>
      <div
        className={css({ display: "inline-flex", gap: 4, flexWrap: "wrap" })}
      >
        <ChipLabel variant="filled-2">
          <CheckCircle2Icon />
          デフォルト
        </ChipLabel>
        <ChipLabel colorPalette="green" variant="filled-2">
          <CheckCircle2Icon />
          成功
        </ChipLabel>
        <ChipLabel colorPalette="red" variant="filled-2">
          <CircleXIcon />
          失敗
        </ChipLabel>
        <ChipLabel colorPalette="yellow" variant="filled-2">
          <TriangleAlert />
          注意
        </ChipLabel>
        <ChipLabel colorPalette="solid-gray" variant="filled-2">
          <InfoIcon />
          情報
        </ChipLabel>
      </div>
    </Flex>
  );
}

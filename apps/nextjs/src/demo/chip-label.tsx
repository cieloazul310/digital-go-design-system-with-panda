import { Stack } from "styled-system/jsx";
import { ChipLabel } from "@/components/ui";

export default function App() {
  return (
    <Stack gap={4}>
      <ChipLabel>Example Chip</ChipLabel>
      <ChipLabel variant="outlined">Example Chip Outline</ChipLabel>
      <ChipLabel variant="solid-fill">Example Chip Solid Fill</ChipLabel>
      <ChipLabel variant="ghost">Example Chip Ghost</ChipLabel>
    </Stack>
  );
}

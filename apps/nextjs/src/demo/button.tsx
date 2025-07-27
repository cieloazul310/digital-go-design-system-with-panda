import { HStack } from "styled-system/jsx";
import { Button } from "@/components/ui/button";

export default function App() {
  return (
    <HStack gap={2}>
      <Button>ボタン</Button>
      <Button variant="outline">ボタン</Button>
      <Button variant="text">ボタン</Button>
    </HStack>
  );
}

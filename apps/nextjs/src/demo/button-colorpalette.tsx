import { HStack } from "styled-system/jsx";
import { Button } from "@/components/ui/button";

export default function App() {
  return (
    <HStack gap={4}>
      <Button colorPalette="red">ボタン</Button>
      <Button variant="outline" colorPalette="light-blue">
        ボタン
      </Button>
      <Button variant="text" colorPalette="lime">
        ボタン
      </Button>
    </HStack>
  );
}

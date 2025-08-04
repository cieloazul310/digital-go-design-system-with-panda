import * as Checkbox from "@/components/ui/checkbox";

export default function App() {
  return (
    <Checkbox.Root size="sm">
      <Checkbox.Control>
        <Checkbox.Indicator />
      </Checkbox.Control>
      <Checkbox.HiddenInput />
      <Checkbox.Label>ラベル</Checkbox.Label>
    </Checkbox.Root>
  );
}

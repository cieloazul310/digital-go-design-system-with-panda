import * as Checkbox from "@/components/ui/checkbox";

export default function App() {
  return (
    <Checkbox.Group defaultValue={["選択肢2"]}>
      {["選択肢1", "選択肢2", "選択肢3"].map((value) => (
        <Checkbox.Root value={value} key={value}>
          <Checkbox.Control>
            <Checkbox.Indicator />
          </Checkbox.Control>
          <Checkbox.HiddenInput />
          <Checkbox.Label>{value}</Checkbox.Label>
        </Checkbox.Root>
      ))}
    </Checkbox.Group>
  );
}

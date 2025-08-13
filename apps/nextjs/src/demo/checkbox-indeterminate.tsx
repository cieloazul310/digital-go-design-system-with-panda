import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";

export default function App() {
  const options = [
    "サッカー",
    "バスケットボール",
    "テニス",
    "スイミング",
    "ヨガ",
  ];
  const [selected, setSelected] = useState(["サッカー"]);
  const onCheckedChange = () => {
    if (selected.length === options.length) {
      setSelected([]);
    } else {
      setSelected(options);
    }
  };
  const onValueChange = (values: string[]) => {
    setSelected(values);
  };

  return (
    <>
      <Checkbox.Root
        mb={2}
        onCheckedChange={onCheckedChange}
        checked={
          selected.length === options.length
            ? true
            : selected.length === 0
              ? false
              : "indeterminate"
        }
      >
        <Checkbox.Control>
          <Checkbox.Indicator />
          <Checkbox.Indicator indeterminate />
        </Checkbox.Control>
        <Checkbox.HiddenInput />
        <Checkbox.Label>すべてのスポーツ</Checkbox.Label>
      </Checkbox.Root>
      <Checkbox.Group value={selected} onValueChange={onValueChange}>
        {options.map((value) => (
          <Checkbox.Root value={value} key={value}>
            <Checkbox.Control>
              <Checkbox.Indicator />
            </Checkbox.Control>
            <Checkbox.HiddenInput />
            <Checkbox.Label>{value}</Checkbox.Label>
          </Checkbox.Root>
        ))}
      </Checkbox.Group>
    </>
  );
}

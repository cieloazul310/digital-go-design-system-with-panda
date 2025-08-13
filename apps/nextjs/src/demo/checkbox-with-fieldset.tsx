import { css } from "styled-system/css";
import { Checkbox } from "@/components/ui/checkbox";
import { Fieldset } from "@/components/ui/fieldset";

export default function App() {
  return (
    <Fieldset.Root>
      <Fieldset.Legend>ラベル</Fieldset.Legend>
      <Fieldset.SupportText id="stacked-support-text">
        サポートテキスト
      </Fieldset.SupportText>
      <Checkbox.Group defaultValue={["選択肢2"]}>
        <div
          className={css({
            mt: 2,
            display: "flex",
            flexDirection: "column",
            gap: 2,
          })}
        >
          {["選択肢1", "選択肢2", "選択肢3"].map((value) => (
            <Checkbox.Root value={value} key={value}>
              <Checkbox.Control>
                <Checkbox.Indicator />
              </Checkbox.Control>
              <Checkbox.HiddenInput />
              <Checkbox.Label>{value}</Checkbox.Label>
            </Checkbox.Root>
          ))}
        </div>
        <Fieldset.ErrorText>エラーテキスト</Fieldset.ErrorText>
      </Checkbox.Group>
    </Fieldset.Root>
  );
}

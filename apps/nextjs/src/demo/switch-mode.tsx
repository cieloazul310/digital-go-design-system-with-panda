import { css } from "styled-system/css";
import { Switch } from "@/components/ui/switch";

export default function App() {
  return (
    <Switch.Root variant="mode">
      <span aria-hidden="true">リスト表示</span>
      <Switch.Control>
        <Switch.Thumb />
      </Switch.Control>
      <span aria-hidden="true">カレンダー表示</span>
      <Switch.HiddenInput role="switch" />
      <Switch.Label className={css({ srOnly: true })}>
        リスト表示 / カレンダー表示
      </Switch.Label>
    </Switch.Root>
  );
}

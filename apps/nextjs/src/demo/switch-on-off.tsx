import { Switch } from "@/components/ui/switch";

export default function App() {
  return (
    <Switch.Root>
      <Switch.Control>
        <Switch.Thumb>
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="m10.4 16.3-4.1-4.1 1.2-1.3 2.9 2.9 6-6.1 1.3 1.2z"
              fill="currentcolor"
            />
          </svg>
        </Switch.Thumb>
      </Switch.Control>
      <Switch.HiddenInput role="switch" />
      <Switch.Label>やさしい日本語に変換する</Switch.Label>
    </Switch.Root>
  );
}

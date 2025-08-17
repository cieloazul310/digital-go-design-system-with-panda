import { css } from "styled-system/css";
import { EmergencyBanner } from "@/components/ui/emergency-banner";

export default function App() {
  return (
    <EmergencyBanner.Root>
      <EmergencyBanner.Heading>
        〇〇地区に避難準備情報が発令されました
      </EmergencyBanner.Heading>
      <EmergencyBanner.Body>
        <p className={css({ textStyle: "std-17N-170" })}>
          <time dateTime="2024-01-01T06:00">2024年1月1日 06:00更新</time>
        </p>
        <p
          className={css({
            my: 4,
            textStyle: { base: "std-18N-160", md: "std-20N-150" },
          })}
        >
          1時23分に○○地区に対して避難準備情報が発令されました。お年寄りの方等避難に時間がかかる方は、直ちに指定避難所へ避難してください。
        </p>
      </EmergencyBanner.Body>
      <EmergencyBanner.Action>
        <EmergencyBanner.Button asChild>
          <a href="/" target="_blank" rel="noopener noreferer">
            指定避難所を確認する
          </a>
        </EmergencyBanner.Button>
      </EmergencyBanner.Action>
    </EmergencyBanner.Root>
  );
}

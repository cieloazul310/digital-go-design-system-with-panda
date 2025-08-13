import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function App() {
  return (
    <Card.Root maxWidth="md">
      <Card.Image>
        <Image src="/IMG_7224.jpg" alt="Kiyomizu" width={640} height={400} />
      </Card.Image>
      <Card.Main>
        <Card.Title>清水寺</Card.Title>
        <p>
          清水寺は、京都市東山区清水1丁目にある北法相宗の大本山の寺院。山号は音羽山。本尊は十一面千手観世音菩薩。
        </p>
      </Card.Main>
      <Card.Sub display="flex" alignItems="end" justifyContent="end" gap={2}>
        <Button variant="outline">キャンセル</Button>
        <Button>送信</Button>
      </Card.Sub>
    </Card.Root>
  );
}

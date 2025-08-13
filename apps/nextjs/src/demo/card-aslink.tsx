import Image from "next/image";
import { css } from "styled-system/css";
import { Card } from "@/components/ui/card";
import { Link } from "@/components/link";

const data = [
  {
    name: "cieloazul310",
    name_en: "cieloazul310",
    url: "https://cieloazul310.github.io",
    image: "/IMG_0839.png",
  },
  {
    name: "那珂川緑波",
    name_en: "Roppa NAKAGAWA",
    url: "https://github.com/cieloazul310",
    image: "/IMG_0891.jpg",
  },
  {
    name: "ショスタコおもち",
    name_en: "Shostakomochi",
    url: "https://qiita.com/cieloazul310",
    image: "/IMG_1568.jpg",
  },
];

export default function App() {
  return (
    <div
      className={css({
        display: "grid",
        gridTemplateColumns: { base: "1fr", sm: "repeat(3, 1fr)" },
        gridAutoRows: "auto",
        gap: 4,
      })}
    >
      {data.map(({ name, name_en, url, image }) => (
        <Card.Root asLink key={name}>
          <Card.Image aspectRatio={4 / 3}>
            <Image src={image} alt="Link" width={640} height={400} />
          </Card.Image>
          <Card.Main>
            <hgroup>
              <p>{name_en}</p>
              <Card.Title asChild>
                <Link href={url}>{name}</Link>
              </Card.Title>
            </hgroup>
          </Card.Main>
        </Card.Root>
      ))}
    </div>
  );
}

import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Image from "next/image";
import { PlaneIcon, MapPinIcon, BaggageClaimIcon } from "lucide-react";
import { css } from "styled-system/css";
import * as Card from "../src/card";
import { Button } from "../src/button";
import { Link } from "../src";

const meta = {
  title: "Components/カード",
  component: Card.Root,
  argTypes: {
    orientation: {
      options: ["vertical", "horizontal"],
      control: { type: "radio" },
      table: {
        type: { summary: "'vertical' | 'horizontal'" },
      },
    },
  },
  args: {
    orientation: "vertical",
  },
} satisfies Meta<typeof Card.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    orientation: "vertical",
    asLink: false,
    ...css.raw({
      maxWidth: "lg",
    }),
    children: (
      <>
        <Card.Image>
          <Image src="/IMG_7224.jpg" alt="Kiyomizu" width={640} height={400} />
        </Card.Image>
        <Card.Main>
          <Card.Title>Card</Card.Title>
        </Card.Main>
        <Card.Sub display="flex" alignItems="end" justifyContent="end" gap={2}>
          <Button>送信</Button>
          <Button variant="outline">キャンセル</Button>
        </Card.Sub>
      </>
    ),
  },
};

export const AsLink: Story = {
  args: {
    orientation: "horizontal",
    asLink: true,
    ...css.raw({
      maxWidth: "lg",
    }),
    children: (
      <>
        <Card.Image>
          <Image src="/IMG_7224.jpg" alt="Kiyomizu" width={640} height={400} />
        </Card.Image>
        <Card.Main>
          <Card.Title asChild>
            <Link href="/">清水寺</Link>
          </Card.Title>
        </Card.Main>
      </>
    ),
  },
};

export const OnlyMainArea: Story = {
  args: {
    asLink: true,
    orientation: "vertical",
    ...css.raw({
      width: "320px",
    }),
    children: (
      <Card.Main>
        <Card.Title color="inherit" mb={4} asChild>
          <Link href="/">子育て支援補助金制度</Link>
        </Card.Title>
        <p
          className={css({
            textStyle: "std-16N-170",
            color: "solid-gray.800",
          })}
        >
          育児休業等の取得を促進し労働者の業務負担軽減や業務効率化を目指します
        </p>
      </Card.Main>
    ),
  },
};

export const MainAndImageResponsive: Story = {
  args: {
    asLink: true,
    orientation: { base: "vertical", md: "horizontal" },
    ...css.raw({
      gridTemplateAreas: {
        base: `"image" "main"`,
        md: `"image main"`,
      },
      gridTemplateColumns: {
        base: "1fr",
        md: "minmax(auto, 260px) 1fr",
      },
    }),
    children: (
      <>
        <Card.Image>
          <Image src="/IMG_7224.jpg" alt="Kiyomizu" width={640} height={400} />
        </Card.Image>
        <Card.Main>
          <Card.Title color="inherit" mb={{ base: 0, md: 4 }} asChild>
            <Link href="/">第18回くらしの広場交流会</Link>
          </Card.Title>
          <p
            className={css({
              textStyle: "std-16N-170",
              color: "solid-gray.800",
              display: { base: "none", md: "block" },
            })}
          >
            住民の皆さまが参加できる地域緑化事業を行っています。地域交流を促進するとともに、地域の景観美化を目的としています。
          </p>
        </Card.Main>
      </>
    ),
  },
};

export const MainAndImageBg: Story = {
  args: {
    asLink: true,
    orientation: { base: "vertical", md: "horizontal" },
    ...css.raw({
      bg: "cyan.1200",
      color: "white",
      borderWidth: "4px",
      borderColor: "cyan.1200",
      rounded: 8,
      gridTemplateAreas: {
        base: `"image" "main"`,
        md: `"image main"`,
      },
      gridTemplateColumns: {
        base: "1fr",
        md: "minmax(auto, 260px) 1fr",
      },
    }),
    children: (
      <>
        <Card.Image>
          <Image src="/IMG_7224.jpg" alt="Kiyomizu" width={640} height={400} />
        </Card.Image>
        <Card.Main>
          <Card.Title color="inherit" mb={{ base: 0, md: 4 }} asChild>
            <Link href="/">地域をつなぐ秋のマルシェ</Link>
          </Card.Title>
        </Card.Main>
      </>
    ),
  },
};

export const RoundedMainAreaVertical: Story = {
  args: {
    orientation: "vertical",
  },
  render: ({ ...props }) => (
    <div
      className={css({
        display: "grid",
        gridTemplateColumns: { base: "1fr", sm: "repeat(3, 1fr)" },
        gap: 4,
      })}
    >
      {[
        {
          title: "機内サービス",
          description:
            "快適なシートや機内食で空の旅をより快適にお過ごしいただけます",
          Icon: PlaneIcon,
        },
        {
          title: "乗り継ぎサポート",
          description: "お乗り継ぎ時の際に日本人のガイドがご案内いたします",
          Icon: MapPinIcon,
        },
        {
          title: "機内持ち込み手荷物検査",
          description:
            "機内にお持ち込みいただける手荷物について係員が検査いたします",
          Icon: BaggageClaimIcon,
        },
      ].map(({ title, description, Icon }) => (
        <Card.Root {...props} key={title}>
          <Card.Image position="relative">
            <div
              className={css({
                aspectRatio: 16 / 9,
                bgGradient: "to-br",
                gradientFrom: "cyan.400",
                gradientTo: "purple.400",
              })}
            />
            <Icon
              size={64}
              className={css({
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                zIndex: 1,
                fill: "white",
                stroke: "transparent",
              })}
            />
          </Card.Image>
          <Card.Main
            position="relative"
            bg="white"
            zIndex={1}
            mt={-4}
            rounded={16}
          >
            <Card.Title color="inherit" mb={4}>
              {title}
            </Card.Title>
            <p
              className={css({
                textStyle: "std-16N-170",
                color: "solid-gray.800",
              })}
            >
              {description}
            </p>
          </Card.Main>
        </Card.Root>
      ))}
    </div>
  ),
};

export const RoundedMainAreaHorizontal: Story = {
  args: {
    orientation: "horizontal",
    ...css.raw({
      gridTemplateAreas: `"image main"`,
      gridTemplateColumns: "minmax(auto, 225px) 1fr",
      gridTemplateRows: "minmax(160px, auto)",
    }),
  },
  render: ({ ...props }) => (
    <div
      className={css({
        display: "grid",
        gridTemplateColumns: { base: "1fr", md: "repeat(2, 1fr)" },
        gap: 4,
      })}
    >
      {[
        {
          title: "機内サービス",
          description:
            "快適なシートや機内食で空の旅をより快適にお過ごしいただけます",
          Icon: PlaneIcon,
        },
        {
          title: "乗り継ぎサポート",
          description: "お乗り継ぎ時の際に日本人のガイドがご案内いたします",
          Icon: MapPinIcon,
        },
        {
          title: "機内持ち込み手荷物検査",
          description:
            "機内にお持ち込みいただける手荷物について係員が検査いたします",
          Icon: BaggageClaimIcon,
        },
      ].map(({ title, description, Icon }) => (
        <Card.Root {...props} key={title}>
          <Card.Image position="relative">
            <div
              className={css({
                aspectRatio: 16 / 9,
                bgGradient: "to-br",
                gradientFrom: "cyan.400",
                gradientTo: "purple.400",
                width: "full",
                height: "full",
              })}
            />
            <Icon
              size={64}
              className={css({
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                zIndex: 1,
                fill: "white",
                stroke: "transparent",
              })}
            />
          </Card.Image>
          <Card.Main
            position="relative"
            bg="white"
            zIndex={1}
            ml={-4}
            rounded={16}
          >
            <Card.Title color="inherit" mb={4}>
              {title}
            </Card.Title>
            <p
              className={css({
                textStyle: "std-16N-170",
                color: "solid-gray.800",
              })}
            >
              {description}
            </p>
          </Card.Main>
        </Card.Root>
      ))}
    </div>
  ),
};

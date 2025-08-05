import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Image from "next/image";
import {
  PlaneIcon,
  MapPinIcon,
  BaggageClaimIcon,
  PlayCircle,
  EllipsisVertical,
  Heart,
} from "lucide-react";
import { css } from "styled-system/css";
import { circle } from "styled-system/patterns";
import { card } from "styled-system/recipes";
import * as Card from "../src/card";
import { Button } from "../src/button";
import { Link } from "../src/link";
// import { Divider } from "../src/divider";
import { UnorderedList } from "../src/unordered-list";
import { List } from "../src/list";
import * as Checkbox from "../src/checkbox";
import { withSubPath } from "./utils/withSubPath";

const meta = {
  title: "Components/カード",
  tags: ["autodocs"],
  component: Card.Root,
  argTypes: {
    orientation: {
      options: card.variantMap.orientation,
      control: { type: "radio" },
      table: {
        type: { summary: `${card.variantMap.orientation.join(" | ")}` },
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
          <Image
            src={withSubPath("/IMG_7224_640.jpg")}
            alt="Kiyomizu"
            width={640}
            height={400}
          />
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
          <Image
            src={withSubPath("/IMG_7224_640.jpg")}
            alt="Kiyomizu"
            width={640}
            height={400}
          />
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
      gridTemplateAreas: `"main"`,
      width: "320px",
    }),
    children: (
      <Card.Main>
        <Card.Title asChild>
          <Link color="inherit" href="/">
            子育て支援補助金制度
          </Link>
        </Card.Title>
        <p>
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
          <Image
            src={withSubPath("/IMG_7224_640.jpg")}
            alt="Kiyomizu"
            width={640}
            height={400}
          />
        </Card.Image>
        <Card.Main>
          <Card.Title asChild>
            <Link color="inherit" href="/">
              第18回くらしの広場交流会
            </Link>
          </Card.Title>
          <p
            className={css({
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
          <Image
            src={withSubPath("/IMG_7224_640.jpg")}
            alt="Kiyomizu"
            width={640}
            height={400}
          />
        </Card.Image>
        <Card.Main>
          <Card.Title asChild>
            <Link color="inherit" href="/">
              地域をつなぐ秋のマルシェ
            </Link>
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
            <Card.Title color="inherit">{title}</Card.Title>
            <p>{description}</p>
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
            <Card.Title color="inherit">{title}</Card.Title>
            <p>{description}</p>
          </Card.Main>
        </Card.Root>
      ))}
    </div>
  ),
};

export const VerticalWithVideo: Story = {
  args: {
    orientation: "vertical",
    asLink: true,
    ...css.raw({
      maxWidth: "352px",
    }),
    children: (
      <>
        <Card.Image position="relative">
          <Image
            src={withSubPath("/IMG_7224_640.jpg")}
            alt="Kiyomizu"
            width={640}
            height={400}
            className={css({ filter: "brightness(0.7)" })}
          />
          <PlayCircle
            size={64}
            className={css({
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: 1,
              color: "white",
            })}
          />
        </Card.Image>
        <Card.Main>
          <div className={css({ display: "flex", alignItems: "center" })}>
            <Card.Title flexGrow={1} asChild>
              <Link href="/" color="inherit">
                もりやまかわ遊園地の開業
              </Link>
            </Card.Title>
            <EllipsisVertical className={css({ zIndex: 1 })} />
          </div>
          <p>
            もりやまかわ遊園地の開業に伴いオープニングセレモニーを開催します
          </p>
        </Card.Main>
      </>
    ),
  },
};

export const HorizontalWithCompoundedMainArea: Story = {
  args: {
    orientation: "horizontal",
    ...css.raw({
      rounded: 0,
    }),
    children: (
      <>
        <Card.Image>
          <Image
            src={withSubPath("/IMG_7224_640.jpg")}
            alt="Kiyomizu"
            width={640}
            height={400}
          />
        </Card.Image>
        <Card.Main>
          <div className={css({ display: "flex", alignItems: "center" })}>
            <Card.Title flexGrow={1}>地域緑化事業</Card.Title>
            <EllipsisVertical />
          </div>
          <p>
            住民の皆さまが参加できる地域緑化事業を行っています。地域交流を促進するとともに、地域の景観美化を目的としています。
          </p>
        </Card.Main>
        <Card.Sub display="flex" justifyContent="end">
          <Button rounded={0} asChild>
            <Link href="/">詳しくみる</Link>
          </Button>
        </Card.Sub>
      </>
    ),
  },
};

export const VerticalWithAvatar: Story = {
  args: {
    orientation: "vertical",
    ...css.raw({
      maxWidth: "352px",
      gridTemplateAreas: `"main" "image" "sub"`,
    }),
    children: (
      <>
        <Card.Main>
          <div className={css({ display: "flex", gap: 4 })}>
            <div
              className={circle({
                size: "64px",
                overflow: "hidden",
                borderWidth: "2px",
                borderColor: "blue.900",
              })}
            >
              <Image
                className={css({
                  width: "full",
                  height: "full",
                  objectFit: "cover",
                })}
                src={withSubPath("/IMG_0839.png")}
                alt="Kiyomizu"
                width={64}
                height={64}
              />
            </div>
            <hgroup
              className={css({
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              })}
            >
              <p
                className={css({
                  textStyle: "std-16N-170",
                  color: "solid-gray.800",
                })}
              >
                お役立ち情報
              </p>
              <Card.Title>
                <Link color="inherit" href="/">
                  郵送する際のポイント
                </Link>
              </Card.Title>
            </hgroup>
          </div>
          <p>重要な書類を郵送する際に注意すべきポイントをご紹介します</p>
        </Card.Main>
        <Card.Image px={{ base: 4, md: 6 }}>
          <Image
            src={withSubPath("/IMG_0839.png")}
            alt="Kiyomizu"
            width={640}
            height={400}
          />
        </Card.Image>
        <Card.Sub display="flex" justifyContent="end">
          <Button variant="outline" display="flex" alignItems="center" gap={2}>
            <Heart />
            お気に入り
          </Button>
        </Card.Sub>
      </>
    ),
  },
};

export const VerticalWithInsetImageAndEndIcon: Story = {
  args: {
    orientation: "vertical",
    ...css.raw({
      maxWidth: "463px",
      rounded: 0,
      gridTemplateAreas: `"main" "image" "sub"`,
    }),
    children: (
      <>
        <Card.Main>
          <div className={css({ display: "flex", alignItems: "center" })}>
            <Card.Title flexGrow={1} asChild>
              <Link color="inherit" href="/">
                アジアにおける交通問題
              </Link>
            </Card.Title>
            <EllipsisVertical />
          </div>
        </Card.Main>
        <Card.Image px={{ base: 4, md: 6 }}>
          <Image
            src={withSubPath("/IMG_7224_640.jpg")}
            alt="Kiyomizu"
            width={640}
            height={400}
          />
        </Card.Image>
        <Card.Sub display="flex" gap={2} justifyContent="end">
          <Button rounded={0} variant="outline">
            共有する
          </Button>
          <Button rounded={0}>詳しくみる</Button>
        </Card.Sub>
      </>
    ),
  },
};

export const VerticalLayoutThree: Story = {
  args: {
    orientation: "vertical",
    ...css.raw({
      maxWidth: "506px",
      gridTemplateAreas: `"main" "image" "sub"`,
    }),
    children: (
      <>
        <Card.Main>
          <Card.Title>
            「サービスデザインワークショップ」全3回のアーカイブを公開しました
          </Card.Title>
        </Card.Main>
        <Card.Image>
          <Image
            src={withSubPath("/IMG_0839.png")}
            alt="Kiyomizu"
            width={640}
            height={400}
          />
        </Card.Image>
        <Card.Sub textStyle="std-16N-170">
          <UnorderedList>
            <List>
              <Link href="/">サービスデザインワークショップ第1回</Link>
            </List>
            <List>
              <Link href="/">サービスデザインワークショップ第2回</Link>
            </List>
            <List>
              <Link href="/">サービスデザインワークショップ第3回</Link>
            </List>
          </UnorderedList>
        </Card.Sub>
      </>
    ),
  },
};

export const ResponsiveWithButtons: Story = {
  args: {
    ...css.raw({
      gridTemplateAreas: {
        base: `"image" "main" "sub"`,
        md: `"image main" "image sub"`,
        lg: `"image main sub"`,
      },
      gridTemplateColumns: {
        base: "1fr",
        md: "minmax(auto, 320px) 1fr",
        lg: "minmax(auto, 320px) 1fr auto",
      },
    }),
    children: (
      <>
        <Card.Image>
          <Image
            src={withSubPath("/IMG_7224_640.jpg")}
            alt="Kiyomizu"
            width={640}
            height={400}
          />
        </Card.Image>
        <Card.Main gap={2}>
          <hgroup
            className={css({
              display: "flex",
              flexDirection: "column",
              gap: 2,
            })}
          >
            <span>トラベル情報</span>
            <Card.Title>
              <Link href="/" color="inherit">
                冬の野鳥観察ツアー
              </Link>
            </Card.Title>
          </hgroup>
          <p>
            大自然の中で野鳥を観察できます。ガイド付きで安心してご参加いただけます。
          </p>
        </Card.Main>
        <Card.Sub
          display="flex"
          gap={2}
          alignItems="center"
          justifyContent="end"
        >
          <Button colorPalette="cyan" variant="outline">
            共有する
          </Button>
          <Button colorPalette="cyan">予約する</Button>
        </Card.Sub>
      </>
    ),
  },
};

export const VerticalLayoutWithAvatarAndButtons: Story = {
  args: {
    orientation: "vertical",
    ...css.raw({
      position: "relative",
      maxWidth: "352px",
    }),
    children: (
      <>
        <Card.Image>
          <div
            className={css({
              aspectRatio: 4 / 3,
              bgGradient: "to-tr",
              gradientFrom: "light-blue.50",
              gradientTo: "light-blue.300",
            })}
          />
        </Card.Image>
        <Card.Main pt={12} gap={2}>
          <Card.Title>
            <Link href="/" color="inherit">
              Digital_63
            </Link>
          </Card.Title>
          <p>
            暮らしに役立つデジタルサービスについてわかりやすく紹介していきます
          </p>
        </Card.Main>
        <Card.Sub
          display="flex"
          gap={2}
          alignItems="center"
          justifyContent="end"
        >
          <Button colorPalette="cyan" rounded="full">
            フォローする
          </Button>
        </Card.Sub>
        <div
          className={circle({
            position: "absolute",
            gridArea: "main",
            left: 4,
            top: 0,
            size: "96px",
            overflow: "hidden",
            borderWidth: "4px",
            borderColor: "white",
            zIndex: 1,
            transform: "translateY(-50%)",
          })}
        >
          <Image
            className={css({
              width: "full",
              height: "full",
              objectFit: "cover",
            })}
            src={withSubPath("/IMG_0839.png")}
            alt="Kiyomizu"
            width={96}
            height={96}
          />
        </div>
      </>
    ),
  },
};

export const VerticalLayoutWithFormControl: Story = {
  args: {
    orientation: "vertical",
    ...css.raw({
      position: "relative",
    }),
  },
  render: ({ ...props }) => (
    <Checkbox.Group
      display="grid"
      gridTemplateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
      gap={8}
      defaultValue={["2025-07-25"]}
    >
      {["2025-07-25", "2025-07-26"].map((date) => (
        <Checkbox.Root size="md" value={date.toString()} key={date.toString()}>
          <Card.Root {...props}>
            <Card.Image position="relative">
              <div
                className={css({
                  aspectRatio: 4 / 3,
                  bgGradient: "to-tr",
                  gradientFrom: "pink.200",
                  gradientTo: "orange.300",
                })}
              />
              <div
                className={css({
                  position: "absolute",
                  top: 4,
                  right: 4,
                  bg: "white",
                  p: 3,
                  borderWidth: "1px",
                  borderColor: "solid-gray.420",
                  rounded: 4,
                })}
              >
                <Checkbox.Control>
                  <Checkbox.Indicator />
                  <Checkbox.HiddenInput />
                </Checkbox.Control>
              </div>
            </Card.Image>
            <Card.Main>
              <Checkbox.Label>
                <Card.Title>新卒採用向けセミナー</Card.Title>
              </Checkbox.Label>
              <p>人事から業務内容やキャリアパスについてご説明します</p>
            </Card.Main>
          </Card.Root>
        </Checkbox.Root>
      ))}
    </Checkbox.Group>
  ),
};

export const HorizontalLayoutWithColorChip: Story = {
  args: {
    orientation: "horizontal",
    ...css.raw({
      gridTemplateAreas: `"main image"`,
      gridTemplateColumns: "1fr minmax(auto, 216px)",
      rounded: 0,
      borderColor: "keyColor.1000",
      borderWidth: "2px",
      borderLeftWidth: "8px",
    }),
  },
  render: ({ ...props }) => (
    <div
      className={css({
        display: "grid",
        gridTemplateColumns: "1fr",
        gridAutoRows: "minmax(auto, 124px)",
        gap: 4,
      })}
    >
      {[
        { title: "大気環境・排気ガス対策" },
        { title: "温室効果ガス排出削減" },
        { title: "給水栓整備" },
      ].map(({ title }) => (
        <Card.Root {...props} key={title}>
          <Card.Main justifyContent="center">
            <Card.Title>
              <Link color="inherit" href="/">
                {title}
              </Link>
            </Card.Title>
          </Card.Main>
          <Card.Image>
            <Image
              src={withSubPath("/IMG_7224_640.jpg")}
              alt="Kiyomizu"
              width={640}
              height={400}
            />
          </Card.Image>
        </Card.Root>
      ))}
    </div>
  ),
};

import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import NextLink from "next/link";
import * as ResouceList from "@cieloazul310/digital-go-pandacss/resource-list";
import { Link } from "@cieloazul310/digital-go-pandacss/link";
import * as RadioGroup from "@cieloazul310/digital-go-pandacss/radio";
import * as Checkbox from "@cieloazul310/digital-go-pandacss/checkbox";
import { EllipsisVertical, CircleUser, Heart } from "lucide-react";
import { link } from "@cieloazul310/styled-system/recipes";
import { css } from "@cieloazul310/styled-system/css";

const meta = {
  title: "Components/リソースリスト",
  component: ResouceList.Root,
  tags: ["autodocs"],
  args: {
    variant: "list",
    asLink: false,
  },
  argTypes: {
    variant: {
      type: "string",
      control: { type: "radio" },
      options: ["list", "frame"],
      table: {
        defaultValue: { summary: "list" },
        type: { summary: "'list' | 'frame'" },
      },
    },
  },
} satisfies Meta<typeof ResouceList.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    children: (
      <>
        <ResouceList.ContentsContainer>
          <ResouceList.FrontIcon>
            <CircleUser />
          </ResouceList.FrontIcon>
          <ResouceList.Content>
            <ResouceList.Label>ラベル</ResouceList.Label>
            <ResouceList.Title>リストタイトル</ResouceList.Title>
            <ResouceList.SuportText>サポートテキスト</ResouceList.SuportText>
          </ResouceList.Content>
          <ResouceList.SubLabel>サブラベル</ResouceList.SubLabel>
        </ResouceList.ContentsContainer>
        <ResouceList.FunctionButton>
          <EllipsisVertical />
        </ResouceList.FunctionButton>
      </>
    ),
  },
};

export const AsLink: Story = {
  args: {
    asLink: true,
    children: (
      <>
        <ResouceList.ContentsContainer>
          <ResouceList.FrontIcon>
            <CircleUser />
          </ResouceList.FrontIcon>
          <ResouceList.Content>
            <ResouceList.Label>ラベル</ResouceList.Label>
            <ResouceList.Title asChild>
              <Link
                href="https://cieloazul310.github.io"
                target="_blank"
                rel="noreferer noopener"
              >
                リストタイトル
              </Link>
            </ResouceList.Title>
            <ResouceList.SuportText>サポートテキスト</ResouceList.SuportText>
          </ResouceList.Content>
          <ResouceList.SubLabel>サブラベル</ResouceList.SubLabel>
        </ResouceList.ContentsContainer>
        <ResouceList.FunctionButton>
          <EllipsisVertical />
        </ResouceList.FunctionButton>
      </>
    ),
  },
};

export const WithoutFunctionButton: Story = {
  args: {
    asLink: false,
    children: (
      <ResouceList.ContentsContainer>
        <ResouceList.FrontIcon>
          <CircleUser />
        </ResouceList.FrontIcon>
        <ResouceList.Content>
          <ResouceList.Label>ラベル</ResouceList.Label>
          <ResouceList.Title>リストタイトル</ResouceList.Title>
          <ResouceList.SuportText>サポートテキスト</ResouceList.SuportText>
        </ResouceList.Content>
        <ResouceList.SubLabel>サブラベル</ResouceList.SubLabel>
      </ResouceList.ContentsContainer>
    ),
  },
};

export const ConsultationExample: Story = {
  args: {
    variant: "frame",
  },
  render: ({ ...props }) => (
    <ul
      className={css({
        maxW: "breakpoint-md",
        m: "auto",
        display: "flex",
        flexDirection: "column",
        gap: 4,
      })}
    >
      {[
        new Date("2025-04-30"),
        new Date("2024-11-24"),
        new Date("2023-10-13"),
      ].map((date) => (
        <ResouceList.Root key={date.toString()} {...props} asChild>
          <li>
            <ResouceList.ContentsContainer>
              <ResouceList.Content>
                <ResouceList.Title>健康診断</ResouceList.Title>
                <ResouceList.SuportText>
                  {date.getFullYear()}年度
                </ResouceList.SuportText>
              </ResouceList.Content>
              <ResouceList.SubLabel>
                受診日:{" "}
                {`${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`}
              </ResouceList.SubLabel>
            </ResouceList.ContentsContainer>
          </li>
        </ResouceList.Root>
      ))}
    </ul>
  ),
};

const accounts = [
  {
    firstName: "太郎",
    lastName: "デジ田",
    email: "taro-dejita@example.com",
    status: "invited",
    favorited: true,
  },
  {
    firstName: "ひかり",
    lastName: "デジ山",
    email: "hikari-dejiyama@example.com",
    status: "inviting",
    favorited: false,
  },
  {
    firstName: "長一郎",
    lastName: "出而足",
    email: "choichiro-dejitaru@example.com",
    status: "invited",
    favorited: false,
  },
];

export const AccountsExample: Story = {
  args: {
    variant: "list",
    asLink: true,
  },
  render: ({ ...props }) => (
    <ul
      className={css({
        maxW: "breakpoint-md",
        m: "auto",
      })}
    >
      {accounts.map(({ lastName, firstName, email, status, favorited }) => (
        <ResouceList.Root key={`${lastName}${firstName}`} {...props} asChild>
          <li>
            <ResouceList.ContentsContainer className="group">
              <ResouceList.Content>
                <ResouceList.Title asChild>
                  <NextLink
                    className={link()}
                    href={`/${lastName}_${firstName}`}
                  >
                    {lastName} {firstName}
                  </NextLink>
                </ResouceList.Title>
                <ResouceList.SuportText>{email}</ResouceList.SuportText>
              </ResouceList.Content>
              <ResouceList.SubLabel>
                {status === "invited" ? (
                  <Heart
                    className={
                      favorited
                        ? css({ fill: "pink.500", stroke: "pink.900" })
                        : undefined
                    }
                  />
                ) : (
                  "招待中"
                )}
              </ResouceList.SubLabel>
            </ResouceList.ContentsContainer>
          </li>
        </ResouceList.Root>
      ))}
    </ul>
  ),
};

const payments = [
  {
    id: "credit-card",
    label: "クレジットカード払い",
    description: "VISA, Master、JCB対応",
    recomended: true,
  },
  {
    id: "bank",
    label: "銀行振込",
    description:
      "入金確認後の商品発送となります。\n振り込み手数料はお客様負担となります。",
    recomended: false,
  },
  {
    id: "convinience",
    label: "コンビニ決済",
    description:
      "入金確認後の商品発送となります。\n全国のコンビニで利用可能です。",
    recomended: false,
  },
];

export const PaymentExample: Story = {
  args: {
    variant: "frame",
    asLink: false,
  },
  render: ({ ...props }) => (
    <fieldset
      className={css({
        maxW: "breakpoint-md",
        m: "auto",
        display: "flex",
        flexDirection: "column",
        gap: 4,
      })}
    >
      <RadioGroup.Root>
        {payments.map(({ id, label, description, recomended }) => (
          <RadioGroup.Item width="full" key={id} value={id}>
            <ResouceList.Root width="full" {...props}>
              <ResouceList.ContentsContainer className="group">
                <ResouceList.Form>
                  <RadioGroup.ItemControl />
                  <RadioGroup.ItemHiddenInput />
                </ResouceList.Form>
                <ResouceList.Content>
                  {recomended && (
                    <ResouceList.Label>おすすめ</ResouceList.Label>
                  )}
                  <ResouceList.Title>{label}</ResouceList.Title>
                  <ResouceList.SuportText>{description}</ResouceList.SuportText>
                </ResouceList.Content>
              </ResouceList.ContentsContainer>
            </ResouceList.Root>
          </RadioGroup.Item>
        ))}
      </RadioGroup.Root>
    </fieldset>
  ),
};

const users = [
  {
    name: "電磁 多留子",
    description: "開発部",
    role: "管理者",
    selected: false,
  },
  {
    name: "デジ田 太郎",
    description: "マーケティング部",
    role: "メンバー",
    selected: true,
  },
  {
    name: "デジ山 ひかり",
    description: "CEO",
    role: "オーナー",
    selected: false,
  },
];

export const UserSelectExample: Story = {
  args: {
    variant: "list",
    asLink: false,
  },
  render: ({ ...props }) => (
    <Checkbox.Group
      className={css({
        maxW: "breakpoint-md",
        m: "auto",
      })}
    >
      {users.map(({ name, description, role }) => (
        <Checkbox.Root width="full" py={0} value={name} key={name}>
          <ResouceList.Root width="full" {...props}>
            <ResouceList.ContentsContainer className="group">
              <ResouceList.Form>
                <Checkbox.Control>
                  <Checkbox.Indicator />
                </Checkbox.Control>
                <Checkbox.HiddenInput />
              </ResouceList.Form>
              <ResouceList.FrontIcon>
                <CircleUser className={css({ width: 8, height: 8 })} />
              </ResouceList.FrontIcon>
              <ResouceList.Content asChild>
                <Checkbox.Label>
                  <ResouceList.Title>{name}</ResouceList.Title>
                  <ResouceList.SuportText>{description}</ResouceList.SuportText>
                </Checkbox.Label>
              </ResouceList.Content>
              <ResouceList.Label>{role}</ResouceList.Label>
            </ResouceList.ContentsContainer>
          </ResouceList.Root>
        </Checkbox.Root>
      ))}
    </Checkbox.Group>
  ),
};

const searchResult = [
  {
    title:
      "エンタメ領域におけるマイナンバーカードの利用シーン拡大を目指し、不正転売防止等に関する実証実験を実施します",
    description:
      "エンタメ領域におけるマイナンバーカードの利用シーン拡大を目指し、不正転売防止等に関する実証実験を実施します。エンタメ領域におけるマイナンバーカードの利用シーン拡大を目指し、不正転売防止等に関する実証実験を実施します...",
    href: "/for-entertainment",
  },
  {
    title:
      "民間事業者に対してマイナンバーカード（ICチップ）の空き領域の利用に関する告示を行いました",
    description:
      "民間事業者に対してマイナンバーカード（ICチップ）の空き領域の利用に関する告示を行いました 民間事業者に対してマイナンバーカード（ICチップ）の空...項第4号の規定に基づきモバイルクリエイト株式会社がマイナンバーカード（ICチップ...",
    href: "/ic-chip-storage",
  },
  {
    title: "マイナンバー（個人番号）制度・マイナンバーカード",
    description:
      "...手続等における特定の個人を識別するための制度です。行政機関等の間での情報連携により、各種の行政手続における添付書類の省略などが可能となります。また、マイナンバーカードは、民間サービスでの本人確認等にも利用できます...",
    href: "/about-my-number-card",
  },
];

export const SearchResultExample: Story = {
  args: {
    asLink: true,
  },
  render: ({ ...props }) => (
    <nav className={css({ maxW: "breakpoint-md", m: "auto" })}>
      {searchResult.map(({ title, description, href }) => (
        <ResouceList.Root key={href} {...props}>
          <ResouceList.ContentsContainer className="group">
            <ResouceList.Content>
              <ResouceList.Title mb={4} asChild>
                <NextLink className={link()} href={href}>
                  {title}
                </NextLink>
              </ResouceList.Title>
              <ResouceList.SuportText>{description}</ResouceList.SuportText>
            </ResouceList.Content>
          </ResouceList.ContentsContainer>
        </ResouceList.Root>
      ))}
    </nav>
  ),
};

const information = [
  {
    title:
      "【注意喚起】年金事務所を騙り、マイナポータルの偽サイト・偽アプリへ誘導される事案について",
    date: new Date("2024-03-26"),
    href: "/2024/03/caution",
    isImportant: true,
  },
  {
    title: "アプリの画面デザインとアプリアイコンを刷新しました",
    date: new Date("2023-08-23"),
    href: "/2023/08/renewal",
  },
  {
    title: "本ページを公開しました",
    date: new Date("2023-08-23"),
    href: "/2023/08/launch",
  },
];

export const InformationExample: Story = {
  args: {
    variant: "frame",
    asLink: true,
  },
  render: ({ ...props }) => (
    <nav
      className={css({
        maxW: "breakpoint-md",
        m: "auto",
        display: "flex",
        flexDirection: "column",
        gap: 4,
      })}
    >
      {information.map(({ title, date, isImportant, href }) => (
        <ResouceList.Root key={href} {...props}>
          <ResouceList.ContentsContainer className="group">
            <ResouceList.Content>
              {isImportant && (
                <ResouceList.Label
                  rounded={4}
                  color="red.900"
                  bg="red.50"
                  borderColor="currentColor"
                  borderWidth="1px"
                  p={2}
                  mb={1}
                >
                  重要
                </ResouceList.Label>
              )}
              <ResouceList.Title asChild>
                <NextLink className={link()} href={href}>
                  {title}
                </NextLink>
              </ResouceList.Title>
              <ResouceList.SuportText>{`${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`}</ResouceList.SuportText>
            </ResouceList.Content>
          </ResouceList.ContentsContainer>
        </ResouceList.Root>
      ))}
    </nav>
  ),
};

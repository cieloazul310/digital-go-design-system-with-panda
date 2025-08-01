import { useId } from "react";
import NextLink from "next/link";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Home as HomeIcon } from "lucide-react";
import * as Breadcrumb from "../src/breadcrumb";

const meta = {
  title: "Components/パンくずリスト",
  tags: ["autodocs"],
} satisfies Meta<typeof Breadcrumb.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: ({ ...props }) => {
    const breadcrumbsId = useId();
    return (
      <Breadcrumb.Root aria-labelledby={`${breadcrumbsId}-label`} {...props}>
        <Breadcrumb.List>
          <Breadcrumb.Item>
            <Breadcrumb.Link href="#" key="home">
              ホーム
            </Breadcrumb.Link>
          </Breadcrumb.Item>
          <Breadcrumb.Separator />
          <Breadcrumb.Item>
            <Breadcrumb.Link href="#" key="organization">
              組織情報
            </Breadcrumb.Link>
          </Breadcrumb.Item>
          <Breadcrumb.Separator />
          <Breadcrumb.Item>
            <Breadcrumb.Link href="#" key="a">
              長いページタイトルが入ります長いページタイトルが入ります
            </Breadcrumb.Link>
          </Breadcrumb.Item>
          <Breadcrumb.Separator />
          <Breadcrumb.Item>
            <Breadcrumb.Link href="#" key="b">
              長いページタイトルが入ります長いページタイトルが入ります
            </Breadcrumb.Link>
          </Breadcrumb.Item>
          <Breadcrumb.Separator />
          <Breadcrumb.Item>
            長いページタイトルが入ります長いページタイトルが入ります
          </Breadcrumb.Item>
        </Breadcrumb.List>
      </Breadcrumb.Root>
    );
  },
};

export const WithRouter: Story = {
  render: ({ ...props }) => {
    const breadcrumbsId = useId();
    return (
      <Breadcrumb.Root aria-labelledby={`${breadcrumbsId}-label`} {...props}>
        <Breadcrumb.List>
          <Breadcrumb.Item>
            <Breadcrumb.Link key="home" asChild>
              <NextLink href="/">
                <HomeIcon />
                ホーム
              </NextLink>
            </Breadcrumb.Link>
          </Breadcrumb.Item>
          <Breadcrumb.Separator />
          <Breadcrumb.Item>
            <Breadcrumb.Link key="organization" asChild>
              <NextLink href="/organization">組織情報</NextLink>
            </Breadcrumb.Link>
          </Breadcrumb.Item>
          <Breadcrumb.Separator />
          <Breadcrumb.Item>
            <Breadcrumb.Link key="a" asChild>
              <NextLink href="/a-long-page-title">
                長いページタイトルが入ります長いページタイトルが入ります
              </NextLink>
            </Breadcrumb.Link>
          </Breadcrumb.Item>
          <Breadcrumb.Separator />
          <Breadcrumb.Item>長いページタイトルが入ります表示中</Breadcrumb.Item>
        </Breadcrumb.List>
      </Breadcrumb.Root>
    );
  },
};

export const WithIcon: Story = {
  render: ({ ...props }) => {
    const breadcrumbsId = useId();
    return (
      <Breadcrumb.Root aria-labelledby={`${breadcrumbsId}-label`} {...props}>
        <Breadcrumb.List>
          <Breadcrumb.Item>
            <Breadcrumb.Link href="#" key="home">
              <HomeIcon />
              ホーム
            </Breadcrumb.Link>
          </Breadcrumb.Item>
          <Breadcrumb.Separator />
          <Breadcrumb.Item>
            <Breadcrumb.Link href="#" key="organization">
              組織情報
            </Breadcrumb.Link>
          </Breadcrumb.Item>
          <Breadcrumb.Separator />
          <Breadcrumb.Item>
            <Breadcrumb.Link href="#" key="a">
              長いページタイトルが入ります長いページタイトルが入ります
            </Breadcrumb.Link>
          </Breadcrumb.Item>
          <Breadcrumb.Separator />
          <Breadcrumb.Item>
            <Breadcrumb.Link href="#" key="b">
              長いページタイトルが入ります長いページタイトルが入ります
            </Breadcrumb.Link>
          </Breadcrumb.Item>
          <Breadcrumb.Separator />
          <Breadcrumb.Item>
            長いページタイトルが入ります長いページタイトルが入ります
          </Breadcrumb.Item>
        </Breadcrumb.List>
      </Breadcrumb.Root>
    );
  },
};

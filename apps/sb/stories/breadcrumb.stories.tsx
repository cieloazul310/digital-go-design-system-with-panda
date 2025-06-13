import { useId } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Home as HomeIcon } from "lucide-react";
import * as Breadcrumb from "@cieloazul310/digital-go-pandacss/breadcrumb";

const meta = {
  title: "Components/パンくずリスト",
} satisfies Meta<typeof Breadcrumb.Root>;

export default meta;
type Story = StoryObj<typeof Breadcrumb.Root>;

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

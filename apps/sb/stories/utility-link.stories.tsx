import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { UtilityLink } from "@cieloazul310/digital-go-pandacss/utility-link";
import { ExternalLink } from "lucide-react";

const meta = {
  title: "Components/ユーティリティリンク",
  tags: ["autodocs"],
  component: UtilityLink,
  args: {
    href: "https://cieloazul310.github.io",
  },
} satisfies Meta<typeof UtilityLink>;

export default meta;
type Story = StoryObj<typeof UtilityLink>;

export const Simple: Story = {
  args: {
    children: "ユーティリティリンク",
  },
};

export const WithExternalIcon: Story = {
  render: ({ href }) => (
    <UtilityLink href={href}>
      Ut enim ad minim veniam <ExternalLink />
    </UtilityLink>
  ),
};

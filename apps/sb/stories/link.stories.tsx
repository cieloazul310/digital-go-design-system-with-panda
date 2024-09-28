import type { Meta, StoryObj } from "@storybook/react";
import { ark } from "@ark-ui/react/factory";
import { styled } from "@import-map-package/styled-system/jsx";
import { link } from "@import-map-package/styled-system/recipes";

const Link = styled(ark.a, link);

const meta: Meta<typeof Link> = {
  title: "Components/Link",
  component: Link,
  args: {
    href: "https://cieloazul310.github.io",
  },
};

export default meta;
type Story = StoryObj<typeof Link>;

export const Primary: Story = {
  args: {
    children: "Link",
  },
};

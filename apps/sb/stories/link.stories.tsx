import type { Meta, StoryObj } from "@storybook/react";
import { ark } from "@ark-ui/react/factory";
import { styled, Container } from "@import-map-package/styled-system/jsx";
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

export const Simple: Story = {
  args: {
    children: "Link",
  },
};

export const Inline: Story = {
  render: ({ href }) => (
    <Container maxWidth="2xl" textStyle="std-17N-170" py={8}>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.{" "}
        <Link href={href}>Ut enim ad minim veniam</Link>, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </Container>
  ),
};

// import { ChevronDownIcon } from "lucide-react";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { fn } from "storybook/test";
import { Portal } from "@ark-ui/react/portal";
import { Menu } from "@cieloazul310/digital-go-pandacss";
import { Button } from "@cieloazul310/digital-go-pandacss/button";
import { menu } from "@import-map-package/styled-system/recipes";

const meta = {
  title: "Components/Menu",
  argTypes: {
    isCondensed: {
      control: "boolean",
      options: menu.variantMap.isCondensed,
    },
  },
  args: {
    isCondensed: false,
    onSelect: fn(),
  },
} satisfies Meta<typeof Menu.Root>;

export default meta;
type Story = StoryObj;

export const Basic: Story = {
  render: ({ ...props }) => (
    <Menu.Root {...props}>
      <Menu.Trigger asChild>
        <Button>Open menu</Button>
      </Menu.Trigger>
      <Menu.Positioner>
        <Menu.Content>
          <Menu.Item value="react">React</Menu.Item>
          <Menu.Item value="solid">Solid</Menu.Item>
          <Menu.Item value="vue">Vue</Menu.Item>
        </Menu.Content>
      </Menu.Positioner>
    </Menu.Root>
  ),
};

export const Nested: Story = {
  render: ({ ...props }) => (
    <Menu.Root {...props}>
      <Menu.Trigger asChild>
        <Button>Open menu</Button>
      </Menu.Trigger>
      <Menu.Positioner>
        <Menu.Content>
          <Menu.Root>
            <Menu.TriggerItem>JS Frameworks</Menu.TriggerItem>
            <Portal>
              <Menu.Positioner>
                <Menu.Content>
                  <Menu.Item value="react">React</Menu.Item>
                  <Menu.Item value="solid">Solid</Menu.Item>
                  <Menu.Item value="vue">Vue</Menu.Item>
                </Menu.Content>
              </Menu.Positioner>
            </Portal>
          </Menu.Root>
          <Menu.Root>
            <Menu.TriggerItem>CSS Frameworks</Menu.TriggerItem>
            <Portal>
              <Menu.Positioner>
                <Menu.Content>
                  <Menu.Item value="panda">Panda</Menu.Item>
                  <Menu.Item value="tailwind">Tailwind</Menu.Item>
                </Menu.Content>
              </Menu.Positioner>
            </Portal>
          </Menu.Root>
        </Menu.Content>
      </Menu.Positioner>
    </Menu.Root>
  ),
};

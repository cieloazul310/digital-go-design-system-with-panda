import { ChevronDownIcon, X as XIcon } from "lucide-react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { Portal, createListCollection } from "@ark-ui/react";
import * as Select from "@cieloazul310/digital-go-pandacss/select";
import { select } from "@import-map-package/styled-system/recipes";

const meta = {
  title: "Components/セレクトボックス",
  argTypes: {
    size: {
      control: "inline-radio",
      options: select.variantMap.size,
    },
    disabled: { control: "boolean" },
    invalid: { control: "boolean" },
    readOnly: { control: "boolean" },
    required: { control: "boolean" },
  },
  args: {
    size: "lg",
    disabled: false,
    invalid: false,
    readOnly: false,
    required: false,
    onChange: fn(),
  },
} satisfies Meta<typeof Select.Root>;

export default meta;
type Story = StoryObj;

export const basic: Story = {
  render: ({ ...props }) => {
    const collection = createListCollection({
      items: ["React", "Solid", "Vue"],
    });
    return (
      <Select.Root collection={collection} {...props}>
        <Select.Label>ラベル</Select.Label>
        <Select.Control>
          <Select.Trigger>
            <Select.ValueText placeholder="Select a Framework" />
            <Select.Indicator>
              <ChevronDownIcon />
            </Select.Indicator>
          </Select.Trigger>
          <Select.ClearTrigger>
            <XIcon />
          </Select.ClearTrigger>
        </Select.Control>
        <Portal>
          <Select.Positioner>
            <Select.Content>
              <Select.ItemGroup>
                <Select.ItemGroupLabel>Frameworks</Select.ItemGroupLabel>
                {collection.items.map((item) => (
                  <Select.Item key={item} item={item}>
                    <Select.ItemText>{item}</Select.ItemText>
                    <Select.ItemIndicator>✓</Select.ItemIndicator>
                  </Select.Item>
                ))}
              </Select.ItemGroup>
            </Select.Content>
          </Select.Positioner>
        </Portal>
      </Select.Root>
    );
  },
};

export const nativeSelect: Story = {
  render: ({ ...props }) => {
    const collection = createListCollection({
      items: ["React", "Solid", "Vue"],
    });
    return (
      <Select.Root collection={collection} {...props}>
        <Select.Label>ラベル</Select.Label>
        <Select.Control>
          <Select.Trigger asChild>
            <select>
              <Select.ValueText placeholder="Select a Framework" asChild>
                <option value="">Select a Framework</option>
              </Select.ValueText>
              {collection.items.map((item) => (
                <Select.Item key={item} item={item} asChild>
                  <option>
                    <Select.ItemText>{item}</Select.ItemText>
                  </option>
                </Select.Item>
              ))}
            </select>
          </Select.Trigger>
          <Select.Indicator>
            <ChevronDownIcon />
          </Select.Indicator>
          <Select.ClearTrigger>
            <XIcon />
          </Select.ClearTrigger>
        </Select.Control>
      </Select.Root>
    );
  },
};

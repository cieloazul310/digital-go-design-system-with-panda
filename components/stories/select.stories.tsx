import { ChevronDownIcon, X as XIcon } from "lucide-react";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { fn } from "storybook/test";
import { Portal, createListCollection } from "@ark-ui/react";
import * as Select from "../src/select";
import { select } from "styled-system/recipes";

const meta = {
  title: "Components/セレクトボックス",
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "inline-radio",
      options: select.variantMap.size,
    },
    disabled: {
      description:
        "無効化する必要がある場合は `disabled` 属性ではなく `aria-disabled` 属性を使用します。",
      control: { type: "boolean" },
      table: {
        defaultValue: { summary: "false" },
        type: { summary: "boolean" },
      },
    },
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

export const Basic: Story = {
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

export const NativeSelect: Story = {
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

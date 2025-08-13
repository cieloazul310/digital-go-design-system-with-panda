import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { fn } from "storybook/test";
import { Portal } from "@ark-ui/react/portal";
import { select } from "styled-system/recipes";
import { Select, createListCollection } from "../src/select";
import { Field } from "../src/field";
import {
  disabled,
  ariaDisabled,
  invalid,
  readOnly,
  required,
} from "./utils/arg-types";

const meta = {
  title: "Components/セレクトボックス",
  tags: ["autodocs"],
  component: Select.Root,
  argTypes: {
    size: {
      control: "inline-radio",
      options: select.variantMap.size,
    },
    disabled,
    "aria-disabled": ariaDisabled,
    invalid,
    readOnly,
    required,
  },
  args: {
    size: "lg",
    disabled: false,
    "aria-disabled": false,
    invalid: false,
    readOnly: false,
    required: false,
    onValueChange: fn(),
  },
} satisfies Meta<typeof Select.Root>;

export default meta;
type Story = StoryObj;

const collection = createListCollection({
  items: ["React", "Solid", "Vue"],
});

export const Basic: Story = {
  args: {
    collection,
    children: (
      <>
        <Select.Label>ラベル</Select.Label>
        <Select.Control>
          <Select.Trigger>
            <Select.ValueText placeholder="Select a Framework" />
            <Select.Indicator />
          </Select.Trigger>
          <Select.ClearTrigger />
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
      </>
    ),
  },
};

export const Native: Story = {
  args: {
    onChange: fn(),
  },
  render: ({ ...args }) => (
    <Field.Root {...args}>
      <Field.Label>Native select</Field.Label>
      <Field.SupportText>
        ネイティブセレクトを使う場合は<code>{"<Field.Select>"}</code>
        コンポーネントを使用してください。
      </Field.SupportText>
      <Field.Select asChild>
        <select>
          <option value="react">React</option>
          <option value="solid">Solid</option>
          <option value="vue">Vue</option>
        </select>
      </Field.Select>
    </Field.Root>
  ),
};

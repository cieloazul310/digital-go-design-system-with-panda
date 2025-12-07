import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Phone, Mail } from "lucide-react";
import { descriptionList } from "styled-system/recipes";
import { DescriptionList } from "../src/description-list";

const meta = {
  title: "Components/説明リスト",
  tags: ["autodocs"],
  component: DescriptionList.Root,
  argTypes: {
    marker: {
      type: "string",
      control: "radio",
      options: descriptionList.variantMap.marker,
    },
  },
  args: {
    marker: "none",
  },
} satisfies Meta<typeof DescriptionList.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    children: (
      <>
        <DescriptionList.Item>
          <DescriptionList.ItemTerm>項目名1</DescriptionList.ItemTerm>
          <DescriptionList.ItemDescription>
            これは項目1の説明文です。
          </DescriptionList.ItemDescription>
        </DescriptionList.Item>
        <DescriptionList.Item>
          <DescriptionList.ItemTerm>項目名2</DescriptionList.ItemTerm>
          <DescriptionList.ItemDescription>
            これは項目2の説明文です。
          </DescriptionList.ItemDescription>
        </DescriptionList.Item>
      </>
    ),
  },
};

export const WithBullet: Story = {
  args: {
    marker: "bullet",
    children: (
      <>
        <DescriptionList.Item>
          <DescriptionList.ItemTerm>項目名1</DescriptionList.ItemTerm>
          <DescriptionList.ItemDescription>
            これは項目1の説明文です。
          </DescriptionList.ItemDescription>
        </DescriptionList.Item>
        <DescriptionList.Item>
          <DescriptionList.ItemTerm>項目名2</DescriptionList.ItemTerm>
          <DescriptionList.ItemDescription>
            これは項目2の説明文です。
          </DescriptionList.ItemDescription>
        </DescriptionList.Item>
      </>
    ),
  },
};

export const WithCustomMarker: Story = {
  args: {
    marker: "custom",
    children: (
      <>
        <DescriptionList.Item>
          <DescriptionList.ItemTerm>
            <DescriptionList.ItemMarker>
              <Phone />
            </DescriptionList.ItemMarker>
            項目名1
          </DescriptionList.ItemTerm>
          <DescriptionList.ItemDescription>
            これは項目1の説明文です。
          </DescriptionList.ItemDescription>
        </DescriptionList.Item>
        <DescriptionList.Item>
          <DescriptionList.ItemTerm>
            <DescriptionList.ItemMarker>
              <Mail />
            </DescriptionList.ItemMarker>
            項目名2
          </DescriptionList.ItemTerm>
          <DescriptionList.ItemDescription>
            これは項目2の説明文です。
          </DescriptionList.ItemDescription>
        </DescriptionList.Item>
      </>
    ),
  },
};

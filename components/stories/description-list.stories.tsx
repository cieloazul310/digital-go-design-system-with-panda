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
          <DescriptionList.Term>項目名1</DescriptionList.Term>
          <DescriptionList.Description>
            これは項目1の説明文です。
          </DescriptionList.Description>
        </DescriptionList.Item>
        <DescriptionList.Item>
          <DescriptionList.Term>項目名2</DescriptionList.Term>
          <DescriptionList.Description>
            これは項目2の説明文です。
          </DescriptionList.Description>
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
          <DescriptionList.Term>項目名1</DescriptionList.Term>
          <DescriptionList.Description>
            これは項目1の説明文です。
          </DescriptionList.Description>
        </DescriptionList.Item>
        <DescriptionList.Item>
          <DescriptionList.Term>項目名2</DescriptionList.Term>
          <DescriptionList.Description>
            これは項目2の説明文です。
          </DescriptionList.Description>
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
          <DescriptionList.Term>
            <DescriptionList.Marker>
              <Phone />
            </DescriptionList.Marker>
            項目名1
          </DescriptionList.Term>
          <DescriptionList.Description>
            これは項目1の説明文です。
          </DescriptionList.Description>
        </DescriptionList.Item>
        <DescriptionList.Item>
          <DescriptionList.Term>
            <DescriptionList.Marker>
              <Mail />
            </DescriptionList.Marker>
            項目名2
          </DescriptionList.Term>
          <DescriptionList.Description>
            これは項目2の説明文です。
          </DescriptionList.Description>
        </DescriptionList.Item>
      </>
    ),
  },
};

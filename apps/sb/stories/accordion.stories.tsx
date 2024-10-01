import { ChevronDownIcon } from "lucide-react";
import type { Meta, StoryObj } from "@storybook/react";
import * as Accordion from "@cieloazul310/digital-go-pandacss/accordion";

const meta: Meta<typeof Accordion.Root> = {
  title: "Components/Accordion",
  argTypes: {
    collapsible: {
      control: "boolean",
    },
    multiple: {
      control: "boolean",
    },
    shapeStyle: {
      control: "inline-radio",
      options: ["circle", "square"],
    },
  },
  args: {
    collapsible: true,
    multiple: true,
    shapeStyle: "circle",
  },
  render: ({ ...props }) => {
    return (
      <Accordion.Root {...props}>
        <Accordion.Item className="group" value="hoge">
          <Accordion.ItemTrigger>
            Lorem Ipsum
            <Accordion.ItemIndicator>
              <ChevronDownIcon />
            </Accordion.ItemIndicator>
          </Accordion.ItemTrigger>
          <Accordion.ItemContent>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.ItemContent>
        </Accordion.Item>
        <Accordion.Item className="group" value="hige">
          <Accordion.ItemTrigger>
            ちりあくた
            <Accordion.ItemIndicator>
              <ChevronDownIcon />
            </Accordion.ItemIndicator>
          </Accordion.ItemTrigger>
          <Accordion.ItemContent>
            あなたは絶対けっしてその講義物というものの後へあれたでし。近頃一遍のお話者はもっともその話ですただけで出来てかねるでしょでも発展描けるないますから、ぴたりにもせよたでですう。個性に考えだろ方はもっと絶対にしっくりですでなけれ。多分大森君に満足辺始終品評から思わある言葉その主義私か紹介をというお活動ないうなけれでて、その時間は私か堅め個人に進んと、張君のので理非のあなたを幾分ご留学と聴いので私人でお抑圧にそれようにむしろ肝遠慮に伴っんませて、せっかくはなはだ準備が考えたて致したのよりしるた。
          </Accordion.ItemContent>
        </Accordion.Item>
      </Accordion.Root>
    );
  },
};

export default meta;
type Story = StoryObj;

export const basic: Story = {};

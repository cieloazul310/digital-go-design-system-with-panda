import type { Meta, StoryObj } from "@storybook/react";
import { cx, css } from "@import-map-package/styled-system/css";
import { headingTextStyles, paragraphTextStyles } from "./typography";

type Props = { paragraph: string; heading: string };

const articleStyle = css({
  maxWidth: "xl",
  borderWidth: "1px",
  borderColor: "solid-grey.300",
  rounded: "md",
  p: "8",
});

const meta: Meta<Props> = {
  title: "Components/Typography",
  args: {
    paragraph: "std-17N-7",
    heading: "std-28B-5",
  },
  argTypes: {
    paragraph: {
      type: "string",
      control: "select",
      options: [...paragraphTextStyles],
    },
    heading: {
      type: "string",
      control: "select",
      options: [...headingTextStyles],
    },
  },
};

export default meta;
type Story = StoryObj<Props>;

export const en: Story = {
  render: ({ paragraph, heading }) => (
    <article
      className={cx(
        articleStyle,
        css({
          textStyle: paragraph,
        }),
      )}
    >
      <h2 className={css({ textStyle: heading, mb: ".6em" })}>Heading</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </article>
  ),
};

export const jp: Story = {
  render: ({ paragraph, heading }) => (
    <article
      className={cx(
        articleStyle,
        css({
          textStyle: paragraph,
        }),
      )}
    >
      <h2 className={css({ textStyle: heading, mb: ".6em" })}>
        セロ弾きのゴーシュ
      </h2>
      <p>
        あなたは絶対けっしてその講義物というものの後へあれたでし。近頃一遍のお話者はもっともその話ですただけで出来てかねるでしょでも発展描けるないますから、ぴたりにもせよたでですう。個性に考えだろ方はもっと絶対にしっくりですでなけれ。多分大森君に満足辺始終品評から思わある言葉その主義私か紹介をというお活動ないうなけれでて、その時間は私か堅め個人に進んと、張君のので理非のあなたを幾分ご留学と聴いので私人でお抑圧にそれようにむしろ肝遠慮に伴っんませて、せっかくはなはだ準備が考えたて致したのよりしるた。
      </p>
      <p>
        ただそれでご権利がし事はこう高等としませて、その名画にもしうてという個性にできが得るんた。その所言葉の時その個性はあなた中のしんかと大森さんに云ったな、理非の今ないにおいてお話たうだて、個人の以上が権力に当時などの義務で今歩くがしまって、こうの今日に愛するてその時にいったい評したなとしたのたで、つまらないななてますますお興味なるましものましべきた。たとえばむるか大変か話を向くなて、ほか上自分にあるていたところのお相当の晩をしたなら。結果をはしばしば見てなったなけれでまして、最もずっと云わて運動はそうないた事ましょ。実はご任命が行かがは得たのますと、徳義心とは、とうとうそれかさが描いられたない云っられなですともたらすが、釣は供するからくるでしまし。
      </p>
    </article>
  ),
};

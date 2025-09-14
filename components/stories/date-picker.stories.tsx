import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { parseDate } from "@ark-ui/react/date-picker";
import { Portal } from "@ark-ui/react/portal";
import { CalendarIcon, ChevronRightIcon, ChevronLeftIcon } from "lucide-react";
import { css } from "styled-system/css";
import { DatePicker } from "../src/date-picker";
import { Button } from "../src/button";
import { colorPalette } from "./utils/color-palette";

const today = (() => {
  const { year, month, day } = parseDate(new Date());
  return `${year}/${month.toString().padStart(2, "0")}/${day.toString().padStart(2, "0")}`;
})();

const meta = {
  title: "Components/日付ピッカー／カレンダー",
  component: DatePicker.Root,
  tags: ["autodocs"],
  argTypes: {
    startOfWeek: {
      type: "number",
      control: { type: "number", min: 0, max: 6 },
    },
    outsideDaySelectable: { type: "boolean", control: "boolean" },
    locale: {
      type: "string",
      control: { type: "radio" },
      options: [
        "ja-JP",
        "en-US",
        "de-DE",
        "es-ES",
        "fr-FR",
        "it-IT",
        "pt-BR",
        "zh-CN",
        "ko-KR",
      ],
    },
    view: {
      type: "string",
      control: "radio",
      options: ["day", "month", "year"],
    },
    colorPalette,
  },
  args: {
    startOfWeek: 0,
    outsideDaySelectable: false,
    min: parseDate("2018-01-01"),
    max: parseDate("2030-12-31"),
    view: "day",
    colorPalette: "keyColor",
    placeholder: today,
    locale: "ja-JP",
  },
} satisfies Meta<typeof DatePicker.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    children: (
      <>
        <DatePicker.Control>
          <DatePicker.Input />
          <DatePicker.Trigger asChild>
            <Button variant="outline" px={3} minWidth="fit-content">
              <span id="open-calendar" className={css({ srOnly: true })}>
                カレンダーを開く
              </span>
              <CalendarIcon aria-describedby="open-calendar" />
            </Button>
          </DatePicker.Trigger>
        </DatePicker.Control>
        <Portal>
          <DatePicker.Positioner>
            <DatePicker.Content>
              <DatePicker.Context>
                {(datePicker) => (
                  <DatePicker.View view="day">
                    <DatePicker.ViewControl
                      className={css({
                        display: "flex",
                        alignItems: "center",
                        gap: 2,
                        p: 4,
                      })}
                    >
                      <DatePicker.YearSelect flexGrow={1} />
                      <div
                        className={css({
                          display: "flex",
                          alignItems: "center",
                        })}
                      >
                        <DatePicker.PrevTrigger asChild>
                          <Button
                            variant="outline"
                            px={3}
                            minWidth="fit-content"
                          >
                            <span
                              className={css({ srOnly: true })}
                              id="previous-month"
                            >
                              前の月へ
                            </span>
                            <ChevronLeftIcon aria-describedby="previous-month" />
                          </Button>
                        </DatePicker.PrevTrigger>
                        <span
                          className={css({ width: 14, textAlign: "center" })}
                        >
                          {datePicker.visibleRange.start.month}月
                        </span>
                        <DatePicker.NextTrigger asChild>
                          <Button
                            variant="outline"
                            px={3}
                            minWidth="fit-content"
                          >
                            <span
                              className={css({ srOnly: true })}
                              id="next-month"
                            >
                              次の月へ
                            </span>
                            <ChevronRightIcon aria-describedby="next-month" />
                          </Button>
                        </DatePicker.NextTrigger>
                      </div>
                    </DatePicker.ViewControl>
                    <DatePicker.Table>
                      <DatePicker.TableHead>
                        <DatePicker.TableRow>
                          {datePicker.weekDays.map((weekDay, id) => (
                            <DatePicker.TableHeader key={id}>
                              {weekDay.short}
                            </DatePicker.TableHeader>
                          ))}
                        </DatePicker.TableRow>
                      </DatePicker.TableHead>
                      <DatePicker.TableBody>
                        {datePicker.weeks.map((week, id) => (
                          <DatePicker.TableRow key={id}>
                            {week.map((day, id) => (
                              <DatePicker.TableCell key={id} value={day}>
                                <DatePicker.TableCellTrigger>
                                  {day.day}
                                </DatePicker.TableCellTrigger>
                              </DatePicker.TableCell>
                            ))}
                          </DatePicker.TableRow>
                        ))}
                      </DatePicker.TableBody>
                    </DatePicker.Table>
                    <div
                      className={css({
                        /**
                         * flex items-center gap-2 p-4
                         */
                        display: "flex",
                        flexDirection: "row-reverse",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: 2,
                        p: 4,
                      })}
                    >
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => datePicker.selectToday()}
                      >
                        今日
                      </Button>
                      <DatePicker.ClearTrigger asChild>
                        <Button variant="text" size="sm">
                          削除
                        </Button>
                      </DatePicker.ClearTrigger>
                    </div>
                  </DatePicker.View>
                )}
              </DatePicker.Context>
            </DatePicker.Content>
          </DatePicker.Positioner>
        </Portal>
      </>
    ),
  },
};

export const Standalone: Story = {
  args: {
    open: true,
    inline: true,
    children: (
      <DatePicker.Context>
        {(datePicker) => (
          <DatePicker.View view="day">
            <DatePicker.ViewControl
              className={css({
                display: "flex",
                alignItems: "center",
                gap: 2,
                p: 4,
              })}
            >
              <DatePicker.YearSelect flexGrow={1} />
              <div className={css({ display: "flex", alignItems: "center" })}>
                <DatePicker.PrevTrigger asChild>
                  <Button variant="outline" px={3} minWidth="fit-content">
                    <ChevronLeftIcon />
                  </Button>
                </DatePicker.PrevTrigger>
                <span className={css({ width: 14, textAlign: "center" })}>
                  {datePicker.visibleRange.start.month}月
                </span>
                <DatePicker.NextTrigger asChild>
                  <Button variant="outline" px={3} minWidth="fit-content">
                    <ChevronRightIcon />
                  </Button>
                </DatePicker.NextTrigger>
              </div>
            </DatePicker.ViewControl>
            <DatePicker.Table>
              <DatePicker.TableHead>
                <DatePicker.TableRow>
                  {datePicker.weekDays.map((weekDay, id) => (
                    <DatePicker.TableHeader key={id}>
                      {weekDay.short}
                    </DatePicker.TableHeader>
                  ))}
                </DatePicker.TableRow>
              </DatePicker.TableHead>
              <DatePicker.TableBody>
                {datePicker.weeks.map((week, id) => (
                  <DatePicker.TableRow key={id}>
                    {week.map((day, id) => (
                      <DatePicker.TableCell key={id} value={day}>
                        <DatePicker.TableCellTrigger>
                          {day.day}
                        </DatePicker.TableCellTrigger>
                      </DatePicker.TableCell>
                    ))}
                  </DatePicker.TableRow>
                ))}
              </DatePicker.TableBody>
            </DatePicker.Table>
            <div
              className={css({
                /**
                 * flex items-center gap-2 p-4
                 */
                display: "flex",
                flexDirection: "row-reverse",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 2,
                p: 4,
              })}
            >
              <Button
                variant="outline"
                size="sm"
                onClick={() => datePicker.selectToday()}
              >
                今日
              </Button>
              <DatePicker.ClearTrigger asChild>
                <Button variant="text" size="sm">
                  削除
                </Button>
              </DatePicker.ClearTrigger>
            </div>
          </DatePicker.View>
        )}
      </DatePicker.Context>
    ),
  },
};

export const Range: Story = {
  args: {
    selectionMode: "range",
    children: (
      <>
        <DatePicker.Control>
          <DatePicker.Input index={0} />
          <span>-</span>
          <DatePicker.Input index={1} />
          <DatePicker.Trigger asChild>
            <Button variant="outline" px={3} minWidth="fit-content">
              <span id="open-calendar" className={css({ srOnly: true })}>
                カレンダーを開く
              </span>
              <CalendarIcon aria-describedby="open-calendar" />
            </Button>
          </DatePicker.Trigger>
        </DatePicker.Control>
        <Portal>
          <DatePicker.Positioner>
            <DatePicker.Content>
              <DatePicker.Context>
                {(datePicker) => (
                  <DatePicker.View view="day">
                    <DatePicker.ViewControl
                      className={css({
                        display: "flex",
                        alignItems: "center",
                        gap: 2,
                        p: 4,
                      })}
                    >
                      <DatePicker.YearSelect flexGrow={1} />
                      <div
                        className={css({
                          display: "flex",
                          alignItems: "center",
                        })}
                      >
                        <DatePicker.PrevTrigger asChild>
                          <Button
                            variant="outline"
                            px={3}
                            minWidth="fit-content"
                          >
                            <span
                              className={css({ srOnly: true })}
                              id="previous-month"
                            >
                              前の月へ
                            </span>
                            <ChevronLeftIcon aria-describedby="previous-month" />
                          </Button>
                        </DatePicker.PrevTrigger>
                        <span
                          className={css({ width: 14, textAlign: "center" })}
                        >
                          {datePicker.visibleRange.start.month}月
                        </span>
                        <DatePicker.NextTrigger asChild>
                          <Button
                            variant="outline"
                            px={3}
                            minWidth="fit-content"
                          >
                            <span
                              className={css({ srOnly: true })}
                              id="next-month"
                            >
                              次の月へ
                            </span>
                            <ChevronRightIcon aria-describedby="next-month" />
                          </Button>
                        </DatePicker.NextTrigger>
                      </div>
                    </DatePicker.ViewControl>
                    <DatePicker.Table>
                      <DatePicker.TableHead>
                        <DatePicker.TableRow>
                          {datePicker.weekDays.map((weekDay, id) => (
                            <DatePicker.TableHeader key={id}>
                              {weekDay.short}
                            </DatePicker.TableHeader>
                          ))}
                        </DatePicker.TableRow>
                      </DatePicker.TableHead>
                      <DatePicker.TableBody>
                        {datePicker.weeks.map((week, id) => (
                          <DatePicker.TableRow key={id}>
                            {week.map((day, id) => (
                              <DatePicker.TableCell key={id} value={day}>
                                <DatePicker.TableCellTrigger>
                                  {day.day}
                                </DatePicker.TableCellTrigger>
                              </DatePicker.TableCell>
                            ))}
                          </DatePicker.TableRow>
                        ))}
                      </DatePicker.TableBody>
                    </DatePicker.Table>
                    <div
                      className={css({
                        /**
                         * flex items-center gap-2 p-4
                         */
                        display: "flex",
                        flexDirection: "row-reverse",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: 2,
                        p: 4,
                      })}
                    >
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => datePicker.selectToday()}
                      >
                        今日
                      </Button>
                      <DatePicker.ClearTrigger asChild>
                        <Button variant="text" size="sm">
                          削除
                        </Button>
                      </DatePicker.ClearTrigger>
                    </div>
                  </DatePicker.View>
                )}
              </DatePicker.Context>
            </DatePicker.Content>
          </DatePicker.Positioner>
        </Portal>
      </>
    ),
  },
};

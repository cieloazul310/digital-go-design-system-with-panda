import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { parseDate } from "@ark-ui/react/date-picker";
import { ChevronRightIcon, ChevronLeftIcon } from "lucide-react";
import { css } from "styled-system/css";
import { Calendar } from "../src/calendar";
import { Button } from "../src/button";
import { colorPalette } from "./utils/color-palette";

const meta = {
  title: "Components/カレンダー",
  component: Calendar.Root,
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
  },
} satisfies Meta<typeof Calendar.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    children: (
      <Calendar.Content>
        <Calendar.Context>
          {(datePicker) => (
            <Calendar.View view="day">
              <Calendar.ViewControl
                className={css({
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  p: 4,
                })}
              >
                <Calendar.YearSelect flexGrow={1} />
                <div className={css({ display: "flex", alignItems: "center" })}>
                  <Calendar.PrevTrigger asChild>
                    <Button variant="outline" px={3} minWidth="fit-content">
                      <ChevronLeftIcon />
                    </Button>
                  </Calendar.PrevTrigger>
                  <span className={css({ width: 14, textAlign: "center" })}>
                    {datePicker.visibleRange.start.month}月
                  </span>
                  <Calendar.NextTrigger asChild>
                    <Button variant="outline" px={3} minWidth="fit-content">
                      <ChevronRightIcon />
                    </Button>
                  </Calendar.NextTrigger>
                </div>
              </Calendar.ViewControl>
              <Calendar.Table>
                <Calendar.TableHead>
                  <Calendar.TableRow>
                    {datePicker.weekDays.map((weekDay, id) => (
                      <Calendar.TableHeader key={id}>
                        {weekDay.short}
                      </Calendar.TableHeader>
                    ))}
                  </Calendar.TableRow>
                </Calendar.TableHead>
                <Calendar.TableBody>
                  {datePicker.weeks.map((week, id) => (
                    <Calendar.TableRow key={id}>
                      {week.map((day, id) => (
                        <Calendar.TableCell key={id} value={day}>
                          <Calendar.TableCellTrigger>
                            {day.day}
                          </Calendar.TableCellTrigger>
                        </Calendar.TableCell>
                      ))}
                    </Calendar.TableRow>
                  ))}
                </Calendar.TableBody>
              </Calendar.Table>
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
                <Calendar.ClearTrigger asChild>
                  <Button variant="text" size="sm">
                    削除
                  </Button>
                </Calendar.ClearTrigger>
              </div>
            </Calendar.View>
          )}
        </Calendar.Context>
      </Calendar.Content>
    ),
  },
};

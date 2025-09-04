import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Portal } from "@ark-ui/react/portal";
import { CalendarIcon, ChevronRightIcon, ChevronLeftIcon } from "lucide-react";
import { css } from "styled-system/css";
import { DatePicker } from "../src/date-picker";
import { Button } from "../src/button";

const meta = {
  title: "Components/日付ピッカー",
  component: DatePicker.Root,
  tags: ["autodocs"],
} satisfies Meta<typeof DatePicker.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    placeholder: "2025/09/04",
    children: (
      <>
        <DatePicker.Control>
          <DatePicker.Input />
          <DatePicker.Trigger asChild>
            <Button variant="outline" px={3} minWidth="fit-content">
              <CalendarIcon />
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
                            <ChevronLeftIcon />
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
            </DatePicker.Content>
          </DatePicker.Positioner>
        </Portal>
      </>
    ),
  },
};

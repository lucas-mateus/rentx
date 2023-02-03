import { format, eachDayOfInterval } from "date-fns";
import { DayProps, MarkedDateProps } from ".";
import theme from "../../styles/theme";
import { getPlataformDate } from "../../utils/getPlataformDate";

export function generateInterval(start: DayProps, end: DayProps) {
  let interval: MarkedDateProps = {};

  eachDayOfInterval({
    start: new Date(start.timestamp),
    end: new Date(end.timestamp),
  }).forEach((item) => {
    const date = format(getPlataformDate(item), "yyyy-MM-dd");
    interval = {
      ...interval,
      [date]: {
        color:
          start.dateString === date || end.dateString === date
            ? theme.color.main
            : theme.color.mainLight,
        textColor:
          start.dateString === date || end.dateString === date
            ? theme.color.shape
            : theme.color.main,
      },
    };
  });
  return interval;
}

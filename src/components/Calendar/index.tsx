import React from "react";
import { Feather } from "@expo/vector-icons";
import { generateInterval } from "./generateInterval";

import {
  Calendar as CustomCalendar,
  LocaleConfig,
  CalendarProps,
} from "react-native-calendars";
import { useTheme } from "styled-components";
import { RFValue } from "react-native-responsive-fontsize";
import { ptBR } from "./localeConfig";

LocaleConfig.locales["pt-br"] = ptBR;

LocaleConfig.defaultLocale = "pt-br";

interface MarkedDateProps {
  [date: string]: {
    color: string;
    textColor: string;
    disabled?: boolean;
    disableTouchEvent?: boolean;
  };
}

interface DayProps {
  dateString: string;
  day: number;
  month: number;
  year: number;
  timestamp: number;
}

function Calendar({ onDayPress, markedDates }: CalendarProps) {
  const theme = useTheme();
  return (
    <CustomCalendar
      renderArrow={(directions) => (
        <Feather
          size={24}
          color={theme.color.text}
          name={directions == "left" ? "chevron-left" : "chevron-right"}
        />
      )}
      headerStyle={{
        backgroundColor: theme.color.backgroundPrimary,
        borderBottomColor: theme.color.textDetail,
        borderBottomWidth: 0.5,
        marginVertical: 10,
      }}
      theme={{
        textDayFontFamily: theme.fonts.primary_400,
        textDayHeaderFontFamily: theme.fonts.secondary_600,
        textMonthFontFamily: theme.fonts.secondary_600,
        textMonthFontSize: RFValue(20),
        textDayHeaderFontSize: RFValue(10),
        arrowStyle: {
          marginHorizontal: -12,
        },
      }}
      firstDay={1}
      minDate={String(new Date())}
      markingType="period"
      markedDates={markedDates}
      onDayPress={onDayPress}
    />
  );
}

export { Calendar, DayProps, MarkedDateProps, generateInterval };

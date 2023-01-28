import React from "react";
import { Feather } from "@expo/vector-icons";

import {
  Calendar as CustomCalendar,
  LocaleConfig,
} from "react-native-calendars";
import { useTheme } from "styled-components";
import { RFValue } from "react-native-responsive-fontsize";

LocaleConfig.locales["pt-br"] = {
  monthNames: [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ],
  monthNamesShort: [
    "Jan",
    "Fev",
    "Mar",
    "Abr",
    "Mai",
    "Jun",
    "Jul",
    "Ago",
    "Set",
    "Out",
    "Nov",
    "Dez",
  ],
  dayNames: [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ],
  dayNamesShort: ["DOM", "SEG", "TER", "QUA", "QUI", "SEX", "SÁB"],
  today: "Hoje",
};

LocaleConfig.defaultLocale = "pt-br";

export function Calendar() {
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
    />
  );
}

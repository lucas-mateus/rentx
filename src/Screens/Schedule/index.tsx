import { Alert, StatusBar } from "react-native";
import React, { useState } from "react";
import { BackButton } from "../../components/BackButton";
import {
  Container,
  Header,
  Title,
  RentalPeriod,
  DateInfo,
  DateTitle,
  DateValue,
  Content,
  Footer,
} from "./styles";
import Arrow from "../../assets/arrow.svg";
import { useTheme } from "styled-components";
import { Button } from "../../components/Button";
import {
  DayProps,
  Calendar,
  MarkedDateProps,
} from "../../components/Calendar/index";
import { generateInterval } from "../../components/Calendar/generateInterval";
import { getPlataformDate } from "../../utils/getPlataformDate";
import { format } from "date-fns";
import { CarDTO } from "../../dtos/CarDTO";

interface RentalPeriod {
  startFormatted: string;
  endFormatted: string;
}
interface Params {
  car: CarDTO;
}

export function Schedule({ route, navigation }) {
  const theme = useTheme();

  const [lastSelectedDate, setLastSelectedDate] = useState<DayProps>(
    {} as DayProps
  );
  const [markedDates, setMarkedDates] = useState<MarkedDateProps>(
    {} as MarkedDateProps
  );
  const [rentalPeriod, setRentalPeriod] = useState<RentalPeriod>(
    {} as RentalPeriod
  );
  const { car } = route.params as Params;
  function handleScheduleDetails() {
    if (!rentalPeriod.startFormatted || !rentalPeriod.endFormatted) {
      Alert.alert("Selecione a data para alugar!");
      return;
    } else {
      navigation.navigate("ScheduleDetails", {
        car,
        dates: Object.keys(markedDates),
      });
    }
  }

  function handleChangeDate(date: DayProps) {
    let start = !lastSelectedDate.timestamp ? date : lastSelectedDate;
    let end = date;

    if (start.timestamp > end.timestamp) {
      start = end;
      end = start;
    }

    setLastSelectedDate(end);
    const interval = generateInterval(start, end);
    setMarkedDates(interval);

    const firstDate = Object.keys(interval)[0];
    const endDate = Object.keys(interval)[Object.keys(interval).length - 1];

    setRentalPeriod({
      startFormatted: format(
        getPlataformDate(new Date(firstDate)),
        "dd-MM-yyyy"
      ),
      endFormatted: format(getPlataformDate(new Date(endDate)), "dd-MM-yyyy"),
    });
  }
  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Header>
        <BackButton
          color={theme.color.shape}
          onPress={() => navigation.goBack()}
        />
        <Title>
          Escolha uma {`\n`}data de início e {`\n`}fim do aluguel
        </Title>

        <RentalPeriod>
          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue selected={!!rentalPeriod.startFormatted}>
              {rentalPeriod.startFormatted}
            </DateValue>
          </DateInfo>
          <Arrow />
          <DateInfo>
            <DateTitle>ATÉ</DateTitle>
            <DateValue selected={!!rentalPeriod.endFormatted}>
              {rentalPeriod.endFormatted}
            </DateValue>
          </DateInfo>
        </RentalPeriod>
      </Header>
      <Content>
        <Calendar markedDates={markedDates} onDayPress={handleChangeDate} />
      </Content>
      <Footer>
        <Button title="Confirmar" onPress={handleScheduleDetails} />
      </Footer>
    </Container>
  );
}

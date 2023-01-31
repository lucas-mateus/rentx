import { StatusBar } from "react-native";
import React from "react";
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
import { Calendar } from "../../components/Calendar";

export function Schedule({ navigation }) {
  const theme = useTheme();

  function handleScheduleDetails() {
    navigation.navigate("ScheduleDetails");
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
            <DateValue selected={false}></DateValue>
          </DateInfo>
          <Arrow />
          <DateInfo>
            <DateTitle>ATÉ</DateTitle>
            <DateValue selected={true}>27/01/2023</DateValue>
          </DateInfo>
        </RentalPeriod>
      </Header>
      <Content>
        <Calendar />
      </Content>
      <Footer>
        <Button title="Confirmar" onPress={handleScheduleDetails} />
      </Footer>
    </Container>
  );
}

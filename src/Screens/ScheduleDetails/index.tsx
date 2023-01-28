import React from "react";
import { Feather } from "@expo/vector-icons";
import { StatusBar } from "react-native";
import { Acessory } from "../../components/Acessory";
import { BackButton } from "../../components/BackButton";
import { ImageSlider } from "../../components/ImageSlider";
import { Button } from "../../components/Button";

import {
  Container,
  Header,
  CarImageSlider,
  Content,
  Details,
  Description,
  CarBrand,
  CarName,
  RentDetails,
  Period,
  Price,
  AcessoryWrapper,
  Footer,
  RentalPeriod,
  CalendarIcon,
  DateInfo,
  DateTitle,
  DateValue,
  RentalDetails,
  RentalPriceLabel,
  RentalPriceDetails,
  RentalPriceQuota,
  RentalPriceTotal,
} from "./styles";

import SpeedSvg from "../../assets/Speed.svg";
import GasolineSvg from "../../assets/Gasolina.svg";
import AcelerateSvg from "../../assets/Up.svg";
import ExchangeSvg from "../../assets/Câmbio.svg";
import PowerSvg from "../../assets/Força.svg";
import PeopleSvg from "../../assets/Pessoas.svg";
import { useTheme } from "styled-components";

export function ScheduleDetails() {
  const theme = useTheme();
  return (
    <Container>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" />
      <Header>
        <BackButton onPress={() => {}} />
      </Header>
      <CarImageSlider>
        <ImageSlider
          imagesUrl={[
            "https://www.pngmart.com/files/1/Audi-RS5-Red-PNG.png",
            "https://www.pngmart.com/files/1/Audi-RS5-Red-PNG.png",
            "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.gratispng.com%2Fbaixar%2Fporsche.html&psig=AOvVaw3vRBrgkdegQq-VypDLHLr2&ust=1674684907320000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCJCms8md4fwCFQAAAAAdAAAAABAJ",
          ]}
        />
      </CarImageSlider>
      <Content>
        <Details>
          <Description>
            <CarBrand>Lamborguini</CarBrand>
            <CarName>huracan</CarName>
          </Description>
          <RentDetails>
            <Period>ao dia</Period>
            <Price>R$ 580</Price>
          </RentDetails>
        </Details>
        <AcessoryWrapper>
          <Acessory name="380km/h" icon={SpeedSvg} />
          <Acessory name="3.2s" icon={AcelerateSvg} />
          <Acessory name="800HP" icon={PowerSvg} />
          <Acessory name="Gasolina" icon={GasolineSvg} />
          <Acessory name="Auto" icon={ExchangeSvg} />
          <Acessory name="2 Pessoas" icon={PeopleSvg} />
        </AcessoryWrapper>

        <RentalPeriod>
          <CalendarIcon>
            <Feather name="calendar" size={24} color={theme.color.shape} />
          </CalendarIcon>
          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue>29/01/2023</DateValue>
          </DateInfo>
          <Feather name="chevron-right" size={16} color={theme.color.text} />
          <DateInfo>
            <DateTitle>ATÉ</DateTitle>
            <DateValue>29/02/2023</DateValue>
          </DateInfo>
        </RentalPeriod>

        <RentalDetails>
          <RentalPriceLabel>TOTAL</RentalPriceLabel>
          <RentalPriceDetails>
            <RentalPriceQuota>R$ 580 x3 diárias</RentalPriceQuota>
            <RentalPriceTotal>R$ 2.900</RentalPriceTotal>
          </RentalPriceDetails>
        </RentalDetails>
      </Content>

      <Footer>
        <Button title="Alugar agora" color={theme.color.success} />
      </Footer>
    </Container>
  );
}

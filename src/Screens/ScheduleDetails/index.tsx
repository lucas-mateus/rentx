import React, { useEffect, useState } from "react";
import { Feather } from "@expo/vector-icons";
import { Alert, StatusBar } from "react-native";
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

import { getAccessoryIcon } from "../../utils/getAccessoryIcon";
import { useTheme } from "styled-components";
import { CarDTO } from "../../dtos/CarDTO";
import { format } from "date-fns";
import { getPlataformDate } from "../../utils/getPlataformDate";
import { api } from "../../services/api";

interface Params {
  car: CarDTO;
  dates: string[];
}
interface RentalPeriod {
  start: string;
  end: string;
}

export function ScheduleDetails({ route, navigation }) {
  const [rentalPeriod, setRentalPeriod] = useState<RentalPeriod>(
    {} as RentalPeriod
  );
  const theme = useTheme();
  const { car, dates } = route.params as Params;

  const totalRent = Number(dates.length * car.rent.price);

  async function handleConfirmRental() {
    const schedulesByCar = await api.get(`/schedules_bycars/${car.id}`);
    const unavailable_dates = [
      ...schedulesByCar.data.unavailable_dates,
      ...dates,
    ];

    await api.post(`/schedules_byuser`, {
      user_id: 100,
      car,
      startDate: format(getPlataformDate(new Date(dates[0])), "dd-MM-yyyy"),
      endDate: format(
        getPlataformDate(new Date(dates[dates.length - 1])),
        "dd-MM-yyyy"
      ),
    });

    api
      .put(`/schedules_bycars/${car.id}`, {
        id: car.id,
        unavailable_dates,
      })
      .then(() => {
        navigation.navigate("ScheduleConfirmation");
      })
      .catch(() => Alert.alert("Ops... erro ao agendar carro!"));
  }

  useEffect(() => {
    setRentalPeriod({
      start: format(getPlataformDate(new Date(dates[0])), "dd-MM-yyyy"),
      end: format(
        getPlataformDate(new Date(dates[dates.length - 1])),
        "dd-MM-yyyy"
      ),
    });
  }, []);

  return (
    <Container>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" />
      <Header>
        <BackButton onPress={() => navigation.goBack()} />
      </Header>
      <CarImageSlider>
        <ImageSlider imagesUrl={car.photos} />
      </CarImageSlider>
      <Content>
        <Details>
          <Description>
            <CarBrand>{car.brand}</CarBrand>
            <CarName>{car.name}</CarName>
          </Description>
          <RentDetails>
            <Period>{car.rent.period}</Period>
            <Price>R$ {car.rent.price}</Price>
          </RentDetails>
        </Details>
        <AcessoryWrapper>
          {car.accessories.map((accessory) => (
            <Acessory
              key={accessory.type}
              name={accessory.name}
              icon={getAccessoryIcon(accessory.type)}
            />
          ))}
        </AcessoryWrapper>

        <RentalPeriod>
          <CalendarIcon>
            <Feather name="calendar" size={24} color={theme.color.shape} />
          </CalendarIcon>
          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue>{rentalPeriod.start}</DateValue>
          </DateInfo>
          <Feather name="chevron-right" size={16} color={theme.color.text} />
          <DateInfo>
            <DateTitle>ATÉ</DateTitle>
            <DateValue>{rentalPeriod.end}</DateValue>
          </DateInfo>
        </RentalPeriod>

        <RentalDetails>
          <RentalPriceLabel>TOTAL</RentalPriceLabel>
          <RentalPriceDetails>
            <RentalPriceQuota>
              R$ {car.rent.price} x {dates.length} diárias
            </RentalPriceQuota>
            <RentalPriceTotal>R$ {totalRent}</RentalPriceTotal>
          </RentalPriceDetails>
        </RentalDetails>
      </Content>

      <Footer>
        <Button
          title="Alugar agora"
          color={theme.color.success}
          onPress={handleConfirmRental}
        />
      </Footer>
    </Container>
  );
}

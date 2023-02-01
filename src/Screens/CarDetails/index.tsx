import React from "react";
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
  About,
  AcessoryWrapper,
  Footer,
} from "./styles";

import { CarDTO } from "../../dtos/CarDTO";
import { getAccessoryIcon } from "../../utils/getAccessoryIcon";

interface Params {
  car: CarDTO;
}

export function CarDetails({ route, navigation }) {
  const { car } = route.params as Params;
  function handleSchedule() {
    navigation.navigate("Schedule");
  }
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
        <About>{car.about}</About>
      </Content>
      <Footer>
        <Button title="Escolher período do aluguel" onPress={handleSchedule} />
      </Footer>
    </Container>
  );
}

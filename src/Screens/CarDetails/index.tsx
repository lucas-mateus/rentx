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

import SpeedSvg from "../../assets/Speed.svg";
import GasolineSvg from "../../assets/Gasolina.svg";
import AcelerateSvg from "../../assets/Up.svg";
import ExchangeSvg from "../../assets/Câmbio.svg";
import PowerSvg from "../../assets/Força.svg";
import PeopleSvg from "../../assets/Pessoas.svg";

export function CarDetails({ navigation }) {
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
        <About>
          Este é automóvel desportivo. Surgiu do lendário touro de lide
          indultado na praça Real Maestranza de Sevilla. É um belíssimo carro
          para quem gosta de acelerar.
        </About>
      </Content>
      <Footer>
        <Button title="Escolher período do aluguel" onPress={handleSchedule} />
      </Footer>
    </Container>
  );
}

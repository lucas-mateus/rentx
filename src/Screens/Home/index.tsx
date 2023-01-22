import React from "react";
import { StatusBar } from "react-native";
import { Container, TotalCars, Header } from "./styles";
import Logo from "../../assets/Logotipo.svg";
import { RFValue } from "react-native-responsive-fontsize";

export function Home() {
  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Header>
        <Logo width={RFValue(108)} height={RFValue(12)} />
        <TotalCars>Total de 112 carros</TotalCars>
      </Header>
    </Container>
  );
}

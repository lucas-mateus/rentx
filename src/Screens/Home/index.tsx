import React from "react";
import { StatusBar } from "react-native";
import { Container, TotalCars, Header, CarList } from "./styles";
import Logo from "../../assets/Logotipo.svg";
import { RFValue } from "react-native-responsive-fontsize";
import { Car } from "../../components/Car";

export function Home() {
  const carData = {
    brandCar: "audi",
    carName: "RS 5 Coupé",
    rent: {
      period: "ao dia",
      price: 128,
    },
    thumbnail: "https://www.pngmart.com/files/1/Audi-RS5-Red-PNG.png",
  };
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
      <CarList
        data={[1, 2, 3, 4, 5]}
        renderItem={({ item }) => <Car data={carData} />}
        keyExtractor={(item) => String(item)}
      />
    </Container>
  );
}

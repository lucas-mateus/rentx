import React from "react";
import { RectButtonProps } from "react-native-gesture-handler";
import Gasoline from "../../assets/Gasolina.svg";
import {
  Container,
  Details,
  BrandCar,
  CarName,
  About,
  Rent,
  Period,
  Price,
  Type,
  CarImage,
} from "./styles";

interface CarData {
  brandCar: string;
  carName: string;
  rent: {
    period: string;
    price: number;
  };
  thumbnail: string;
}

interface Props extends RectButtonProps {
  data: CarData;
  onPress: () => void;
}

export function Car({ data, onPress }: Props) {
  return (
    <Container onPress={onPress}>
      <Details>
        <BrandCar>{data.brandCar}</BrandCar>
        <CarName>{data.carName}</CarName>

        <About>
          <Rent>
            <Period>{data.rent.period}</Period>
            <Price>{`R$ ${data.rent.price}`}</Price>
          </Rent>
          <Type>
            <Gasoline />
          </Type>
        </About>
      </Details>
      <CarImage source={{ uri: data.thumbnail }} resizeMode="contain" />
    </Container>
  );
}

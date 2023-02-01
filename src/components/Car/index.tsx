import React from "react";
import { RectButtonProps } from "react-native-gesture-handler";
import { getAccessoryIcon } from "../../utils/getAccessoryIcon";
import { CarDTO } from "../../dtos/CarDTO";

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

interface Props extends RectButtonProps {
  data: CarDTO;
  onPress: () => void;
}

export function Car({ data, onPress }: Props) {
  const MotorType = getAccessoryIcon(data.fuel_type);
  return (
    <Container onPress={onPress}>
      <Details>
        <BrandCar>{data.brand}</BrandCar>
        <CarName>{data.name}</CarName>

        <About>
          <Rent>
            <Period>{data.rent.period}</Period>
            <Price>{`R$ ${data.rent.price}`}</Price>
          </Rent>
          <Type>
            <MotorType />
          </Type>
        </About>
      </Details>
      <CarImage source={{ uri: data.thumbnail }} resizeMode="contain" />
    </Container>
  );
}

import React from "react";
import { useWindowDimensions } from "react-native";
import BrandLogo from "../../assets/Union.svg";
import DoneSvg from "../../assets/Check.svg";

import { Container, Title, Message, Content } from "./styles";

export function ScheduleConfirmation() {
  const { width } = useWindowDimensions();
  return (
    <Container>
      <BrandLogo width={width} />
      <Content>
        <DoneSvg width={80} height={80} />
        <Title>Carro alugado!</Title>
        <Message>
          Agora você só precisa ir {"\n"}
          até a concessionária da RENTX{"\n"}
          pegar o seu automóvel.
        </Message>
      </Content>
    </Container>
  );
}

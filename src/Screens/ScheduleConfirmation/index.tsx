import React from "react";
import { StatusBar, useWindowDimensions } from "react-native";
import BrandLogo from "../../assets/RENTXLOGO.svg";
import DoneSvg from "../../assets/Check.svg";

import { Container, Title, Message, Content } from "./styles";
import { useTheme } from "styled-components";
import { Button } from "../../components/Button";

export function ScheduleConfirmation() {
  const theme = useTheme();
  const { width } = useWindowDimensions();
  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor={theme.color.header}
      />
      <BrandLogo width={width} />
      <Content>
        <DoneSvg width={80} height={80} />
        <Title>Carro alugado!</Title>
        <Message>
          Agora você só precisa ir {"\n"}
          até a concessionária da RENTX{"\n"}
          pegar o seu automóvel.
        </Message>
        <Button title=" OK " color={theme.color.shapeDark} />
      </Content>
    </Container>
  );
}

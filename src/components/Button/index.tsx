import { Container, Title } from "./styles";
import React from "react";

interface Props {
  title: string;
  color?: string;
  onPress: () => void;
}

export function Button({ title, color, onPress }: Props) {
  return (
    <Container onPress={onPress} color={color}>
      <Title>{title}</Title>
    </Container>
  );
}

import { Container, Title } from "./styles";
import React from "react";

interface Props {
  title: string;
  color?: string;
}

export function Button({ title, color, ...rest }: Props) {
  return (
    <Container {...rest} color={color}>
      <Title>{title}</Title>
    </Container>
  );
}

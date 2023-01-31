import React from "react";
import { Container } from "./styles";
import { BorderlessButtonProps } from "react-native-gesture-handler";
import { MaterialIcons } from "@expo/vector-icons";
import { useTheme } from "styled-components";

interface Props extends BorderlessButtonProps {
  color?: string;
  onPress: () => void;
}

export function BackButton({ color, onPress }: Props) {
  const theme = useTheme();
  return (
    <Container onPress={onPress}>
      <MaterialIcons
        name="chevron-left"
        size={24}
        color={color ? color : theme.color.text}
      />
    </Container>
  );
}

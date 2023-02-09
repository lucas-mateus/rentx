import { Container, Title } from "./styles";
import React from "react";
import { ActivityIndicator } from "react-native";
import { useTheme } from "styled-components";

interface Props {
  title: string;
  color?: string;
  onPress: () => void;
  enabled?: boolean;
  loading?: boolean;
}

export function Button({
  title,
  color,
  onPress,
  enabled = true,
  loading = false,
}: Props) {
  const theme = useTheme();
  return (
    <Container
      onPress={onPress}
      color={color}
      enabled={enabled}
      style={{ opacity: enabled === false || loading === true ? 0.5 : 1 }}
    >
      {loading ? (
        <ActivityIndicator color={theme.color.shape} />
      ) : (
        <Title>{title}</Title>
      )}
    </Container>
  );
}

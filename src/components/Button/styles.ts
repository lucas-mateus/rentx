import styled from "styled-components/native";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";

interface ButtonProps extends RectButtonProps {
  color?: string;
}

export const Container = styled(RectButton)<ButtonProps>`
  width: 100%;
  padding: 20px;
  justify-content: center;
  align-items: center;
  background-color: ${({ color, theme }) => (color ? color : theme.color.main)};
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_500};
  font-size: ${RFValue(15)}px;
  color: ${({ theme }) => theme.color.backgroundSecondary};
`;

import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  width: 102px;
  height: 92px;

  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.color.backgroundPrimary};

  padding: 16px;
  margin-bottom: 8px;
`;

export const Name = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_500};
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.color.text};
`;

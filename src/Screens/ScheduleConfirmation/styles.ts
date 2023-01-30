import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  padding-top: 16px;
  background-color: ${({ theme }) => theme.color.header};
`;

export const Content = styled.View`
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_600};
  font-size: ${RFValue(30)}px;
  color: ${({ theme }) => theme.color.backgroundSecondary};
  margin-top: 40px;
`;

export const Message = styled.Text`
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.primary_400};
  font-size: ${RFValue(15)}px;
  color: ${({ theme }) => theme.color.text};
  margin-top: 16px;
  margin-bottom: 24px;
`;

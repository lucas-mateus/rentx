import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.color.backgroundPrimary};
`;
export const TotalCars = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_400};
  color: ${({ theme }) => theme.color.textDetail};
  font-size: ${RFValue(15)}px;
`;

export const Header = styled.View`
  width: 100%;
  height: 113px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 32px 24px 0;
  background-color: ${({ theme }) => theme.color.header};
`;

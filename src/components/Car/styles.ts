import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled(RectButton)`
  width: 100%;
  height: 126px;
  background-color: ${({ theme }) => theme.color.backgroundSecondary};

  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 24px;
  margin-bottom: 16px;
`;

export const Details = styled.View``;

export const BrandCar = styled.Text`
  text-transform: uppercase;
  font-family: ${({ theme }) => theme.fonts.secondary_600};
  color: ${({ theme }) => theme.color.textDetail};
  font-size: ${RFValue(10)}px;
`;

export const CarName = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_600};
  color: ${({ theme }) => theme.color.title};
  font-size: ${RFValue(16)}px;
`;

export const About = styled.View`
  flex-direction: row;
  margin-top: 16px;
  align-items: center;
`;

export const Rent = styled.View`
  margin-right: 24px;
`;

export const Period = styled.Text`
  text-transform: uppercase;
  font-family: ${({ theme }) => theme.fonts.secondary_600};
  color: ${({ theme }) => theme.color.textDetail};
  font-size: ${RFValue(10)}px;
`;

export const Price = styled.Text`
  text-transform: uppercase;
  font-family: ${({ theme }) => theme.fonts.secondary_600};
  color: ${({ theme }) => theme.color.main};
  font-size: ${RFValue(16)}px;
`;

export const Type = styled.View``;

export const CarImage = styled.Image`
  width: 160px;
  height: 92px;
`;

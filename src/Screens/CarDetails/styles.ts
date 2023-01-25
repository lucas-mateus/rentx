import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.color.backgroundSecondary};
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-left: 24px;
  position: absolute;
  margin-top: ${getStatusBarHeight() + 8}px;
`;

export const CarImageSlider = styled.View`
  margin-top: ${getStatusBarHeight() + 8}px;
`;

export const Content = styled.ScrollView.attrs({
  contentContainerStyle: {
    padding: 24,
  },
  showsVerticalScrollIndicator: false,
})``;

export const Details = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 24px;
`;

export const Description = styled.View``;

export const CarBrand = styled.Text`
  text-transform: uppercase;
  font-family: ${({ theme }) => theme.fonts.secondary_600};
  color: ${({ theme }) => theme.color.textDetail};
  font-size: ${RFValue(10)}px;
`;

export const CarName = styled.Text`
  text-transform: uppercase;
  font-family: ${({ theme }) => theme.fonts.secondary_600};
  color: ${({ theme }) => theme.color.title};
  font-size: ${RFValue(24)}px;
`;

export const RentDetails = styled.View``;

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

export const About = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_400};
  color: ${({ theme }) => theme.color.text};
  font-size: ${RFValue(15)}px;
  text-align: justify;
  line-height: ${RFValue(25)}px;

  margin-top: 24px;
`;

export const AcessoryWrapper = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 16px;
`;

import {
  getBottomSpace,
  getStatusBarHeight,
} from "react-native-iphone-x-helper";
import { RFValue } from "react-native-responsive-fontsize";
import { Colors } from "react-native/Libraries/NewAppScreen";
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

export const AcessoryWrapper = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 16px;
`;

export const Footer = styled.View`
  width: 100%;
  padding: 24px 24px ${getBottomSpace() + 24}px;
  background-color: ${({ theme }) => theme.color.backgroundPrimary};
`;

export const RentalPeriod = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-top: 40px;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.color.line};
  padding-bottom: 16px;
`;

export const CalendarIcon = styled.View`
  width: 48px;
  height: 48px;
  background-color: ${({ theme }) => theme.color.main};
  justify-content: center;
  align-items: center;
`;

export const DateInfo = styled.View`
  padding: 0 10px;
`;

export const DateTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  font-size: ${RFValue(10)}px;
  color: ${({ theme }) => theme.color.textDetail};
`;

export const DateValue = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  font-size: ${RFValue(15)}px;
  color: ${({ theme }) => theme.color.title};
`;

export const RentalDetails = styled.View`
  width: 100%;
  padding-top: 16px;
`;

export const RentalPriceLabel = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  font-size: ${RFValue(10)}px;
  color: ${({ theme }) => theme.color.textDetail};
`;

export const RentalPriceDetails = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const RentalPriceQuota = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  font-size: ${RFValue(15)}px;
  color: ${({ theme }) => theme.color.title};
`;

export const RentalPriceTotal = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  font-size: ${RFValue(24)}px;
  color: ${({ theme }) => theme.color.success};
`;

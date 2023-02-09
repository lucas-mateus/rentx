import { FlatList } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { CarDTO } from "../../dtos/CarDTO";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.color.backgroundPrimary};
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFValue(240)}px;
  padding: 24px;
  background-color: ${({ theme }) => theme.color.header};
  justify-content: center;

  padding-top: ${getStatusBarHeight() + 32}px;
`;

export const Title = styled.Text`
  margin-top: 32px;
  color: ${({ theme }) => theme.color.shape};
  font-size: ${RFValue(30)}px;
  font-family: ${({ theme }) => theme.fonts.secondary_600};
`;

export const SubtitleHeader = styled.Text`
  margin-top: 8px;
  color: ${({ theme }) => theme.color.shape};
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.secondary_400};
`;

export const Content = styled.View`
  width: 100%;
  padding: 24px;
`;

export const Appointments = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 24px;
`;

export const AppointmentTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_400};
  font-size: ${RFValue(15)}px;
  color: ${({ theme }) => theme.color.textDetail};
`;

export const AppointmentQuantity = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_600};
  font-size: ${RFValue(15)}px;
  color: ${({ theme }) => theme.color.title};
`;

export const CarWrapper = styled.View`
  width: 100%;
  margin-bottom: 16px;
`;

export const CarFooter = styled.View`
  margin-top: -10px;
  height: ${RFValue(40)}px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.color.backgroundSecondary};
  padding: 14px 24px;
`;

export const CarFooterTitle = styled.Text`
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.textDetail};
  font-family: ${({ theme }) => theme.fonts.secondary_400};
  font-size: ${RFValue(10)}px;
`;

export const Period = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const StartDate = styled.Text`
  color: ${({ theme }) => theme.color.title};

  font-size: ${RFValue(13)}px;
  font-family: ${({ theme }) => theme.fonts.primary_500};
`;

export const EndDate = styled.Text`
  color: ${({ theme }) => theme.color.title};

  font-size: ${RFValue(13)}px;
  font-family: ${({ theme }) => theme.fonts.primary_500};
`;

export const CarList = styled(FlatList as new () => FlatList<CarDTO>).attrs({
  contentContainerStyle: {
    marginTop: 8,
  },
  showsVerticalScrollIndicator: false,
})``;

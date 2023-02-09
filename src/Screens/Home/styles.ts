import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { FlatList } from "react-native";
import { CarDTO } from "../../dtos/CarDTO";
import { RectButton } from "react-native-gesture-handler";

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

export const CarList = styled(FlatList as new () => FlatList<CarDTO>).attrs({
  contentContainerStyle: {
    paddingHorizontal: 16,
    marginTop: 16,
  },
  showsVerticalScrollIndicator: false,
})``;

export const MyCarsButton = styled(RectButton)`
  width: 60px;
  height: 60px;
  background-color: ${({ theme }) => theme.color.main};
  align-items: center;
  justify-content: center;
  border-radius: 50px;

  position: absolute;
  bottom: 16px;
  right: 24px;
`;

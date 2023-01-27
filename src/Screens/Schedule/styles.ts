import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";

interface DateValueProps {
  selected: boolean;
}

export const Container = styled.View`
  flex: 1;
  width: 100%;
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFValue(300)}px;
  padding: 24px;
  background-color: ${({ theme }) => theme.color.header};
  justify-content: center;

  padding-top: ${getStatusBarHeight() + 32}px;
`;

export const Title = styled.Text`
  margin-top: 24px;
  font-family: ${({ theme }) => theme.fonts.secondary_600};
  font-size: ${RFValue(30)}px;
  color: ${({ theme }) => theme.color.shape};
`;

export const RentalPeriod = styled.View`
  width: 100%;
  margin: 24px 0;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const DateInfo = styled.View`
  width: 30%;
`;

export const DateTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  font-size: ${RFValue(10)}px;
  color: ${({ theme }) => theme.color.text};
`;

export const DateValue = styled.Text<DateValueProps>`
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  font-size: ${RFValue(15)}px;
  color: ${({ theme }) => theme.color.shape};

  ${({ theme, selected }) =>
    !selected &&
    css`
      border-bottom-width: 1px;
      border-color: ${theme.color.text};
    `}
`;

export const Content = styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingBottom: 24,
  },
  showsScrollVerticalIndicator: false,
})``;

export const Footer = styled.View`
  width: 100%;
  padding: 24px;
`;

import { getStatusBarHeight } from "react-native-iphone-x-helper";
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

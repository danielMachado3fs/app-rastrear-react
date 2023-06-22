import { Animated, Dimensions } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import theme from "../../core/styles/theme";

const { width, height } = Dimensions.get("window");

export const LOGO_WIDTH = 220;
export const LOGO_HEIGHT = 40;
export const DOT_SIZE = 30;
export const TICKER_HEIGHT = 16;
export const CIRCLE_SIZE = width * 0.45;

const colorPrimary = theme.colors.primary;

export const Container = styled.View`
  flex: 1;
  height: ${height * 0.5}px;
  background-color: #fff;
  border-radius: 20px;
`;

export const ItemStyle = styled.View`
  width: ${width}px;
  height: ${height * 0.5}px;
  align-items: center;
  justify-content: center;
`;

export const ImageStyle = styled(Animated.Image)`
  width: ${width * 0.75}px;
  height: ${width * 0.75}px;
  /* flex: 0.7, */
`;

export const TextContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0px 14px;
  /* background-color: red; */
  /* flex: 0.4, */
`;

export const Heading = styled(Animated.Text)`
  color: #000;
  font-size: ${RFValue(20)}px;
  font-family: ${({ theme }) => theme.fonts.primary_700};
  text-transform: capitalize;
  /* fontweight: "800"; */
  margin-bottom: 5px;
`;

export const DescriptionPlate = styled(Animated.Text)`
  color: #ccc;
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.primary_600};
  /* margin-left: 4px; */
  /* fontWeight: "600"; */
  /* text-align: left; */
  /* padding: 10; */
  /* line-height: ${RFValue(16)}px; */
`;

export const PaginationContainer = styled.View`
  position: absolute;
  right: 20px;
  top: 15px;
  flex-direction: row;
  height: ${DOT_SIZE}px;
`;

export const PaginationDot = styled.View`
  width: ${DOT_SIZE * 0.3}px;
  height: ${DOT_SIZE * 0.3}px;
  border-radius: ${DOT_SIZE * 0.15}px;
`;

export const PaginationDotContainer = styled.View`
  width: ${DOT_SIZE}px;
  align-items: center;
  justify-content: center;
`;

export const CurrentIndex = styled.Text`
  color: ${({ theme }) => theme.colors.placeholderText};
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.primary_600};
`;

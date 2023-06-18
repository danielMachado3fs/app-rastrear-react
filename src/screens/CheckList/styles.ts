import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

import styled from "styled-components/native";
import theme from "../../core/styles/theme";

const colorPrimary = theme.colors.primary;

export const Container = styled.ScrollView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background_secondary};
`;
export const Form = styled.View`
  padding: 0px 16px;
`;

export const Footer = styled.View`
  padding: 16px;
  margin-bottom: ${RFValue(10)}px;
`;

export const Box = styled.View`
  margin-bottom: ${RFValue(20)}px;
`;

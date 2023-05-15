import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.ScrollView`
  flex: 1;
  padding: 0px 16px;
`;

export const Form = styled.View``;

export const Title = styled.Text`
  font-size: ${RFValue(20)}px;
  font-family: ${({ theme }) => theme.fonts.primary_700};
`;

export const SubTitle = styled.Text`
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.primary_300};
  margin: 0px 0px 20px;
`;

export const Label = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.primary_500};
  margin: 0px 0px 6px;
`;

export const BoxSized = styled.View`
  height: 10px;
`;

export const Footer = styled.View`
  margin-top: ${RFValue(30)}px;
`;

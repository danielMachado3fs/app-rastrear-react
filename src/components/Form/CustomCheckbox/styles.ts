import styled from "styled-components/native";
import Checkbox from "expo-checkbox";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View``;

export const WrapCheckBox = styled.View`
  flex-direction: row;
  gap: ${RFValue(10)}px;
  align-items: center;
  justify-content: space-between;
`;

export const CheckBox = styled(Checkbox)``;

export const Title = styled.Text`
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.primary_500};
`;

export const Error = styled.Text`
  padding-top: 5px;
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.primary_400};
  color: red;
`;

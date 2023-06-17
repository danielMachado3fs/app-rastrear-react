import { RFValue } from "react-native-responsive-fontsize";
import { TextInput } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  border-radius: 10px;
  padding: 16px;
  background-color: ${({ theme }) => theme.colors.secondary};
  flex-direction: row;
  align-items: center;
`;

export const CustomTextInput = styled(TextInput)`
  /* width: 100%; */
  flex: 1;
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.primary_500};
`;

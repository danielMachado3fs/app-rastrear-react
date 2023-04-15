import { RFValue } from "react-native-responsive-fontsize";
import { TextInput } from "react-native";
import styled from "styled-components/native";

export const Container = styled(TextInput)`
  width: 100%;
  border-radius: 10px;
  padding: 16px;
  background-color: ${({ theme }) => theme.colors.secondary};
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.primary_500};
`;

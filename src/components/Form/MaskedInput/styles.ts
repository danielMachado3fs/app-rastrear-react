import { RFValue } from "react-native-responsive-fontsize";
import { TextInput } from "react-native";
import styled from "styled-components/native";
import { TextInputMask } from "react-native-masked-text";

export const Container = styled(TextInputMask)`
  width: 100%;
  border-radius: 10px;
  padding: 16px;
  background-color: ${({ theme }) => theme.colors.secondary};
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.primary_500};
`;

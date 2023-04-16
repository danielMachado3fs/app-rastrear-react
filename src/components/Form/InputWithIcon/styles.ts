import { RFValue } from "react-native-responsive-fontsize";
import { TextInput, View } from "react-native";
import styled from "styled-components/native";
import { FontAwesome5 } from "@expo/vector-icons";

export const InputIcon = styled(TextInput)`
  background-color: ${({ theme }) => theme.colors.secondary};
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.primary_500};
  width: 100%;
`;

export const Container = styled(View)`
  width: 100%;
  padding: 16px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.secondary};
  flex-direction: row;
`;

export const Icon = styled(FontAwesome5)`
  align-self: center;
  padding-right: 20px;
`;

export const Error = styled.Text`
  font-size: 15px;
  color: red;
`;

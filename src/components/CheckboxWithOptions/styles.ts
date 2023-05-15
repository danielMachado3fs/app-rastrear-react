import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  /* background-color: gray; */
`;

export const Label = styled.Text`
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.primary_700};
`;

export const Options = styled.View`
  padding-top: ${RFValue(12)}px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const Error = styled.Text`
  padding-top: 5px;
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.primary_400};
  color: red;
`;

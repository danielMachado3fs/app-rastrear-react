import { StatusBar } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  padding: ${StatusBar.currentHeight! - 10}px 14px 0px 10px;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background_secondary};
`;

export const Profile = styled.View`
  justify-content: center;
  align-items: center;
  max-width: 80px
`;

export const Username = styled.Text`
  top: -4px;
  font-size: ${RFValue(11)}px;
  font-family: ${({ theme }) => theme.fonts.primary_700};
  text-align: center
`;

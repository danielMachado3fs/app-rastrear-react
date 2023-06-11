import styled from "styled-components/native";
import { StatusBar } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  padding: ${StatusBar.currentHeight! - 10}px 0px 0px;
  justify-content: space-between;
  align-items: center;
  /* margin: 0px 0px 10px; */
  /* background-color: #00ff; */
`;

export const Profile = styled.View`
  justify-content: center;
  align-items: center;
`;

export const Username = styled.Text`
  top: -6px;
  font-size: ${RFValue(11)}px;
  font-family: ${({ theme }) => theme.fonts.primary_700};
`;

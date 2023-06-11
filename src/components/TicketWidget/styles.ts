import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
`;

export const TicketItemContainer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  padding: 16px;
  background-color: #fff;
  border-radius: 20px;
  align-items: center;
`;

export const TicketInfo = styled.View``;

export const TicketName = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.primary_700};
  color: #000;
  margin-bottom: 6px;
`;

export const TicketDate = styled.Text`
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.primary_700};
  color: ${({ theme }) => theme.colors.text_detail};
`;

export const TicketVehicle = styled.Text`
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.primary_700};
  color: ${({ theme }) => theme.colors.text_detail};
`;

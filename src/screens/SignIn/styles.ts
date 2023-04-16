import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.ScrollView`
  flex: 1;
  padding: 20px;
  aling-items: center;
`;

export const Header = styled.View`
  background-color: ${({ theme }) => theme.colors.primary};
  width: 100%;
  height: ${RFValue(113)}px;
  align-items: center;
  justify-content: flex-end;
  padding-bottom: 19px;
`;

export const Form = styled.View`
  padding: 0 10px;
  gap: 24px;
  width: 100%;
  justify-content: space-between;
`;

export const Fields = styled.View`
  margin-bottom: 16px;
`;

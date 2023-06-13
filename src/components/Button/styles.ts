import { TouchableOpacityProps } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

interface ButtonProps extends TouchableOpacityProps {
  color: string;
  height?: number;
}

export const Container = styled.TouchableOpacity<ButtonProps>`
  width: 100%;
  /* height: ${({ height }) => height ?? 0}; */
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  padding: 10px;
  background: ${({ color }) => color};
`;

export const ButtonInside = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: ${RFValue(12)}px;
  padding: ${RFValue(10)}px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.shape_light};
  font-family: ${({ theme }) => theme.fonts.primary_700};
  font-size: ${RFValue(16)}px;
`;

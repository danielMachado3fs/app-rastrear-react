import { RFValue } from "react-native-responsive-fontsize";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import styled from "styled-components/native";
import { TouchableOpacityProps } from "react-native";

interface ButtonProps extends TouchableOpacityProps {
  color: string;
}

export const Container = styled.TouchableOpacity<ButtonProps>`
  width: 100%;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  padding: 12px;
  background: ${({ color }) => color};
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.shape_light};
  font-family: ${({ theme }) => theme.fonts.primary_700};
  font-size: ${RFValue(16)}px;
`;

import { RFPercentage } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import theme from "../../core/styles/theme";

const colorPrimary = theme.colors.primary;

interface PropsView {
  height: number;
}

interface PropsLoadingIndicator {
  height: number;
}

export const Container = styled.View<PropsView>`
  justify-content: center;
  height: ${({ height }) => RFPercentage(height)}px;
  align-items: center;
  width: 100%;
`;

export const LoadingIndicator = styled.ActivityIndicator.attrs(() => ({
  color: colorPrimary,
}))``;

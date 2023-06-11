import React, { ReactNode } from "react";

import { Container, Title, ButtonInside } from "./styles";
import { RectButtonProps } from "react-native-gesture-handler";
import { useTheme } from "styled-components";
import { TouchableOpacityProps } from "react-native";
import { ActivityIndicator } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

interface Props extends TouchableOpacityProps {
  title: string;
  color: string;
  onPress: () => void;
  disabled: boolean;
  isSubmitting?: boolean;
  height?: number;
  IconSVG?: ReactNode;
}

export function Button({
  title,
  color,
  onPress,
  disabled,
  isSubmitting,
  height,
  IconSVG,
  ...rest
}: Props) {
  const theme = useTheme();
  return (
    <Container
      height={height}
      activeOpacity={0.7}
      onPress={onPress}
      theme={theme}
      color={color}
      disabled={disabled || isSubmitting}
    >
      {isSubmitting ? (
        <ActivityIndicator
          size={RFValue(26)}
          color={theme.colors.shape_light}
        />
      ) : (
        <ButtonInside>
          {IconSVG}
          <Title>{title}</Title>
        </ButtonInside>
      )}
    </Container>
  );
}

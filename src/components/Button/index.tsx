import React, { ReactNode } from "react";

import { ActivityIndicator, TouchableOpacityProps } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { useTheme } from "styled-components";
import { ButtonInside, Container, Title } from "./styles";

interface Props extends TouchableOpacityProps {
  title: string;
  color: string;
  onPress: () => void;
  disabled: boolean;
  isSubmitting?: boolean;
  height?: number;
  IconSVG?: ReactNode;
  padding?: number;
}

export function Button({
  title,
  color,
  onPress,
  disabled,
  isSubmitting,
  height,
  padding,
  IconSVG,
  ...rest
}: Props) {
  const theme = useTheme();
  return (
    <Container
      height={height}
      padding={padding}
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

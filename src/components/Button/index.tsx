import React from "react";

import { Container, Title } from "./styles";
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
}

export function Button({
  title,
  color,
  onPress,
  disabled,
  isSubmitting,
  ...rest
}: Props) {
  const theme = useTheme();
  return (
    <Container
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
        <Title>{title}</Title>
      )}
    </Container>
  );
}

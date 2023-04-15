import React from "react";

import { Container, Title } from "./styles";
import { RectButtonProps } from "react-native-gesture-handler";
import { useTheme } from "styled-components";

interface Props extends RectButtonProps {
  title: string;
  color: string;
  onPress: () => void;
}

export function Button({ title, color, onPress, ...rest }: Props) {
  rest.underlayColor;
  const theme = useTheme();
  return (
    <Container
      activeOpacity={0.7}
      onPress={onPress}
      theme={theme}
      color={color}
    >
      <Title>{title}</Title>
    </Container>
  );
}

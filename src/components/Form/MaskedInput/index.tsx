import React from "react";

import { Container } from "./styles";
import { useTheme } from "styled-components";
import { TextInputMaskProps } from "react-native-masked-text";

interface Props extends TextInputMaskProps {
  hasError: boolean;
}

export function MaskedInput({ hasError, ...rest }: Props) {
  const theme = useTheme();
  return (
    <Container
      {...rest}
      placeholderTextColor={theme.colors.placeholderText}
      style={[
        { borderWidth: 1, borderColor: hasError ? "red" : "transparent" },
      ]}
    />
  );
}

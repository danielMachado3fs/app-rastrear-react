import React from "react";

import { Container } from "./styles";
import { useTheme } from "styled-components";
import { TextInputMaskProps } from "react-native-masked-text";

type Props = TextInputMaskProps;

export function MaskedInput({ ...rest }: Props) {
  const theme = useTheme();
  return (
    <Container {...rest} placeholderTextColor={theme.colors.placeholderText} />
  );
}

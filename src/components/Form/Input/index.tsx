import React from "react";

import { Container } from "./styles";
import { TextInput, TextInputProps } from "react-native";
import { useTheme } from "styled-components";

type Props = TextInputProps;

export function Input({ ...rest }: Props) {
  const theme = useTheme();
  return <Container {...rest} placeholderTextColor={theme.colors.primary} />;
}

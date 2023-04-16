import React from "react";
import { TextInputProps, TouchableWithoutFeedback } from "react-native";
import { useTheme } from "styled-components";
import { Container, Icon, InputIcon, Error } from "./styles";
import { InputProps } from "../../../utils/types";

interface Props extends TextInputProps {
  icon?: string;
}

export function Input({ icon, error, ...rest }: Props & InputProps) {
  const theme = useTheme();
  return (
    <>
      <Container>
        <TouchableWithoutFeedback>
          <Icon name={icon} size={20} color={theme.colors.primary} />
        </TouchableWithoutFeedback>
        <InputIcon {...rest} placeholderTextColor={theme.colors.placeholder} />
      </Container>
      {error && <Error>{error}</Error>}
    </>
  );
}

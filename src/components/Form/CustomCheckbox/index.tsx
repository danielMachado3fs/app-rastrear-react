import React from "react";

import { CheckboxProps } from "expo-checkbox";
import { CheckBox, Container, Title, Error, WrapCheckBox } from "./styles";
import theme from "../../../core/styles/theme";

interface Props extends CheckboxProps {
  title: string;
  hasError: boolean;
}

export function CustomCheckbox({ title, hasError, ...rest }: Props) {
  return (
    <Container>
      <WrapCheckBox>
        <CheckBox {...rest} color={hasError ? "red" : theme.colors.primary} />
        <Title hasError={hasError}>{title}</Title>
      </WrapCheckBox>
    </Container>
  );
}

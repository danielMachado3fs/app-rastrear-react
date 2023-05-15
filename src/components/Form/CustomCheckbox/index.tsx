import React from "react";

import { CheckboxProps } from "expo-checkbox";
import { CheckBox, Container, Title, Error, WrapCheckBox } from "./styles";
import theme from "../../../core/styles/theme";

interface Props extends CheckboxProps {
  title: string;
}

export function CustomCheckbox({ title, ...rest }: Props) {
  return (
    <Container>
      <WrapCheckBox>
        <CheckBox {...rest} color={theme.colors.primary} />
        <Title>{title}</Title>
      </WrapCheckBox>
    </Container>
  );
}

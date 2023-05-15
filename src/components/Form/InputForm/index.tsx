import React from "react";
import { TextInputProps } from "react-native";

import { Container, Error } from "./styles";
import { Input } from "../Input";

interface Props extends TextInputProps {
  error?: string;
}

export function InputForm({ error, ...rest }: Props) {
  return (
    <Container>
      <Input {...rest} />
      {error != null && <Error>{error}</Error>}
    </Container>
  );
}

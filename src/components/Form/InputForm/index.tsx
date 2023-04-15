import React from "react";
import { TextInputProps } from "react-native";

import { Container, Error } from "./styles";

import { Controller, Control } from "react-hook-form";
import { Input } from "../Input";

interface Props extends TextInputProps {
  control: Control;
  error: string;
  name: string;
}

export function InputForm({ control, name, error, ...rest }: Props) {
  return (
    <Container>
      <Controller
        control={control}
        render={({ field: { onChange, value } }) => <Input {...rest} />}
        name={name}
      />
      {error && <Error>{error}</Error>}
    </Container>
  );
}

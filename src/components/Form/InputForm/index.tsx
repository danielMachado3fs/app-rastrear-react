import React from "react";
import { TextInputProps } from "react-native";

import { Container, Error } from "./styles";

import { Controller } from "react-hook-form";
import { Input } from "../InputWithIcon";
import { InputProps } from "../../../utils/types";

interface Props extends TextInputProps {
  icon?: string;
}

export function InputForm({
  control,
  name,
  error,
  icon,
  ...rest
}: Props & InputProps) {
  return (
    <Container>
      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          <Input {...rest} value={value} onChangeText={onChange} icon={icon} />
        )}
        name={name}
      />
      {error && <Error>{error}</Error>}
    </Container>
  );
}

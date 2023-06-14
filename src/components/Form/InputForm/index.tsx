import React, { useState } from "react";
import { TextInputProps } from "react-native";

import { Container, Error } from "./styles";
import { Input } from "../Input";

interface Props extends TextInputProps {
  error?: string;
  onTogglePasswordVisibility?: (visible: boolean) => void;
  isPasswordInput?: boolean;
  isVisiblePassword?: boolean;
}

export function InputForm({
  isPasswordInput,
  isVisiblePassword,
  error,
  onTogglePasswordVisibility,
  ...rest
}: Props) {
  const [hidePassword, setHidePassword] = useState(true);

  const handleTogglePassword = (visible: boolean) => {
    setHidePassword(visible);
  };

  return (
    <Container>
      <Input
        {...rest}
        isPasswordInput={isPasswordInput}
        secureTextEntry={hidePassword}
        onTogglePasswordVisibility={handleTogglePassword}
        hasError={error ? true : false}
      />
      {error != null && error != "" && <Error>{error}</Error>}
    </Container>
  );
}

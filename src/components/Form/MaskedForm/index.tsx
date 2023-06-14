import React from "react";
import { Container, Error } from "./styles";

import { MaskedInput } from "../MaskedInput";
import { TextInputMaskProps } from "react-native-masked-text";

interface Props extends TextInputMaskProps {
  error?: string;
}

export function MaskedForm({ error, ...rest }: Props) {
  return (
    <Container>
      <MaskedInput {...rest} hasError={error ? true : false} />

      {error != null && error != "" && <Error>{error}</Error>}
    </Container>
  );
}

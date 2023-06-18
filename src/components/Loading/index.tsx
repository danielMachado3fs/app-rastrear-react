import React from "react";

import { Container, LoadingIndicator } from "./styles";

type Props = {
  height: number;
  size: number;
};

export function Loading({ height, size }: Props) {
  return (
    <Container height={height}>
      <LoadingIndicator size={size} />
    </Container>
  );
}

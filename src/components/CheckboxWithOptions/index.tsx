import React from "react";

import { useField } from "formik";
import { CustomCheckbox } from "../Form/CustomCheckbox";
import { Container, Error, Label, Options } from "./styles";

type Options = { sim: "Sim"; nao: "Não" };
interface Props {
  fieldName: string;
  label: string;
}

export function CheckboxWithOptions({ fieldName, label, ...rest }: Props) {
  const [field, meta, helpers] = useField(fieldName);
  const options: Options = { sim: "Sim", nao: "Não" };
  return (
    <Container>
      <>
        <Label>{label}</Label>
      </>
      <Options>
        <CustomCheckbox
          hasError={meta.touched && meta.error ? true : false}
          title="Sim"
          value={meta.value == options.sim}
          onValueChange={e => helpers.setValue(options.sim)}
        />

        <CustomCheckbox
          hasError={meta.touched && meta.error ? true : false}
          title="Não"
          value={meta.value == options.nao}
          onValueChange={e => helpers.setValue(options.nao)}
        />
      </Options>
      {meta.touched && meta.error && (
        <>
          <Error>{meta.error}</Error>
        </>
      )}
    </Container>
  );
}

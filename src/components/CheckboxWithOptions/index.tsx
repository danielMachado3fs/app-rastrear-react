import React from "react";

import { Container, Label, Options, Error } from "./styles";
import { CustomCheckbox } from "../Form/CustomCheckbox";
import { FormikFormProps, FormikProps, useField } from "formik";

type Options = { ok: "Ok"; ruim: "Ruim" };
interface Props {
  fieldName: string;
  label: string;
}

export function CheckboxWithOptions({ fieldName, label, ...rest }: Props) {
  const [field, meta, helpers] = useField(fieldName);
  const options: Options = { ok: "Ok", ruim: "Ruim" };

  return (
    <Container>
      <>
        <Label>{label}</Label>
      </>
      <Options>
        <CustomCheckbox
          title="Ok"
          value={meta.value == options.ok}
          onValueChange={e => helpers.setValue(options.ok)}
        />

        <CustomCheckbox
          title="Ruim"
          value={meta.value == options.ruim}
          onValueChange={e => helpers.setValue(options.ruim)}
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

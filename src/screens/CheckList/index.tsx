import React from "react";

import { Formik } from "formik";
import * as yup from "yup";
import { Button } from "../../components/Button";
import { CheckboxWithOptions } from "../../components/CheckboxWithOptions";
import { Header } from "../../components/Header";
import theme from "../../core/styles/theme";
import { Box, Container, Footer, Form } from "./styles";

const checklistValidationSchema = yup.object().shape({
  tires: yup
    .string()
    .oneOf(["Ok", "Ruim"])
    .required("Avaliação dos pneus são obrigatorio "),
  oilLevel: yup
    .string()
    .oneOf(["Ok", "Ruim"])
    .required("Avaliação do Nível do Oleo é obrigatorio "),
  externalLamps: yup
    .string()
    .oneOf(["Ok", "Ruim"])
    .required("Avaliação das Lâmpadas externas são obrigatorio "),
});

interface MyFormValues {
  tires: "Ok" | "Ruim" | null;
  oilLevel: "Ok" | "Ruim" | null;
  externalLamps: "Ok" | "Ruim" | null;
}

export function CheckList() {
  const initialValues: MyFormValues = {
    tires: null,
    oilLevel: null,
    externalLamps: null,
  };

  return (
    <Container>
      {/* Header */}
      <Header />

      <Formik
        initialValues={initialValues}
        validationSchema={checklistValidationSchema}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            console.log({ values });

            console.log(JSON.stringify(values, null, 2));

            actions.setSubmitting(false);
          }, 1000);
        }}
      >
        {({
          handleChange,
          handleBlur,
          setFieldTouched,
          setFieldValue,
          handleSubmit,
          values,
          errors,
          isValid,
          touched,
          isSubmitting,
        }) => (
          <Form>
            <Box>
              <CheckboxWithOptions fieldName="tires" label="Pneus" />
            </Box>
            <Box>
              <CheckboxWithOptions fieldName="oilLevel" label="Nível do Oleo" />
            </Box>
            <Box>
              <CheckboxWithOptions
                fieldName="externalLamps"
                label="Lâmpadas externas"
              />
            </Box>
            {/* Button */}
            <Footer>
              <Button
                color={
                  !isValid ? theme.colors.placeholderText : theme.colors.primary
                }
                title="Concluir checklist"
                onPress={handleSubmit}
                disabled={!isValid}
                isSubmitting={isSubmitting}
              />
            </Footer>
          </Form>
        )}
      </Formik>
    </Container>
  );
}

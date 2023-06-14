/**
 * CheckList Screen
 *
 * Esse componente renderiza um formulário de checklist onde os usuários
 * podem avaliar diferentes itens.
 * Usa Formik para gerenciamento e validação de formulários com esquema yup.
 */

import { Formik } from "formik";
import React from "react";
import * as yup from "yup";
import { Button } from "../../components/Button";
import { CheckboxWithOptions } from "../../components/CheckboxWithOptions";
import { Header } from "../../components/Header";
import theme from "../../core/styles/theme";
import { Box, Container, Footer, Form } from "./styles";
import { useRoute } from "@react-navigation/native";

/* 
Define o esquema de validação para os campos de de pneu, 
lampadas externas e oleousando yup 
*/
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

// Define a interface dos valores do formulario
interface MyFormValues {
  tires: "Ok" | "Ruim" | null;
  oilLevel: "Ok" | "Ruim" | null;
  externalLamps: "Ok" | "Ruim" | null;
}

interface Params {
  user: any;
}

export function CheckList() {
  const route = useRoute();
  const { user } = route.params as Params;

  // Define os valores iniciais dos campos de pneu, lampadas externas e oleo
  const initialValues: MyFormValues = {
    tires: null,
    oilLevel: null,
    externalLamps: null,
  };

  return (
    <Container>
      <Header user={user} />
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

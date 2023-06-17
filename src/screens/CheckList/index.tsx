/**
 * CheckList Screen
 *
 * Esse componente renderiza um formulário de checklist onde os usuários
 * podem avaliar diferentes itens.
 * Usa Formik para gerenciamento e validação de formulários com esquema yup.
 */

import { useRoute } from "@react-navigation/native";
import { Formik, } from "formik";
import React, { useEffect, useState } from "react";
import * as yup from "yup";
import { Button } from "../../components/Button";
import { CheckboxWithOptions } from "../../components/CheckboxWithOptions";
import { Header } from "../../components/Header";
import theme from "../../core/styles/theme";
import { IChecklist, IChecklistOptions, TypesVehicles } from "../../core/types/common";
import { api } from "../../lib/axios";
import { Box, Container, Footer, Form } from "./styles";

/* 
Define o esquema de validação para os campos de de pneu, 
lampadas externas e oleousando yup 
*/
const checklistValidationSchema = yup.object().shape({
  tires: yup
    .string()
    .oneOf(["Sim", "Não"])
    .required("Avaliação dos pneus são obrigatorio "),
  oilLevel: yup
    .string()
    .oneOf(["Sim", "Não"])
    .required("Avaliação do Nível do Oleo é obrigatorio "),
  externalLamps: yup
    .string()
    .oneOf(["Sim", "Não"])
    .required("Avaliação das Lâmpadas externas são obrigatorio "),
  
});

// Define a interface dos valores do formulario
interface MyFormValues {
  tires: "Sim" | "Não" | null;
  oilLevel: "Sim" | "Não" | null;
  externalLamps: "Sim" | "Não" | null;
}

interface Params {
  user: any;
}

//Busca a lista de opções do checklist na api de acordo com o tipo de veiculo
async function fetchData(tipoVeiculo: TypesVehicles) {
  try {
    const response = await api.get(`/checklist/${tipoVeiculo}`);
    if (response.data.id) return response.data;
    return [];
  } catch (erro) {
    console.log(erro);
  }
}

export function CheckList() {
  const route = useRoute();
  const { user } = route.params as Params;
  const [opcoes, setOpcoes] = useState<IChecklistOptions[]>([])
  const [validationSchema, setValidationSchema] = useState<yup.ISchema<any>>()
  const [schemaInitialValues, setSchemaInitialValues] = useState({})
  // const schemaInitialValues: any = {};

  useEffect(() => {
    fetchData('passeio').then((checklist: IChecklist) => {
      setOpcoes(checklist.options);
      // setValidationSchema(buildSchema(opcoes))
    })
  }, [])

  // let validationSchema = yup.object().shape({});

  useEffect(() => {
    // Atualize o initialValues e validationSchema com base nos dados da API
    const schema: any = {};
    let newInitialValues: any = {};

    // Crie campos dinâmicos com base nos dados da API
    opcoes.forEach(field => {
      newInitialValues[field.fileName] = null;
      schema[field.fileName] = yup
      .string()
      .oneOf(["Sim", "Não"])
      .required()
    });

    let newValidationSchemaFields = yup.object().shape(schema);

    // Atualize o estado do Formik para aplicar as alterações
    // setFieldValue('initialValues', newInitialValues);
    // setFieldValue('validationSchema', validationSchema);
    setValidationSchema(newValidationSchemaFields)
    setSchemaInitialValues(newInitialValues)
  }, [opcoes]);

  // function buildSchema(opcoes: IChecklistOptions[]){
  //   const schema: any = {};
  //   opcoes.forEach(op => {
  //     schemaInitialValues[op.fileName] = null;
  //     schema[op.fileName] = yup
  //     .string()
  //     .oneOf(["Sim", "Não"])
  //     .required()
  //   })
  //   console.log(JSON.stringify(schema, null, 2));
  //   return yup.object().shape({schema})
  // }

  // Define os valores iniciais dos campos de pneu, lampadas externas e oleo
  // const initialValues: MyFormValues = {
  //   tires: null,
  //   oilLevel: null,
  //   externalLamps: null,
  // };

  return (
    <Container>
      <Header user={user} />
      <Formik
        initialValues={schemaInitialValues}
        validationSchema={validationSchema}
        onSubmit={(values, actions) => {
          setTimeout(() => {
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
            {
              opcoes.map((op, index) => {
                return (
                  <Box key={index}>
                    <CheckboxWithOptions fieldName={op.fileName} label={op.title} />
                  </Box>
                )
              })
            }

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

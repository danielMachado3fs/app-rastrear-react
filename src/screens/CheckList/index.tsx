/**
 * CheckList Screen
 *
 * Esse componente renderiza um formulário de checklist onde os usuários
 * podem avaliar diferentes itens.
 * Usa Formik para gerenciamento e validação de formulários com esquema yup.
 */

import { useNavigation, useRoute } from "@react-navigation/native";
import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import { Alert } from "react-native";
import * as yup from "yup";
import { Button } from "../../components/Button";
import { IPropsItem } from "../../components/CarSlider";
import { CheckboxWithOptions } from "../../components/CheckboxWithOptions";
import { Header } from "../../components/Header";
import { Loading } from "../../components/Loading";
import theme from "../../core/styles/theme";
import {
  IChecklist,
  IChecklistOptions,
  TypesVehicles,
} from "../../core/types/common";
import { api } from "../../lib/axios";
import { Box, Container, Footer, Form } from "./styles";

interface Params {
  user: any;
  vehicle: IPropsItem;
  km: number;
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
  const { user, vehicle, km } = route.params as Params;
  const [isLoading, setIsLoading] = useState(true);
  const [options, setOptions] = useState<IChecklistOptions[]>([]);
  const [validationSchema, setValidationSchema] = useState({});
  const [initialValues, setInitialValues] = useState({});
  const { navigate } = useNavigation();

  useEffect(() => {
    setIsLoading(true);
    fetchData(vehicle.type).then((checklist: IChecklist) => {
      setOptions(checklist.options);
      setValidationSchema(buildSchema(checklist.options));
      setInitialValues(buildInitialValues(checklist.options));
    });

    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);

  function buildSchema(options: IChecklistOptions[]) {
    const schemaFields: any = {};
    options.forEach(option => {
      schemaFields[option.fileName] = yup
        .string()
        .oneOf(["Sim", "Não"])
        .required(
          `Avaliação de ${
            option.fileName.includes("common")
              ? option.fileName.substring(6).toLowerCase()
              : option.fileName
          } é obrigatória`
        );
    });
    return yup.object().shape(schemaFields);
  }

  const buildInitialValues = (options: IChecklistOptions[]) => {
    const initialValues: any = {};

    // Define os valores iniciais dos checkbox da lista de checklist
    options.forEach(option => {
      initialValues[option.fileName] = null;
    });

    return initialValues;
  };

  const saveChecklist = async (values: any) => {
    try {
      const data = {
        vehicle: vehicle,
        kmAtual: km,
        type: 'saida',
        options: values
      }
      console.log(data);
      const response = await api.post("/checklist", data);
      if (response.data.length > 0) return response.data;
      return [];
    } catch (erro) {
      console.log(erro);
    }
  }

  return (
    <Container>
      <Header user={user} />
      {isLoading ? (
        <Loading height={100} size={50} />
      ) : (
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values, actions) => {
            saveChecklist(values).then(() => {
              Alert.alert('Checklist salvo com sucesso');
              actions.setSubmitting(false);
              navigate("home", { user });
            })
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
              {options.map((option, index) => {
                return (
                  <Box key={index}>
                    <CheckboxWithOptions
                      fieldName={option.fileName}
                      label={option.title}
                    />
                  </Box>
                );
              })}

              {/* Button */}
              <Footer>
                <Button
                  color={
                    !isValid
                      ? theme.colors.placeholderText
                      : theme.colors.primary
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
      )}
    </Container>
  );
}

/**
 * SignIn Screen
 *
 * Este componente é responsável por exibir o formulário de login, validando os campos
 * de e-mail e senha. Ele utiliza o pacote Formik e o esquema de validação Yup para
 * realizar a validação dos campos.
 */

import { useNavigation } from "@react-navigation/native";
import { Formik } from "formik";
import React from "react";
import { useWindowDimensions } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { useTheme } from "styled-components";
import * as yup from "yup";
import { Button } from "../../components/Button";
import { InputForm } from "../../components/Form/InputForm";
import { Container, Form, Label } from "./styles";

import { Alert } from "react-native";
import LogoSvg from "../../../assets/logoDetails.svg";
import { api } from "../../lib/axios";

// Define o esquema de validação para os campos de e-mail e senha usando yup
const formValidationSchema = yup.object().shape({
  email: yup.string().email().required("Email Obrigatório"),
  password: yup.string().min(5).max(12).required("Senha Obrigatória"),
});

export interface ICredenciais {
  email: string;
  password: string;
}

export function SignIn() {
  const theme = useTheme();
  const navigation = useNavigation();
  const { height } = useWindowDimensions();

  const autenticar = async (values: ICredenciais, actions: any) => {
    try{
      //Requisição para a API backend
      const response = await api.post('/signin/authenticate', values);
      actions.setSubmitting(false);
      navigation.navigate("home");
    }catch (error) {
      console.log(error);
      Alert.alert('Ops, usuário ou senha incorretos');
      actions.setSubmitting(false);
    }
  }

  // DEFINE OS VALORES INICIAIS DOS CAMPOS DO FORMULÁRIO
  const initialValues = {
    email: "",
    password: "",
  };

  return (
    <Container>
      <LogoSvg height={RFValue(height * 0.35)} />
      <Form>
        <Formik
          onSubmit={async (values, actions) => {
            setTimeout(() => {
              autenticar(values, actions);
              actions.setSubmitting(true);
            }, 500);
          }}
          initialValues={initialValues}
          validationSchema={formValidationSchema}
        >
          {({
            handleChange,
            handleBlur,
            setFieldTouched,
            handleSubmit,
            values,
            errors,
            isValid,
            touched,
            isSubmitting,
          }) => (
            <>
              {/* Email Input */}
              <Label>E-mail</Label>
              <InputForm
                onBlur={() => setFieldTouched("email", true)}
                onFocus={() => setFieldTouched("email", false)}
                error={touched.email ? errors.email : ""}
                placeholder="fulando@gmail.com"
                onChangeText={handleChange("email")}
              />

              {/* Password Input */}
              <Label>Senha</Label>
              <InputForm
                onBlur={() => setFieldTouched("password", true)}
                onFocus={() => setFieldTouched("password", false)}
                maxLength={12}
                secureTextEntry
                error={touched.password ? errors.password : ""}
                onChangeText={handleChange("password")}
              />

              {/* Button */}
              <Button
                title="ENTRAR"
                color={
                  isValid ? theme.colors.primary : theme.colors.placeholderText
                }
                onPress={handleSubmit}
                isSubmitting={isSubmitting}
                disabled={!isValid}
              />
            </>
          )}
        </Formik>
      </Form>
    </Container>
  );
}

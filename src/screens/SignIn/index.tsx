/**
 * SignIn Screen
 *
 * Este componente é responsável por exibir o formulário de login, validando os campos
 * de e-mail e senha. Ele utiliza o pacote Formik e o esquema de validação Yup para
 * realizar a validação dos campos.
 */

import React from "react";
import * as yup from "yup";
import { RFValue } from "react-native-responsive-fontsize";
import { Container, Form, Label } from "./styles";
import { InputForm } from "../../components/Form/InputForm";
import { useWindowDimensions } from "react-native";
import { Button } from "../../components/Button";
import { Formik } from "formik";
import { useTheme } from "styled-components";
import { useNavigation } from "@react-navigation/native";

import LogoSvg from "../../assets/logoDetails.svg";

// Define o esquema de validação para os campos de e-mail e senha usando yup
const formValidationSchema = yup.object().shape({
  email: yup.string().email().required("Email Obrigatório"),
  password: yup.string().min(5).max(12).required("Senha Obrigatória"),
});

export function SignIn() {
  const theme = useTheme();
  const navigation = useNavigation();

  const { height } = useWindowDimensions();

  // Define os valores iniciais dos campos de e-mail e senha
  const initialValues = {
    email: "",
    password: "",
  };

  return (
    <Container>
      <LogoSvg height={RFValue(height * 0.35)} />
      <Form>
        <Formik
          onSubmit={(values, actions) => {
            setTimeout(() => {
              console.log({ values });

              console.log(JSON.stringify(values, null, 2));

              actions.setSubmitting(false);
              navigation.navigate("startCheckList");
            }, 1000);
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

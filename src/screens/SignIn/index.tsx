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

const formValidationSchema = yup.object().shape({
  email: yup.string().email().required("Campo Obrigatório"),
  password: yup.string().min(5).max(12).required("Campo Obrigatório"),
});

export function SignIn() {
  const theme = useTheme();
  const navigation = useNavigation();

  const { height } = useWindowDimensions();

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

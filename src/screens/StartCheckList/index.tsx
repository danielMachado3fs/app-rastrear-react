import React from "react";

import { format } from "date-fns";
import { Formik } from "formik";
import * as yup from "yup";

import { Button } from "../../components/Button";
import { MaskedForm } from "../../components/Form/MaskedForm";

import { useNavigation } from "@react-navigation/native";
import { useTheme } from "styled-components";
import { Header } from "../../components/Header";
import {
  BoxSized,
  Container,
  Footer,
  Form,
  Label,
  SubTitle,
  Title,
} from "./styles";

const formValidationSchema = yup.object().shape({
  licensePlate: yup
    .string()
    .min(7, "Mínimo 7 caracteres")
    .required("A placa é obrigatorio"),
  km: yup.string().max(10, "").required("KM é obrigatorio"),
  date: yup.date().required(),
});

interface MyFormValues {
  licensePlate: string;
  km: string;
  date: Date;
}

export function StartCheckList() {
  // const { height } = useWindowDimensions();
  const theme = useTheme();
  const navigation = useNavigation();

  const initialValues: MyFormValues = {
    licensePlate: "",
    km: "",
    date: new Date(),
  };

  return (
    <Container>
      {/* Header */}
      <Header />

      {/* Form */}
      <Form>
        <Title>Checklist</Title>
        <SubTitle>Preencha os dados abaixo para iniciar o cheacklist</SubTitle>

        <Formik
          onSubmit={(values, actions) => {
            setTimeout(() => {
              console.log({ values });

              console.log(JSON.stringify(values, null, 2));

              actions.setSubmitting(false);
              navigation.navigate("checkList");
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
              <Label>Data</Label>
              <MaskedForm
                type={"custom"}
                options={{ mask: "***********" }}
                editable={false}
                autoCapitalize="characters"
                value={format(values.date, "dd/MM/yyyy")}
                autoCorrect={false}
              />
              <BoxSized />

              {/* LicensePlace Input */}
              <Label>Placa do Veiculo</Label>
              <MaskedForm
                error={touched.licensePlate ? errors.licensePlate : ""}
                type={"custom"}
                options={{
                  mask: "SSSSSSS",
                }}
                onBlur={() => setFieldTouched("licensePlate", true)}
                onFocus={() => setFieldTouched("licensePlate", false)}
                maxLength={7}
                autoCapitalize="characters"
                placeholder="ABC1234"
                onChangeText={handleChange("licensePlate")}
                // keyboardType={
                //   values.licensePlate.length >= 3 ? "numeric" : "default"
                // }
                value={values.licensePlate.toUpperCase()}
                autoCorrect={false}
              />
              <BoxSized />

              {/* KM Input */}
              <Label>Quilometragem atual</Label>
              <MaskedForm
                error={touched.licensePlate ? errors.km : ""}
                type={"custom"}
                options={{
                  mask: "999999 KM",
                }}
                onBlur={() => setFieldTouched("km", true)}
                onFocus={() => setFieldTouched("km", false)}
                maxLength={10}
                placeholder="000000 KM"
                onChangeText={handleChange("km")}
                keyboardType={"numeric"}
                value={values.km}
                autoCorrect={false}
              />

              {/* Button */}
              <Footer>
                <Button
                  color={
                    !isValid
                      ? theme.colors.placeholderText
                      : theme.colors.primary
                  }
                  title="Iniciar checklist"
                  onPress={handleSubmit}
                  disabled={!isValid}
                  isSubmitting={isSubmitting}
                />
              </Footer>
            </>
          )}
        </Formik>
      </Form>
    </Container>
  );
}

import React from "react";
import * as Yup from "yup";
import { RFValue } from "react-native-responsive-fontsize";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Container, Fields, Form, Header } from "./styles";

import LogoSvg from "../../assets/logoDetails.svg";
import { InputForm } from "../../components/Form/InputForm";
import { useWindowDimensions } from "react-native";
import { Button } from "../../components/Button";
import { REQUIRED_FORM } from "../../utils/constants";

const schema = Yup.object().shape({
  email: Yup.string().email("Informe um email válido").required(REQUIRED_FORM),
  password: Yup.string().required(REQUIRED_FORM),
});

type FormData = {
  email: string;
  password: string;
};

export function SignIn() {
  const { height } = useWindowDimensions();
  const {
    control,
    formState: { errors },
    clearErrors,
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
  });

  async function onSubmit(form: any) {
    console.log(form);
  }

  return (
    <Container
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 50 }}
    >
      <LogoSvg height={RFValue(height * 0.4)} />
      <Form>
        <InputForm
          control={control}
          name="email"
          error={errors.email! && errors?.email?.message?.toString()!}
          placeholder="Email"
          icon="envelope"
          onChange={() => clearErrors("email")}
        />
        <InputForm
          control={control}
          name="password"
          error={errors.password! && errors?.password?.message?.toString()!}
          placeholder="Senha"
          icon="lock"
          secureTextEntry={true}
          onChange={() => clearErrors("password")}
        />

        <Button
          onPress={handleSubmit(onSubmit)}
          title="Entrar"
          color="#005776"
        />
      </Form>
    </Container>
  );
}

import React from "react";
import * as Yup from "yup";
import { RFValue } from "react-native-responsive-fontsize";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller } from "react-hook-form";

import { Container, Fields, Form, Header } from "./styles";

import LogoSvg from "../../assets/logoDetails.svg";
import { useWindowDimensions } from "react-native";
import { Button } from "../../components/Button";
import { REQUIRED_FORM } from "../../utils/constants";
import { Input } from "../../components/Form/InputWithIcon";

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
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  async function onSubmit(form: FormData) {
    console.log(form);
  }

  return (
    <Container
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 50 }}
    >
      <LogoSvg height={RFValue(height * 0.4)} />
      <Form>
        <Controller
          control={control}
          render={({ field: { onChange, value } }) => (
            <Input
              value={value}
              onChangeText={onChange}
              placeholder="Email"
              icon="envelope"
              error={errors.email! && errors?.email?.message?.toString()!}
            />
          )}
          name="email"
        />
        <Controller
          control={control}
          name="password"
          render={({ field: { onChange, value } }) => (
            <Input
              value={value}
              onChangeText={onChange}
              placeholder="Senha"
              icon="envelope"
              error={errors.password! && errors?.password?.message?.toString()!}
            />
          )}
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

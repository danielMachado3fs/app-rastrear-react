// import React from "react";
// import * as Yup from "yup";
// import { RFValue } from "react-native-responsive-fontsize";
// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";

// import { Container, Fields, Form, Header } from "./styles";

// import LogoSvg from "../../assets/logoDetails.svg";
// import { InputForm } from "../../components/Form/InputForm";
// import { useWindowDimensions } from "react-native";
// import { Button } from "../../components/Button";

// const schema = Yup.object().shape({
//   email: Yup.string().required("Nome é obrigatório"),
//   password: Yup.number()
//     .typeError("Informe um valor númerico")
//     .positive("O valor não pode ser negativo")
//     .required("O valor é obrigatório"),
// });

// export function SignIn() {
//   const { height } = useWindowDimensions();
//   const {
//     control,
//     reset,
//     handleSubmit,
//     formState: { errors },
//     clearErrors,
//     getFieldState,
//   } = useForm({
//     resolver: yupResolver(schema),
//   });

//   async function handlerLogin(form: any) {
//     console.log(form);
//   }

//   return (
//     <Container>
//       <LogoSvg height={RFValue(height * 0.4)} />
//       <Form>
//         <InputForm
//           control={control}
//           name="email"
//           error={errors.email! && errors?.email?.message?.toString()!}
//           placeholder="Email"
//           onChange={() => clearErrors("email")}
//         />
//         <InputForm
//           // control={control}
//           name="password"
//           error={errors.password! && errors?.password?.message?.toString()!}
//           placeholder="Senha"
//           onChange={() => clearErrors("password")}
//         />

//         <Button
//           onPress={() => handlerLogin(getFieldState("email"))}
//           title="Entrar"
//           color="#005776"
//         />
//       </Form>
//     </Container>
//   );
// }

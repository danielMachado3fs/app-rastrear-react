import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { useWindowDimensions } from "react-native";
import { Container, Profile, Username } from "./styles";

import { RFValue } from "react-native-responsive-fontsize";
import { useTheme } from "styled-components";
import LogoSvg from "../../../assets/logoCompleto.svg";
import { IUser } from "../../core/types/common";

type Props = {
  user: any;
};

export function Header({ user }: Props) {
  const { height } = useWindowDimensions();
  const theme = useTheme();

  return (
    <Container>
      <Ionicons name="menu-sharp" size={32} color={theme.colors.primary} />
      <LogoSvg height={RFValue(height * 0.1)} />
      <Profile>
        <Ionicons name="person-circle" size={28} color={theme.colors.primary} />
        <Username>{user.name}</Username>
      </Profile>
    </Container>
  );
}

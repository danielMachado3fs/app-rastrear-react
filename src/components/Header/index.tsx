import React from "react";
import { Text, useWindowDimensions } from "react-native";
import { Container, Profile, Username } from "./styles";
import { Ionicons } from "@expo/vector-icons";

import LogoSvg from "../../assets/logoCompleto.svg";
import { RFValue } from "react-native-responsive-fontsize";
import { useTheme } from "styled-components";

export function Header() {
  const { height } = useWindowDimensions();
  const theme = useTheme();

  return (
    <Container>
      <Text>teste</Text>
      <LogoSvg height={RFValue(height * 0.1)} />
      <Profile>
        <Ionicons name="person-circle" size={28} color={theme.colors.primary} />
        <Username>Fabricio</Username>
      </Profile>
    </Container>
  );
}

import React, { useState } from "react";

import { Container, CustomTextInput } from "./styles";
import {
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "styled-components";

interface Props extends TextInputProps {
  isPasswordInput?: boolean;
  hasError: boolean;
  onTogglePasswordVisibility?: (visible: boolean) => void;
}

export function Input({
  isPasswordInput,
  onTogglePasswordVisibility,
  hasError,
  ...rest
}: Props) {
  const [hidePassword, setHidePassword] = useState(true);

  const theme = useTheme();

  const handleHidePassword = () => {
    const newHidePassword = !hidePassword;
    setHidePassword(newHidePassword);
    if (onTogglePasswordVisibility) {
      onTogglePasswordVisibility(newHidePassword);
    }
  };

  return (
    <Container
      style={[
        { borderWidth: 1, borderColor: hasError ? "red" : "transparent" },
      ]}
    >
      {isPasswordInput ? (
        <Ionicons
          name={"md-lock-closed"}
          color={theme.colors.primary}
          size={22}
          style={{ marginRight: 10 }}
        />
      ) : (
        <Ionicons
          name={"mail"}
          color={theme.colors.primary}
          size={22}
          style={{ marginRight: 10 }}
        />
      )}
      <CustomTextInput
        {...rest}
        placeholderTextColor={theme.colors.placeholderText}
      />
      {isPasswordInput && (
        <TouchableOpacity onPress={handleHidePassword}>
          <Ionicons
            name={hidePassword ? "eye" : "eye-off"}
            color={theme.colors.primary}
            size={22}
            style={{ marginLeft: 10 }}
          />
        </TouchableOpacity>
      )}
    </Container>
  );
}

import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Logo from "../assets/logo.svg";

export function Login() {
  const { navigate } = useNavigation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View style={styles.container}>
      <Logo />
      <TextInput
        value={username}
        style={styles.input}
        placeholder="Usuario"
        onChangeText={setUsername}
      />
      <TextInput
        value={password}
        style={styles.input}
        placeholder="Senha"
        onChangeText={setPassword}
      />
      <TouchableOpacity activeOpacity={0.7} style={styles.button}>
        <Text style={styles.textButton}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E6EEF1",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    margin: 10,
    padding: 8,
    height: 50,
    borderRadius: 10,
    borderColor: "#005776",
    backgroundColor: "#fff",
    width: "80%",
    fontSize: 15,
    fontFamily: "Inter_500Medium",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
    padding: 5,
    height: 50,
    borderRadius: 10,
    borderColor: "#fff",
    backgroundColor: "#005776",
    width: "80%",
  },
  textButton: {
    fontSize: 20,
    fontFamily: "Inter_700Bold",
    color: "#fff",
  },
});

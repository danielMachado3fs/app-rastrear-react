/**
 * Esse arquivo serve para criar o contexto de navegação para comunicar com o app
 * Ele se chama index para ficar mais prático de importar, pois, ao importar algo de
 * uma pasta sem definir o nome do arquivo, por padrão o react vai procurar o
 * arquivo index daquela pasta
 */
import { NavigationContainer } from "@react-navigation/native";
import { AppRoutes } from "./app.routes";
import { StyleSheet, View } from "react-native";

export function Routes() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E6EEF1",
  },
});

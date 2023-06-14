import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CheckList } from "../screens/CheckList";
import { Home } from "../screens/Home";
import { SignIn } from "../screens/SignIn";
import { StartCheckList } from "../screens/StartCheckList";
/**
 * Navigator: serve para criar o escopo de navegação
 * Screen: serve para definir pra onde cada rota vai levar (qual componente)
 */
const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    // Define o escopo, ao fazer uma configuração no Navigator, ela se aplica a todas
    // as rotas. Nesse caso há uma configuração para remover o header automatico que tem
    <Navigator screenOptions={{ headerShown: false }}>
      {/* Define as rotas e os componentes o qual elas chamarão */}
      <Screen name="login" component={SignIn} />
      <Screen name="home" component={Home} />
      <Screen name="startCheckList" component={StartCheckList} />
      <Screen name="checkList" component={CheckList} />
    </Navigator>
  );
}

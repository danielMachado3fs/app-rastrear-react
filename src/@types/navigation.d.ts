/**
 * Define as rotas disponíveis no projeto
 */
export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      //aqui dentro é definido cada rota com seus parâmetros, não é recomendado passar objetos complexos
      home: undefined;
      login: undefined;
      startCheckList: undefined;
      checkList: undefined;
    }
  }
}
// import { StackNavigationProp } from "@react-navigation/stack";

// type RootStackParamList = {
//   home: undefined;
//   login: undefined;
// };

// export type NavigationProps = StackNavigationProp<RootStackParamList>;

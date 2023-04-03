/**
 * Define as rotas disponíveis no projeto
 */
export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      //aqui dentro é definido cada rota com seus parâmetros, não é recomendado passar objetos complexos
      home: undefined;
      new: undefined;
      habit: {
        data: string;
      };
    }
  }
}

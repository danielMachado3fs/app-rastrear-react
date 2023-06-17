
export const typesStatus = ['ativo', 'inativo'] as const;
export const typesVehicles = ['passeio', 'caminhonete', 'caminhao', 'carreta', 'van'] as const;
export const situacaoChecklist = ['bom', 'ruim']

export type TypesStatus = typeof typesStatus[number]
export type TypesVehicles = typeof typesVehicles[number]
export type SituacaoChecklist = typeof situacaoChecklist[number]

//VEICULO
export interface IVehicle {
  id: number;
  model: string;
  yearManufacture: string;
  plate: string;
  dateAcquisition: Date;
  type: TypesVehicles;
  status: TypesStatus;
  image?: string;
}

//GRUPO PERMISSÕES
export interface IRole {
  id?: number;
  name: string;
  permissions: string[]
}

//ENDERECO
export interface IAdress {
  street: string;
  cep: string;
  state: string;
  city: string;
  neighborhoods: string;
  number: string;
  complement?: string;
}

//USUARIO
export interface IUser {
  id: number;
  name: string;
  email: string;
  password: string;
  address: IAdress;
  role: IRole;
}

//CHECKLIST
export interface IOpcao {
  title: string;
  situacao: SituacaoChecklist;
  descricao?: string;
}

export interface IChecklistOptions{
  title: string;
  fileName: string;
}

export interface IChecklistVehicle {
  id?: number;
  vehicle: IVehicle;
  kmAtual: number;
  options: IOpcao[];
}

export interface IChecklist {
  id?: number;
  typeVehicle: TypesVehicles;
  options: IChecklistOptions[];
}
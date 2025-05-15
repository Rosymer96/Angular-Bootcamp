import { IUsuario } from './usuario.d';
export interface IUsuario extends IUsuarioCreacion {
  id: number;
}

export interface IUsuarioCreacion {
  name: string;
  password: string;
  email: string;
  age?: number;
  address?: string;
}

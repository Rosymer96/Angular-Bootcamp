import { Injectable } from '@angular/core';
import { IUsuario, IUsuarioCreacion } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root',
})
export class UsuariosService {
  private USUARIOS_KEY: string = 'usuarios';
  public getAll(): IUsuario[] {
    const usuariosString = localStorage.getItem(this.USUARIOS_KEY);
    const usuarios: IUsuario[] = JSON.parse(usuariosString || '[]');
    return usuarios;
  }

  public getById(id: number): IUsuario | null {
    const usuarios: IUsuario[] = this.getAll();
    const usuario = usuarios.find((elemento) => {
      return elemento.id === id;
    });
    if (usuario === undefined) {
      return null;
    } else {
      return usuario;
    }
  }
  public getByNamePassword(name: string, password: string): IUsuario | null {
    const usuarios: IUsuario[] = this.getAll();
    const usuario = usuarios.find((elemento) => {
      return elemento.name === name && elemento.password === password;
    });
    if (usuario === undefined) {
      return null;
    } else {
      return usuario;
    }
  }
  public create(usuario: IUsuarioCreacion): IUsuario {
    const usuarios: IUsuario[] = this.getAll();
    const idsUsuarios: number[] = usuarios.map((usuario) => usuario.id);
    const maxId: number = Math.max(...idsUsuarios, 0);
    const nuevoUsuario: IUsuario = {
      id: maxId + 1,
      ...usuario,
    };
    usuarios.push(nuevoUsuario);
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
    return nuevoUsuario;
  }

  public edit(usuario: IUsuario): IUsuario {
    const usuarios: IUsuario[] = this.getAll();
    const usuariosFiltrados = usuarios.filter((elemento) => {
      return elemento.id !== usuario.id;
    });
    usuariosFiltrados.push(usuario);
    localStorage.setItem('usuarios', JSON.stringify(usuariosFiltrados));
    return usuario;
  }
  public delete(id: number): void {
    const usuarios: IUsuario[] = this.getAll();
    const usuariosFiltrados = usuarios.filter((elemento) => {
      return elemento.id !== id;
    });
    localStorage.setItem(this.USUARIOS_KEY, JSON.stringify(usuariosFiltrados));
  }
}

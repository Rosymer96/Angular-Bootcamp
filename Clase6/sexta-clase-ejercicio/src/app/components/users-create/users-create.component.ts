import { IUsuario } from './../../interfaces/usuario.d';
import { NgIf } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-users-create',
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './users-create.component.html',
  styleUrl: './users-create.component.scss',
})
export class UsersCreateComponent implements OnInit {
  router = inject(Router);
  activateRoute = inject(ActivatedRoute);

  usuarioId: string | null = null;

  ngOnInit(): void {
    this.activateRoute.params.subscribe((params) => {
      console.log('Parametros ruta', params);
      if (params['id']) {
        this.usuarioId = params['id'];
        const usuarios: IUsuario[] = this.getUsuarios();
        const usuario = usuarios.find((usuario) => {
          return usuario.id === Number(this.usuarioId);
        });
        console.log('Usuario', usuario);

        if (!usuario) {
          this.router.navigate(['/usuarios']);
        } else {
          this.myForm.setValue({
            name: usuario.name,
            password: usuario.password,
            email: usuario.email,
            age: usuario.age || null,
            address: usuario.address || null,
          });
        }
      } else {
      }
    });
  }

  myForm = new FormGroup({
    name: new FormControl<string>('', [Validators.required]),
    password: new FormControl<string>('', [Validators.required]),
    email: new FormControl<string>('', [Validators.required, Validators.email]),
    age: new FormControl<number | null>(null, [
      Validators.min(0),
      Validators.max(150),
    ]),
    address: new FormControl<string | null>(null),
  });

  crearOEditarUsuario(): void {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }

    const usuarios: IUsuario[] = this.getUsuarios();

    console.log('usuarios', usuarios, usuarios?.length);
    const idsUsuarios: number[] = usuarios.map((usuario) => usuario.id);
    const maxId: number = Math.max(...idsUsuarios, 0);
    const nuevoUsuario: IUsuario = {
      id: maxId + 1,
      name: this.myForm.value.name!,
      password: this.myForm.value.password!,
      email: this.myForm.value.email!,
      age: this.myForm.value.age || undefined,
      address: this.myForm.value.address || undefined,
    };
    if (this.usuarioId) {
      const usuariosFiltrados = usuarios.filter((usuario) => {
        return usuario.id !== Number(this.usuarioId);
      });
      usuariosFiltrados.push(nuevoUsuario);
      localStorage.setItem('usuarios', JSON.stringify(usuariosFiltrados));
    } else {
      usuarios.push(nuevoUsuario);
      localStorage.setItem('usuarios', JSON.stringify(usuarios));
      this.router.navigate(['/usuarios']);
    }
  }
  cancelarOBorrar(): void {
    if (this.usuarioId) {
      const usuarios: IUsuario[] = this.getUsuarios();
      const usuariosFiltrados = usuarios.filter((usuario) => {
        return usuario.id !== Number(this.usuarioId);
      });
      localStorage.setItem('usuarios', JSON.stringify(usuariosFiltrados));
      this.router.navigate(['usuarios']);
    } else {
      this.router.navigate(['usuarios']);
    }
  }

  getUsuarios(): IUsuario[] {
    const usuariosString = localStorage.getItem('usuarios');
    const usuarios: IUsuario[] = JSON.parse(usuariosString || '[]');
    return usuarios;
  }
}

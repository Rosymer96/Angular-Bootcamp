import { UsuariosService } from './../../services/usuarios.service';
import { IUsuario, IUsuarioCreacion } from './../../interfaces/usuario.d';
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
  usuariosService = inject(UsuariosService);

  usuarioId: string | null = null;

  ngOnInit(): void {
    this.activateRoute.params.subscribe((params) => {
      console.log('Parametros ruta', params);
      if (params['id']) {
        this.usuarioId = params['id'];
        const usuario: IUsuario | null = this.usuariosService.getById(
          Number(this.usuarioId)
        );
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

    const nuevoUsuario: IUsuarioCreacion = {
      name: this.myForm.value.name!,
      password: this.myForm.value.password!,
      email: this.myForm.value.email!,
      age: this.myForm.value.age || undefined,
      address: this.myForm.value.address || undefined,
    };
    if (this.usuarioId) {
      this.usuariosService.edit({
        id: Number(this.usuarioId),
        ...nuevoUsuario,
      });
    } else {
      this.usuariosService.create(nuevoUsuario);
      this.router.navigate(['/usuarios']);
    }
  }
  cancelarOBorrar(): void {
    if (this.usuarioId) {
      this.usuariosService.delete(Number(this.usuarioId));
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

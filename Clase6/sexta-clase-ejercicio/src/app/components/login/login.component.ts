import { RouterOutlet } from '@angular/router';
import { NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { IUsuario } from '../../interfaces/usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  router = inject(Router);

  myForm = new FormGroup({
    name: new FormControl<string>('', [Validators.required]),
    password: new FormControl<string>('', [Validators.required]),
  });

  messageError: string | null = null;

  submitLogin(): void {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched;
      return;
    }

    console.log('submit', this.myForm.value);
    const usuariosString: string | null = localStorage.getItem('usuarios');
    const usuarios: IUsuario[] = usuariosString
      ? JSON.parse(usuariosString)
      : [];

    const { name, password } = this.myForm.value;

    const usuarioObtenido = usuarios.find((usuario) => {
      return usuario.password === password && usuario.name === name;
    });

    if (usuarioObtenido) {
      this.router.navigate(['/usuarios']);
    } else {
      this.messageError = 'No se ha encontrado el usuario';
    }
  }
}

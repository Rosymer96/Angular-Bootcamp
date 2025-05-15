import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  miForm = new FormGroup({
    usuario: new FormControl('David'),
    contrasena: new FormControl('1234'),
  });
  rellenar(): void {}
}

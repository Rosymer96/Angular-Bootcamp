import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  router = inject(Router);
  usuario: string = '';
  contrasena: string = '';

  hacerLogin(): void {
    if (this.usuario && this.contrasena) {
      this.router.navigate(['/home']);
    } else {
      alert('Introduce tus datos');
    }
    console.log(this.usuario, this.contrasena);
  }
}

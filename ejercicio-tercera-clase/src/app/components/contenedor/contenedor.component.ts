import { Component } from '@angular/core';
import { FormComponent } from '../form/form.component';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-contenedor',
  imports: [FormComponent, CardComponent],
  templateUrl: './contenedor.component.html',
  styleUrl: './contenedor.component.css',
})
export class ContenedorComponent {
  usuario: IUsuario | undefined;
  usuarios = [];
  createUser(nombre: string): void {
    if (nombre.length > 0) {
      this.usuario = {
        nombre,
      };
    }
  }
}

export interface IUsuario {
  nombre: string;
}

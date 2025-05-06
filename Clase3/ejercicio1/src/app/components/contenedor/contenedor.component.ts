import { Usuario } from './../../models/usuario';
import { Component } from '@angular/core';
import { FormComponent } from '../form/form.component';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-contenedor',
  standalone: true,
  imports: [FormComponent, CardComponent],
  templateUrl: './contenedor.component.html',
  styleUrl: './contenedor.component.css',
})
export class ContenedorComponent {
  usuario: Usuario | undefined;
  usuarios: Usuario[] = [];

  createCard(name: string, formulario: FormComponent): void {
    if (name.length > 0) {
      this.usuario = {
        name,
      };
      this.usuarios.push(this.usuario);
      formulario.name = '';
    }
  }
}

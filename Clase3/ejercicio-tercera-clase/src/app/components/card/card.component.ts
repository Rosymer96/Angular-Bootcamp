import { IUsuario } from './../contenedor/contenedor.component';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  usuario = input<IUsuario>();
}

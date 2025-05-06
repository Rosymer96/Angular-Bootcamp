import { Component, input } from '@angular/core';
import { Usuario } from '../../models/usuario';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  usuario = input.required<Usuario>();
}

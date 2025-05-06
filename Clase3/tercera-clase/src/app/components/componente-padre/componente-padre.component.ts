import { Component } from '@angular/core';
import { HijoComponent } from '../hijo/hijo.component';

@Component({
  selector: 'app-componente-padre',
  imports: [HijoComponent],
  templateUrl: './componente-padre.component.html',
  styleUrl: './componente-padre.component.css',
})
export class ComponentePadreComponent {
  nombrePadre: string = 'Pedro';
  nombreTio: string = 'Juan';

  createNombre(nombre: string): void {
    console.log('createNombre:', nombre);
  }
}

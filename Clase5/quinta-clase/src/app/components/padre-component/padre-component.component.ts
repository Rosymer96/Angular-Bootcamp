import { Component, OnInit } from '@angular/core';
import { ElementoListadoComponent } from '../elemento-listado/elemento-listado.component';
import { ComponenteCambianteComponent } from '../componente-cambiante/componente-cambiante.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-padre-component',
  imports: [
    ComponenteCambianteComponent,
    ComponenteCambianteComponent,
    FormsModule,
  ],
  templateUrl: './padre-component.component.html',
  styleUrl: './padre-component.component.css',
})
export class PadreComponentComponent implements OnInit {
  listado: string[] = [];
  valorInput: string = 'Hola';

  ngOnInit(): void {
    console.log('ngOnInit Padre component');

    this.listado = ['Hola', 'Mi', 'Nombre', 'Es', 'David'];
  }

  crearElemento() {
    this.listado.push(`Elemento: ${this.valorInput}`);
  }

  eliminarElemento() {
    this.listado.pop();
  }
}

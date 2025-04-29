import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  imports: [],
  templateUrl: './interpolation.component.html',
  styleUrl: './interpolation.component.css',
})
export class InterpolationComponent {
  nombre: string = 'Florentin';
  edad: number = 37;
  datosDireccion: {
    direccion: string;
    codigoPostal: number;
  } = {
    direccion: 'su casa',
    codigoPostal: 23456,
  };
  ocultarDireccion: boolean = true;
  botonDesabilitado: boolean = false;
  colorP: string = 'red';
  nombreClase: 'borde' | '' = 'borde';

  onClick() {
    console.log('click');
    this.botonDesabilitado = true;
  }

  valorInput: string = '';

  changeInput(evento: Event) {
    console.log('change input', evento);
    if (evento.target) {
      const inputElement = evento.target as HTMLInputElement;
      const value = inputElement.value;
      console.log('change input value', value);
      this.valorInput = value;
    }
  }
}

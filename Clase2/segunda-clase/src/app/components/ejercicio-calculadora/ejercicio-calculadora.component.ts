import { Component } from '@angular/core';

@Component({
  selector: 'app-ejercicio-calculadora',
  imports: [],
  templateUrl: './ejercicio-calculadora.component.html',
  styleUrl: './ejercicio-calculadora.component.css',
})
export class EjercicioCalculadoraComponent {
  estilos: string = 'calculadora-stilos';
  buttonStyle: string = 'button-style';

  valor1: number | null = null;
  valor2: number | null = null;
  resultado: number | null = null;

  onChangeValor1(evento: Event): void {
    const inputElement = evento.target as HTMLInputElement;
    if (inputElement && typeof Number(inputElement) === 'number') {
      this.valor1 = Number(inputElement.value);
    } else {
      this.valor1 = null;
    }
  }

  onChangeValor2(evento: Event): void {
    const inputElement = evento.target as HTMLInputElement;
    if (inputElement && typeof Number(inputElement) === 'number') {
      this.valor2 = Number(inputElement.value);
    } else {
      this.valor2 = null;
    }
  }

  add(valor1: number | null, valor2: number | null): void {
    if (valor1 !== null && valor2 !== null) {
      this.resultado = valor1 + valor2;
    }
  }
  substrac(): void {
    if (this.valor1 !== null && this.valor2 !== null) {
      this.resultado = this.valor1 - this.valor2;
    }
  }

  mult(): void {
    
  }

  divide() {}
}

import { FormsModule } from '@angular/forms';
import { CalculadoraService } from './../../services/calculadora.service';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  imports: [FormsModule],
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.scss',
})
export class CalculadoraComponent {
  CalculadoraService = inject(CalculadoraService);

  public primerInput: number = 1;
  public segundoInput: number = 1;
  public resultado: number | null = null;

  public sumar() {
    this.resultado = this.CalculadoraService.sumar(
      this.primerInput,
      this.segundoInput
    );
  }
  public multiplicar() {
    this.resultado = this.CalculadoraService.multiplicar(
      this.primerInput,
      this.segundoInput
    );
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CalculadoraService {
  constructor() {}
  sumar(sum1: number, sum2: number): number {
    return sum1 + sum2;
  }
  multiplicar(num1: number, num2: number): number {
    return num1 * num2;
  }
}

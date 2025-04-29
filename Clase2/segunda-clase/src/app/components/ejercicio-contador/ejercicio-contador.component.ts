import { Component, computed, Signal, signal } from '@angular/core';

@Component({
  selector: 'app-ejercicio-contador',
  imports: [],
  templateUrl: './ejercicio-contador.component.html',
  styleUrl: './ejercicio-contador.component.css',
})
export class EjercicioContadorComponent {
  counter: number = 0;
  buttonStyle: string = 'button-style';

  signalCounter = signal<number>(0);

  computedSignalText: Signal<string> = computed(
    () => 'Contador signal ' + this.signalCounter()
  );

  // decreaseCounter() {
  //   this.counter -= 1;
  //   return this.counter;
  // }
  // increaseCounter() {
  //   this.counter += 1;
  //   return this.counter;
  // }
  cambiarContador(valor: -1 | 1): void {
    this.counter = this.counter + valor;
    this.signalCounter.set(this.signalCounter() + valor);
  }

  contadorATexto(valor: number): string {
    return 'Contador: ' + valor;
  }
}

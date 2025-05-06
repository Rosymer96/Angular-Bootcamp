import { Component, output, input, signal } from '@angular/core';

@Component({
  selector: 'app-form',
  imports: [],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  name: string = '';
  onAnadirNombre = output<string>();

  onChangeName(evento: Event): void {
    const input = evento.target as HTMLInputElement;
    this.name = input.value;
    console.log(this.name);
  }

  anadirNombre() {
    if (this.name.length > 0) {
      this.onAnadirNombre.emit(this.name);
    }
  }
}

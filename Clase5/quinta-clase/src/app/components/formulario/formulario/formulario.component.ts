import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  imports: [ReactiveFormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css',
})
export class FormularioComponent {
  form = new FormGroup({
    nombre: new FormControl(),
    contrasena: new FormControl(),
  });

  submit() {
    console.log('Enviar', this.form);
  }
}

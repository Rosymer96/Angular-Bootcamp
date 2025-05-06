import { Component } from '@angular/core';
import { FormularioGeneradorComponent } from './components/formulario-generador/formulario-generador.component';

@Component({
  selector: 'app-root',
  imports: [FormularioGeneradorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ejercicio-segunda-clase';
}

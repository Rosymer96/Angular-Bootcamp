import { Component } from '@angular/core';
import { FormularioGeneradorComponent } from './components/formulario-generador/formulario-generador.component';
import { CartillaGeneradaComponent } from './components/cartilla-generada/cartilla-generada.component';

@Component({
  selector: 'app-root',
  imports: [FormularioGeneradorComponent, CartillaGeneradaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ejercicio-segunda-clase';
}

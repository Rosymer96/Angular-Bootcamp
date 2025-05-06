import { ContenedorComponent } from './components/contenedor/contenedor.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [ContenedorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ejercicio1';
}

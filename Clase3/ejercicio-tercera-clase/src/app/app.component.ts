import { Component } from '@angular/core';
import { ContenedorComponent } from './components/contenedor/contenedor.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [ContenedorComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ejercicio-tercera-clase';

  mostrarMensaje: boolean = false;
  mostrarSegundoMensaje: boolean = true;
}


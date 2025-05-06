import { Component } from '@angular/core';
import { ComponentePadreComponent } from './components/componente-padre/componente-padre.component';

@Component({
  selector: 'app-root',
  imports: [ComponentePadreComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'tercera-clase';
}

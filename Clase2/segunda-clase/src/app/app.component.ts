import { Component } from '@angular/core';
import { InterpolationComponent } from './components/interpolation/interpolation.component';
import { PracticeInterpolationComponent } from './components/practice-interpolation/practice-interpolation.component';
import { EjercicioContadorComponent } from './components/ejercicio-contador/ejercicio-contador.component';
import { EjercicioCalculadoraComponent } from './components/ejercicio-calculadora/ejercicio-calculadora.component';

@Component({
  selector: 'app-root',
  imports: [
    InterpolationComponent,
    PracticeInterpolationComponent,
    EjercicioContadorComponent,
    EjercicioCalculadoraComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'segunda-clase';
}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MiPrimerComponentComponent } from './mi-primer-component/mi-primer-component.component';
import { MiSegundoComponenteComponent } from './mi-segundo-componente/mi-segundo-componente.component';

@Component({
  selector: 'app-root',
  imports: [MiPrimerComponentComponent, MiSegundoComponenteComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title: string = 'proyecto-Angular';
  value: number = 0;
  esRojo: boolean = false;
  variableNull: null = null;
  variableUndefined: undefined = undefined;
  variableMixta: number | null = null;
  // variableOpcional: string | undefined;
  variableOpcional?: string;

  funcion1(arg1: string | null): void {
    console.log('Hola');
    if (typeof arg1 === 'string') {
      console.log('string');
    }
  }
  miGato: IGato = {
    nombre: 'Miau',
    edad: 3,
  };
}

interface IGato {
  nombre: string;
  edad: number;
}

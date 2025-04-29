import { Component } from '@angular/core';

@Component({
  selector: 'app-practice-interpolation',
  imports: [],
  templateUrl: './practice-interpolation.component.html',
  styleUrl: './practice-interpolation.component.css',
})
export class PracticeInterpolationComponent {
  div1: string = 'A';
  div2: string = 'B';
  div3: string = 'C';
  div4: string = 'D';
  div5: string = 'E';
  estiloDiv: string = 'estilos-generales';
  bordeDiv2: string = 'red';
  bordeDiv3: string = 'green';

  ocultarDiv5: boolean = true;
}

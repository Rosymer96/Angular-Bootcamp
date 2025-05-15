import {
  Component,
  input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { ElementoListadoComponent } from '../elemento-listado/elemento-listado.component';

@Component({
  selector: 'app-componente-cambiante',
  imports: [ElementoListadoComponent],
  templateUrl: './componente-cambiante.component.html',
  styleUrl: './componente-cambiante.component.css',
})
export class ComponenteCambianteComponent implements OnInit, OnChanges {
  valor = input.required<string>();
  listado = input.required<string[]>();
  ngOnInit(): void {
    console.log('ngOnInit', this.valor());
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChange', changes);
  }
}

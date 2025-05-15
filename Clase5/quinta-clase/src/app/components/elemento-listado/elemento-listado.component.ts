import { Component, OnInit, input } from '@angular/core';

@Component({
  selector: 'app-elemento-listado',
  imports: [],
  templateUrl: './elemento-listado.component.html',
  styleUrl: './elemento-listado.component.css',
})
export class ElementoListadoComponent implements OnInit {
  texto = input.required<string>();

  ngOnInit(): void {
    console.log('ngOnInit Element lista'), this.texto();
  }
  ngOnDestroy() {
    console.log('ngOnDestroy elemento lista', this.texto());
  }
}

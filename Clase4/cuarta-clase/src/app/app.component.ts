import {
  DatePipe,
  JsonPipe,
  LowerCasePipe,
  UpperCasePipe,
} from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReservePipe } from './pipes/reserve.pipe';
import { FormsModule } from '@angular/forms';
import { PruebModelComponent } from './components/prueb-model/prueb-model.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    DatePipe,
    UpperCasePipe,
    LowerCasePipe,
    JsonPipe,
    ReservePipe,
    FormsModule,
    PruebModelComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'cuarta-clase';

  mifecha: Date = new Date();

  miObjeto = {
    nombre: 'Pedro',
    edad: 51,
  };

  valorInput: string = '';
}

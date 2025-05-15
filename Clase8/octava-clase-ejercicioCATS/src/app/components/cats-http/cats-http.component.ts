import { ICat } from '../../interfaces/cats';
import { ServicioHttpService } from './../../services/servicio-http.service';
import { Component, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-cats-http',
  imports: [],
  templateUrl: './cats-http.component.html',
  styleUrl: './cats-http.component.css',
})
export class CatsHttpComponent implements OnInit {
  servicioHttpService = inject(ServicioHttpService);

  public cats: ICat[] = [];

  ngOnInit(): void {
    this.servicioHttpService.getAll().subscribe((respuesta) => {
      this.cats = respuesta;
    });
  }
}

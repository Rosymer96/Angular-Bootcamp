import { IPlanta } from '../../interfaces/planta';
import { ServicioHttpService } from './../../services/servicio-http.service';
import { Component, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-teoria-http',
  imports: [],
  templateUrl: './teoria-http.component.html',
  styleUrl: './teoria-http.component.css',
})
export class TeoriaHttpComponent implements OnInit {
  servicioHttpService = inject(ServicioHttpService);

  public plantas: IPlanta[] = [];

  ngOnInit(): void {
    this.servicioHttpService.getAll().subscribe((respuesta) => {
      console.log('servicio get', respuesta);
      this.plantas = respuesta;
    });
    const planta: IPlanta = {
      nombre,
    };
  }
}

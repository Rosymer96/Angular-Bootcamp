import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { IPlanta } from '../interfaces/planta';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServicioHttpService {
  httpClient = inject(HttpClient);
  private API_URL: string = 'http://localhost:3000/plantas';

  public getAll(): Observable<IPlanta[]> {
    return this.httpClient.get<IPlanta[]>(this.API_URL);
  }
  //obtener solo una planta:

  getById(id: number): Observable<IPlanta> {
    return this.httpClient.get<IPlanta>(`${this.API_URL}/${id}`);
  }
  create(planta: IPlanta): Observable<IPlanta> {
    return this.httpClient.post<IPlanta>(this.API_URL, planta);
  }
  edit(id: number, planta: IPlanta): Observable<IPlanta> {
    return this.httpClient.put<IPlanta>(this.API_URL + '/' + id, planta);
  }
  delete(id: number): Observable<void> {
    return this.httpClient.delete<void>(this.API_URL + '/' + id);
  }
}

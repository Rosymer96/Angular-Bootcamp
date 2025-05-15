import { HttpClient } from '@angular/common/http';
import { inject, Injectable, InputSignalWithTransform } from '@angular/core';
import { Observable } from 'rxjs';
import { ICat } from '../interfaces/cats';

@Injectable({
  providedIn: 'root',
})
export class ServicioHttpService {
  httpClient = inject(HttpClient);
  private API_URL: string = 'http://localhost:3000/cats';

  public getAll(): Observable<ICat[]> {
    return this.httpClient.get<ICat[]>(this.API_URL);
  }

  public getById(id: number): Observable<ICat> {
    return this.httpClient.get<ICat>(this.API_URL, +'/' + id);
  }
  public create(cat: ICat): Observable<ICat> {
    return this.httpClient.post<ICat>(this.API_URL, cat);
  }
  public edit(id: number, cat: ICat): Observable<ICat> {
    return this.httpClient.put<ICat>(this.API_URL + '/' + id, cat);
  }
  public delete(id: number): Observable<void> {
    return this.httpClient.delete<void>(this.API_URL + '/' + id);
  }
}

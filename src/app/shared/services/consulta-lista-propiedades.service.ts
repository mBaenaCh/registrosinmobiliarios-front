import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsultaListaPropiedadesService {
  urlBase: string;
  constructor(private readonly httpClient: HttpClient) { 
    this.urlBase = "http://localhost:8080/api/propiedades";
  }

  obtenerListaPropiedades(): Observable<string[]> {
    return this.httpClient.get<string[]>(this.urlBase);
  }
}

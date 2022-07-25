import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PersonaModel } from '../models/persona';

@Injectable({
  providedIn: 'root'
})
export class ConsultaArrendatariosService {

  urlBase: string;
  constructor(private readonly http: HttpClient) { 
    this.urlBase = "http://localhost:8080/api/arrendatarios";
  }

  obtenerArrendatariosHistorial(nombrePropiedad: string): Observable<PersonaModel>{
    return this.http.get<PersonaModel>(`${this.urlBase}/${nombrePropiedad}`);
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConsultaArrendatariosService {

  urlBase: string;
  constructor(private readonly http: HttpClient) { 
    
  }
}

import { Component, OnInit, Input } from '@angular/core';
import { PersonaModel } from 'src/app/shared/models/persona';

@Component({
  selector: 'app-lista-arrendatarios',
  templateUrl: './lista-arrendatarios.component.html',
  styleUrls: ['./lista-arrendatarios.component.css']
})
export class ListaArrendatariosComponent implements OnInit {

  @Input() resultados: PersonaModel[];

  constructor() { 
    this.resultados = [];
  }

  ngOnInit(): void {
  }

}

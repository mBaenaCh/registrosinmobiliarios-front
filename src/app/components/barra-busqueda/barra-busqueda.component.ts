import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PersonaModel } from 'src/app/shared/models/persona';
import { ConsultaArrendatariosService } from 'src/app/shared/services/consulta-arrendatarios.service';
import { ConsultaListaPropiedadesService } from 'src/app/shared/services/consulta-lista-propiedades.service';
import {debounceTime, distinctUntilChanged, map} from 'rxjs/operators';
import {Observable, OperatorFunction} from 'rxjs';

@Component({
  selector: 'app-barra-busqueda',
  templateUrl: './barra-busqueda.component.html',
  styleUrls: ['./barra-busqueda.component.css']
})
export class BarraBusquedaComponent implements OnInit {

  textoIngresado: string;
  resultadosEncontrados: PersonaModel[];
  nombrePropiedades: string[];
  @Output() resultados: EventEmitter<PersonaModel[]>;

  constructor(
    private consultaArrendatariosService: ConsultaArrendatariosService,
    private consultaListaPropiedades: ConsultaListaPropiedadesService) { 
    this.resultadosEncontrados = [];
    this.resultados = new EventEmitter();
  }

  ngOnInit(): void {
    this.buscarListaPropiedades();
  }

  buscarListaPropiedades(): void{
    this.consultaListaPropiedades.obtenerListaPropiedades().subscribe(
      (data) => {
        this.nombrePropiedades = data;
      }
    )
  }

  buscarArrendatarios(textoIngresado: string): void{
    this.consultaArrendatariosService.obtenerArrendatariosHistorial(textoIngresado).subscribe(
      (data) => {
        this.resultadosEncontrados = data;
        this.resultados.emit(this.resultadosEncontrados);
      }
    )
  }

  search: OperatorFunction<string, readonly string[]> = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term.length < 2 ? []
        : this.nombrePropiedades.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
    );
  
    onClick(): void {
      this.buscarArrendatarios(this.textoIngresado);
      
    }
}

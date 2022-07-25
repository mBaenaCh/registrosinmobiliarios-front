import { Component, OnInit } from '@angular/core';
import { PersonaModel } from 'src/app/shared/models/persona';
import { ConsultaArrendatariosService } from 'src/app/shared/services/consulta-arrendatarios.service';
import { ConsultaListaPropiedadesService } from 'src/app/shared/services/consulta-lista-propiedades.service';

@Component({
  selector: 'app-barra-busqueda',
  templateUrl: './barra-busqueda.component.html',
  styleUrls: ['./barra-busqueda.component.css']
})
export class BarraBusquedaComponent implements OnInit {

  textoIngresado: string;
  resultadosEncontrados: PersonaModel[];
  nombrePropiedades: string[];

  constructor(
    private consultaArrendatariosService: ConsultaArrendatariosService,
    private consultaListaPropiedades: ConsultaListaPropiedadesService) { 
    this.resultadosEncontrados = [];
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
    this.consultaArrendatariosService.obtenerArrendatariosHistorial(textoIngresado.trim()).subscribe(
      (data) => {
        this.resultadosEncontrados = data;
      }
    )
  }
}

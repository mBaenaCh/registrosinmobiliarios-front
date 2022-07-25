import { Component, OnInit } from '@angular/core';
import { PersonaModel } from 'src/app/shared/models/persona';
import { ConsultaArrendatariosService } from 'src/app/shared/services/consulta-arrendatarios.service';

@Component({
  selector: 'app-barra-busqueda',
  templateUrl: './barra-busqueda.component.html',
  styleUrls: ['./barra-busqueda.component.css']
})
export class BarraBusquedaComponent implements OnInit {

  textoIngresado: string;
  resultadosEncontrados: PersonaModel[];

  constructor(private consultaArrendatariosService: ConsultaArrendatariosService) { 
    this,this.resultadosEncontrados = [];
  }

  ngOnInit(): void {

  }

  buscarArrendatarios(textoIngresado: string): void{
    this.consultaArrendatariosService.obtenerArrendatariosHistorial(textoIngresado.trim()).subscribe(
      (data) => {
        this.resultadosEncontrados = data;
      }
    )
  }
}

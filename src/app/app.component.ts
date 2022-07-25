import { Component } from '@angular/core';
import { PersonaModel } from './shared/models/persona';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'registrosinmobiliarios-front';
  arrResultados: PersonaModel[];

  constructor(){
    this.arrResultados = [];
  }

  
  guardarResultados($event):void {
    this.arrResultados = $event;
    console.log(this.arrResultados);
  }

}

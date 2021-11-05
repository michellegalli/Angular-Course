import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Commento } from 'src/app/modules/commento';

@Component({
  selector: 'app-commento',
  templateUrl: './commento.component.html',
  styleUrls: ['./commento.component.css']
})
export class CommentoComponent implements OnInit {
@Input("datiCommento") commento:Commento;
@Output() selezionato: EventEmitter<Commento>
  constructor() {
      this.commento= new Commento(0, "prova","prova", "prova")
      this.selezionato=new EventEmitter<Commento>()
   }

  ngOnInit(): void {
  }
onClick():void{
  this.selezionato.emit(this.commento)
}

}
